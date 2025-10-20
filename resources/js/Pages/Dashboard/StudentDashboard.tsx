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

interface StudentDashboardProps {
    user: User;
    isEmailVerified: boolean;
}

export default function StudentDashboard({ user, isEmailVerified }: StudentDashboardProps) {
    return (
        <>
            <Head title="Student Dashboard" />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-3 sm:p-4 lg:p-6">
                {/* Header with EduPortal Branding */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-3 sm:mb-4 shadow-xl overflow-hidden">
                        {user.profile_picture ? (
                            <img 
                                src={`/storage/profile_pictures/${user.profile_picture}`} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        )}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2">EduPortal Student</h1>
                    <p className="text-slate-600 text-sm sm:text-base">Welcome back, {user.name}</p>
                    {user.grade && <p className="text-indigo-600 text-xs sm:text-sm font-medium mt-1">{user.grade}</p>}
                </div>

                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Quick Stats - Mobile First */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">A-</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Average Grade</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">5</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Assignments</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">96%</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Attendance</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">3</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Classes Today</p>
                        </div>
                    </div>

                    {/* Today's Schedule - Mobile Optimized */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Today's Schedule</h3>
                        </div>
                        <div className="space-y-3">
                            {[
                                { time: '08:00 AM', subject: 'Mathematics', teacher: 'Mrs. Johnson', room: 'Room 101', color: 'from-blue-500 to-blue-600' },
                                { time: '09:30 AM', subject: 'English Literature', teacher: 'Mr. Smith', room: 'Room 205', color: 'from-emerald-500 to-emerald-600' },
                                { time: '11:00 AM', subject: 'Science', teacher: 'Dr. Wilson', room: 'Lab 1', color: 'from-purple-500 to-purple-600' },
                                { time: '01:00 PM', subject: 'History', teacher: 'Ms. Brown', room: 'Room 303', color: 'from-orange-500 to-orange-600' },
                            ].map((schedule, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center mb-2 sm:mb-0">
                                        <div className={`w-3 h-3 bg-gradient-to-r ${schedule.color} rounded-full mr-3 sm:mr-4 shadow-sm`}></div>
                                        <div>
                                            <h4 className="font-medium text-slate-800 text-sm sm:text-base">{schedule.subject}</h4>
                                            <p className="text-xs sm:text-sm text-slate-600">{schedule.teacher} • {schedule.room}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium text-indigo-600 ml-6 sm:ml-0">{schedule.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Assignments - Mobile Optimized */}
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-medium text-slate-800">Recent Assignments</h3>
                        </div>
                        <div className="space-y-3">
                            {[
                                { title: 'Math Homework Ch. 5', subject: 'Mathematics', due: 'Due Tomorrow', status: 'pending', color: 'from-orange-500 to-orange-600' },
                                { title: 'Essay on Climate Change', subject: 'English', due: 'Due Oct 18', status: 'submitted', color: 'from-blue-500 to-blue-600' },
                                { title: 'Chemistry Lab Report', subject: 'Science', due: 'Due Oct 20', status: 'graded', grade: 'A+', color: 'from-emerald-500 to-emerald-600' },
                            ].map((assignment, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center mb-2 sm:mb-0">
                                        <div className={`w-3 h-3 bg-gradient-to-r ${assignment.color} rounded-full mr-3 sm:mr-4 shadow-sm`}></div>
                                        <div>
                                            <h4 className="font-medium text-slate-800 text-sm sm:text-base">{assignment.title}</h4>
                                            <p className="text-xs sm:text-sm text-slate-600">{assignment.subject}</p>
                                        </div>
                                    </div>
                                    <div className="text-left sm:text-right ml-6 sm:ml-0">
                                        {assignment.grade && (
                                            <p className="text-xs sm:text-sm font-medium text-emerald-600 mb-1">{assignment.grade}</p>
                                        )}
                                        <p className="text-xs sm:text-sm text-indigo-600 font-medium">{assignment.due}</p>
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
                                { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', title: 'View Grades', color: 'from-emerald-500 to-emerald-600' },
                                { icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', title: 'Assignments', color: 'from-blue-500 to-blue-600' },
                                { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Schedule', color: 'from-purple-500 to-purple-600' },
                                { icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', title: 'Messages', color: 'from-orange-500 to-orange-600' },
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