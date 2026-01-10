import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AdminDashboard() {
    const [inquiries, setInquiries] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // "Logout on refresh" - location.state is lost on reload
        if (!location.state?.fromLogin) {
            console.log('No state found, redirecting...');
            navigate('/admin/login');
            return;
        }

        const fetchInquiries = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/inquiries/list/', {
                    credentials: 'include',
                });

                if (response.status === 401) {
                    setError('Session expired or unauthorized');
                    setTimeout(() => navigate('/admin/login'), 2000);
                    return;
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                const data = await response.json();
                setInquiries(data);
            } catch (err) {
                setError('Could not connect to server');
                console.error('Error:', err);
            }
        };

        fetchInquiries();
    }, [navigate, location.state]);

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:8000/api/logout/', {
                method: 'POST',
                credentials: 'include',
            });
        } catch (err) {
            console.error('Logout error:', err);
        }
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900">Inquiry Dashboard</h1>
                        <p className="text-slate-500 mt-1">Manage all incoming messages from your portfolio</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2.5 bg-white text-red-600 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all font-semibold border border-slate-200 shadow-sm"
                    >
                        Sign Out
                    </button>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 px-6 py-4 rounded-xl mb-8 border border-red-100 font-medium">
                        {error}
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50/50 border-b border-slate-200 text-slate-600 font-semibold text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-8 py-5">Date Received</th>
                                    <th className="px-8 py-5">Name</th>
                                    <th className="px-8 py-5">Email Address</th>
                                    <th className="px-8 py-5">Subject</th>
                                    <th className="px-8 py-5">Message Content</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {inquiries.map((inquiry) => (
                                    <tr key={inquiry.id} className="hover:bg-slate-50/80 transition-colors duration-150">
                                        <td className="px-8 py-5 text-sm text-slate-500 whitespace-nowrap font-medium">
                                            {new Date(inquiry.created_at).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-8 py-5 font-bold text-slate-800">{inquiry.name}</td>
                                        <td className="px-8 py-5 text-indigo-600 font-medium">
                                            <a href={`mailto:${inquiry.email}`} className="hover:underline">{inquiry.email}</a>
                                        </td>
                                        <td className="px-8 py-5 text-slate-700 font-medium">
                                            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                                {inquiry.subject.substring(0, 20)}{inquiry.subject.length > 20 && '...'}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-slate-600 max-w-sm truncate" title={inquiry.message}>
                                            {inquiry.message}
                                        </td>
                                    </tr>
                                ))}
                                {inquiries.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-16 text-center text-slate-400">
                                            <div className="flex flex-col items-center">
                                                <svg className="w-12 h-12 mb-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-lg font-medium">No inquiries yet</p>
                                                <p className="text-sm">New messages will appear here</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
