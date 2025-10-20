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

interface ModeratorDashboardProps {
    user: User;
    isEmailVerified: boolean;
}

export default function ModeratorDashboard({ user, isEmailVerified }: ModeratorDashboardProps) {
    return (
        <>
            <Head title="Moderator Dashboard" />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-100 p-3 sm:p-4 lg:p-6">
                {/* Header with EduPortal Branding */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl mb-3 sm:mb-4 shadow-xl overflow-hidden">
                        {user.profile_picture ? (
                            <img 
                                src={`/storage/profile_pictures/${user.profile_picture}`} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2">EduPortal Moderator</h1>
                    <p className="text-slate-600 text-sm sm:text-base">Content & User Moderation Panel</p>
                    <p className="text-green-600 text-xs sm:text-sm font-medium mt-1">Welcome, {user.name}</p>
                </div>

                <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                    {/* Moderation Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">23</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Pending Reports</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">147</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Messages Moderated</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">892</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Approved Content</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">45</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Blocked Content</p>
                        </div>
                    </div>

                    {/* Moderation Management Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* Content Moderation */}
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-slate-800">Content Moderation</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { action: 'Review Posts', desc: 'Moderate user posts and comments', icon: '📝', color: 'from-blue-500 to-blue-600' },
                                    { action: 'Media Review', desc: 'Check uploaded images and files', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' },
                                    { action: 'Flag Management', desc: 'Handle reported content', icon: '🚩', color: 'from-red-500 to-red-600' },
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

                        {/* User Moderation */}
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-slate-800">User Moderation</h3>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { action: 'User Reports', desc: 'Review reported user behavior', icon: '⚠️', color: 'from-yellow-500 to-yellow-600' },
                                    { action: 'Account Actions', desc: 'Suspend or restrict accounts', icon: '🔒', color: 'from-orange-500 to-orange-600' },
                                    { action: 'Chat Monitoring', desc: 'Monitor chat and messages', icon: '💬', color: 'from-green-500 to-green-600' },
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

                    {/* Recent Moderation Activities */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Recent Moderation Activities</h3>
                        </div>
                        <div className="space-y-3">
                            {[
                                { activity: 'Approved post by student Sarah Johnson', time: '5 minutes ago', type: 'approved', color: 'from-emerald-500 to-emerald-600' },
                                { activity: 'Flagged inappropriate comment in Math forum', time: '15 minutes ago', type: 'flagged', color: 'from-red-500 to-red-600' },
                                { activity: 'Resolved report against user JohnD123', time: '30 minutes ago', type: 'resolved', color: 'from-blue-500 to-blue-600' },
                                { activity: 'Reviewed and approved 5 assignment uploads', time: '1 hour ago', type: 'approved', color: 'from-emerald-500 to-emerald-600' },
                                { activity: 'Issued warning to user for policy violation', time: '2 hours ago', type: 'warning', color: 'from-orange-500 to-orange-600' },
                            ].map((activity, index) => (
                                <div key={index} className="flex items-center p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <div className={`w-3 h-3 bg-gradient-to-r ${activity.color} rounded-full mr-3 sm:mr-4 shadow-sm`}></div>
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-800 text-sm sm:text-base">{activity.activity}</p>
                                        <p className="text-xs sm:text-sm text-slate-600">{activity.time}</p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                        activity.type === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                                        activity.type === 'flagged' ? 'bg-red-100 text-red-800' :
                                        activity.type === 'warning' ? 'bg-orange-100 text-orange-800' :
                                        'bg-blue-100 text-blue-800'
                                    }`}>
                                        {activity.type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pending Review Queue */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <div className="flex items-center">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-slate-800">Pending Review Queue</h3>
                            </div>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">23 pending</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                { content: 'Student discussion post about study groups', type: 'Post', priority: 'Low', user: 'Alex Chen' },
                                { content: 'Image upload for science project presentation', type: 'Media', priority: 'Medium', user: 'Emma Davis' },
                                { content: 'Report: Inappropriate language in class chat', type: 'Report', priority: 'High', user: 'System' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <div className="flex-1">
                                        <p className="font-medium text-slate-800 text-sm sm:text-base">{item.content}</p>
                                        <p className="text-xs sm:text-sm text-slate-600">By: {item.user} • Type: {item.type}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                            item.priority === 'High' ? 'bg-red-100 text-red-800' :
                                            item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-green-100 text-green-800'
                                        }`}>
                                            {item.priority}
                                        </span>
                                        <button className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full hover:bg-emerald-200 transition-colors">
                                            Review
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Moderation Actions */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Quick Moderation Actions</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {[
                                { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Review Queue', color: 'from-yellow-500 to-yellow-600' },
                                { icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z', title: 'Reports', color: 'from-red-500 to-red-600' },
                                { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', title: 'Monitor Chat', color: 'from-blue-500 to-blue-600' },
                                { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Analytics', color: 'from-emerald-500 to-emerald-600' },
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