import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
    role: string;
    student_id?: string;
    phone?: string;
    grade?: string;
    profile_picture?: string;
}

interface AdminDashboardProps {
    user: User;
    isEmailVerified: boolean;
}

export default function AdminDashboard({ user, isEmailVerified }: AdminDashboardProps) {
    return (
        <>
            <Head title="Admin Dashboard" />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-100 p-3 sm:p-4 lg:p-6">
                {/* Header with EduPortal Branding */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl mb-3 sm:mb-4 shadow-xl overflow-hidden">
                        {user.profile_picture ? (
                            <img 
                                src={`/storage/profile_pictures/${user.profile_picture}`} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        )}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2">EduPortal Admin</h1>
                    <p className="text-slate-600 text-sm sm:text-base">System Administrator Panel</p>
                    <p className="text-red-600 text-xs sm:text-sm font-medium mt-1">Welcome, {user.name}</p>
                </div>

                <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                    {/* System Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">1,247</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Total Users</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">342</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Active Classes</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">98.7%</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">System Uptime</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">3</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">System Alerts</p>
                        </div>
                    </div>

                    {/* Admin Management Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* User Management */}
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-slate-800">User Management</h3>
                            </div>
                            <div className="space-y-3">
                                <Link href={route('user-management.index')} className="w-full flex items-center p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-left">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-md">
                                        <span className="text-lg sm:text-xl">👥</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-800 text-sm sm:text-base">Comprehensive User Management</h4>
                                        <p className="text-xs sm:text-sm text-slate-600">Manage all users, roles, and bulk operations</p>
                                    </div>
                                </Link>
                                <Link href={route('user-management.create')} className="w-full flex items-center p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-left">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-md">
                                        <span className="text-lg sm:text-xl">➕</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-800 text-sm sm:text-base">Add New User</h4>
                                        <p className="text-xs sm:text-sm text-slate-600">Create student or teacher accounts</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* System Settings */}
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-slate-800">System Settings</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { action: 'Global Settings', desc: 'Configure system-wide settings', icon: '⚙️', color: 'from-emerald-500 to-emerald-600' },
                                    { action: 'Security Settings', desc: 'Manage authentication & security', icon: '🔒', color: 'from-red-500 to-red-600' },
                                    { action: 'Backup & Recovery', desc: 'System backup management', icon: '💾', color: 'from-orange-500 to-orange-600' },
                                ].map((item, index) => (
                                    <button key={index} className="w-full flex items-center p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-left">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-md`}>
                                            <span className="text-lg sm:text-xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-slate-800 text-sm sm:text-base">{item.action}</h4>
                                            <p className="text-xs sm:text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent System Activities */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Recent System Activities</h3>
                        </div>
                        <div className="space-y-3">
                            {[
                                { activity: 'New user registration: john.doe@email.com', time: '2 minutes ago', type: 'user', color: 'from-blue-500 to-blue-600' },
                                { activity: 'System backup completed successfully', time: '1 hour ago', type: 'system', color: 'from-emerald-500 to-emerald-600' },
                                { activity: 'Security alert: Multiple failed login attempts', time: '3 hours ago', type: 'security', color: 'from-red-500 to-red-600' },
                                { activity: 'Database maintenance completed', time: '6 hours ago', type: 'maintenance', color: 'from-orange-500 to-orange-600' },
                            ].map((activity, index) => (
                                <div key={index} className="flex items-center p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <div className={`w-3 h-3 bg-gradient-to-r ${activity.color} rounded-full mr-3 sm:mr-4 shadow-sm`}></div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-800 text-sm sm:text-base">{activity.activity}</p>
                                        <p className="text-xs sm:text-sm text-slate-600">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Admin Actions */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Quick Admin Actions</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            <Link href={route('user-management.create')} className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:scale-105 hover:border-slate-300 transition-all duration-300 group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform shadow-lg">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-slate-700 text-center leading-tight">Add User</span>
                            </Link>
                            {[
                                { icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', title: 'System Reports', color: 'from-emerald-500 to-emerald-600' },
                                { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', title: 'Configurations', color: 'from-purple-500 to-purple-600' },
                                { icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z', title: 'System Health', color: 'from-orange-500 to-orange-600' },
                            ].map((action, index) => (
                                <button key={index} className="flex flex-col items-center p-3 sm:p-4 lg:p-6 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:scale-105 hover:border-slate-300 transition-all duration-300 group">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                                        </svg>
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium text-slate-700 text-center leading-tight">{action.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}