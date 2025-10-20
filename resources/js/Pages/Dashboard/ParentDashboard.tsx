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

interface ParentDashboardProps {
    user: User;
    isEmailVerified: boolean;
}

export default function ParentDashboard({ user, isEmailVerified }: ParentDashboardProps) {
    return (
        <>
            <Head title="Parent Dashboard" />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-3 sm:p-4 lg:p-6">
                {/* Mobile Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-3 sm:mb-4 shadow-xl overflow-hidden">
                        {user.profile_picture ? (
                            <img 
                                src={`/storage/profile_pictures/${user.profile_picture}`} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        )}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-light text-slate-800 mb-1 sm:mb-2">Parent Dashboard</h1>
                    <p className="text-slate-600 text-sm sm:text-base">Welcome back, {user.name}</p>
                </div>

                <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                    {/* Quick Stats - Fully Responsive */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-light text-slate-800 mb-1">2</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Children</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-light text-slate-800 mb-1">3</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Tasks</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-light text-slate-800 mb-1">7</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Messages</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-light text-slate-800 mb-1">5</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Events</p>
                        </div>
                    </div>

                    {/* Children Overview - Mobile Optimized */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">My Children</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { name: 'Emma Johnson', grade: 'Grade 5', attendance: '96%', avgGrade: 'A-', color: 'from-pink-500 to-pink-600' },
                                { name: 'Liam Johnson', grade: 'Grade 8', attendance: '94%', avgGrade: 'B+', color: 'from-cyan-500 to-cyan-600' },
                            ].map((child, index) => (
                                <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${child.color} rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-slate-800 text-sm sm:text-base truncate">{child.name}</h4>
                                            <p className="text-xs sm:text-sm text-slate-600">{child.grade}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2 sm:space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-100 rounded-lg flex items-center justify-center mr-2">
                                                    <svg className="w-3 h-3 sm:w-3 sm:h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-xs sm:text-sm text-slate-600">Attendance</span>
                                            </div>
                                            <span className="text-xs sm:text-sm font-semibold text-emerald-600">{child.attendance}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                                                    <svg className="w-3 h-3 sm:w-3 sm:h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </div>
                                                <span className="text-xs sm:text-sm text-slate-600">Grade</span>
                                            </div>
                                            <span className="text-xs sm:text-sm font-semibold text-blue-600">{child.avgGrade}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions - Mobile First */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Quick Actions</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {[
                                { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', title: 'View Grades', color: 'from-blue-500 to-blue-600' },
                                { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Schedule', color: 'from-emerald-500 to-emerald-600' },
                                { icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', title: 'Messages', color: 'from-purple-500 to-purple-600' },
                                { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Reports', color: 'from-orange-500 to-orange-600' },
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