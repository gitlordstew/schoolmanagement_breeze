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

interface TeacherDashboardProps {
    user: User;
    isEmailVerified: boolean;
}

export default function TeacherDashboard({ user, isEmailVerified }: TeacherDashboardProps) {
    return (
        <>
            <Head title="Teacher Dashboard" />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-3 sm:p-4 lg:p-6">
                {/* Header with EduPortal Branding */}
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-3 sm:mb-4 shadow-xl overflow-hidden">
                        {user.profile_picture ? (
                            <img 
                                src={`/storage/profile_pictures/${user.profile_picture}`} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        )}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2">EduPortal Teacher</h1>
                    <p className="text-slate-600 text-sm sm:text-base">Welcome back, {user.name}</p>
                </div>

                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Quick Stats - Mobile First */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">125</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Students</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">8</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Classes</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">23</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">To Grade</p>
                        </div>

                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-1">12</p>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">Messages</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 sm:p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm text-blue-100">Total Students</p>
                                <p className="text-lg sm:text-2xl font-bold">127</p>
                            </div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 sm:p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm text-green-100">Classes Today</p>
                                <p className="text-lg sm:text-2xl font-bold">6</p>
                            </div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-400 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm text-purple-100">Pending Grades</p>
                                <p className="text-lg sm:text-2xl font-bold">23</p>
                            </div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-400 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 sm:p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm text-orange-100">Messages</p>
                                <p className="text-lg sm:text-2xl font-bold">12</p>
                            </div>
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Class Overview */}
                <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">My Classes</h3>
                        <Link href="#" className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium">
                            Manage Classes
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { subject: 'Mathematics', grade: 'Grade 10', students: 28, nextClass: '09:00 AM' },
                            { subject: 'Advanced Math', grade: 'Grade 11', students: 25, nextClass: '11:00 AM' },
                            { subject: 'Calculus', grade: 'Grade 12', students: 22, nextClass: '02:00 PM' },
                        ].map((classItem, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">{classItem.subject}</h4>
                                    <span className="text-xs sm:text-sm text-gray-600">{classItem.grade}</span>
                                </div>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs sm:text-sm text-gray-600">Students</span>
                                        <span className="text-sm sm:text-base font-medium text-blue-600">{classItem.students}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs sm:text-sm text-gray-600">Next Class</span>
                                        <span className="text-sm sm:text-base font-medium text-green-600">{classItem.nextClass}</span>
                                    </div>
                                    <div className="pt-2 sm:pt-3 flex space-x-2">
                                        <Link href="#" className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium">
                                            View Details
                                        </Link>
                                        <span className="text-gray-400">|</span>
                                        <Link href="#" className="text-xs sm:text-sm text-green-600 hover:text-green-800 font-medium">
                                            Attendance
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Recent Activities & Tasks */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recent Activities</h3>
                            <Link href="#" className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium">
                                View All
                            </Link>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            {[
                                { 
                                    activity: 'Graded Math Quiz - Grade 10', 
                                    time: '1 hour ago', 
                                    type: 'grading',
                                    icon: '📝',
                                    status: 'completed'
                                },
                                { 
                                    activity: 'Assignment due: Algebra Problems', 
                                    time: 'Tomorrow', 
                                    type: 'deadline',
                                    icon: '⏰',
                                    status: 'upcoming'
                                },
                                { 
                                    activity: 'Parent meeting scheduled', 
                                    time: 'Oct 15, 2:00 PM', 
                                    type: 'meeting',
                                    icon: '👥',
                                    status: 'scheduled'
                                },
                                { 
                                    activity: 'Posted new lesson materials', 
                                    time: '2 days ago', 
                                    type: 'content',
                                    icon: '📚',
                                    status: 'completed'
                                },
                            ].map((activity, index) => (
                                <div key={index} className="flex items-start p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                                        <span className="text-lg sm:text-xl">{activity.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm sm:text-base font-medium text-gray-900">{activity.activity}</p>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">{activity.time}</p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                        activity.status === 'completed' 
                                            ? 'bg-green-100 text-green-800' 
                                            : activity.status === 'upcoming'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-blue-100 text-blue-800'
                                    }`}>
                                        {activity.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions & Today's Schedule */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Quick Actions */}
                        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-2 sm:space-y-3">
                                <Link href="#" className="flex items-center p-2 sm:p-3 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    <span className="text-sm sm:text-base">Create Assignment</span>
                                </Link>
                                <Link href="#" className="flex items-center p-2 sm:p-3 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                    <span className="text-sm sm:text-base">Take Attendance</span>
                                </Link>
                                <Link href="#" className="flex items-center p-2 sm:p-3 text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-lg transition-colors">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    <span className="text-sm sm:text-base">Grade Assignments</span>
                                </Link>
                                <Link href="#" className="flex items-center p-2 sm:p-3 text-orange-600 hover:text-orange-800 hover:bg-orange-50 rounded-lg transition-colors">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                    <span className="text-sm sm:text-base">Send Message</span>
                                </Link>
                            </div>
                        </div>

                        {/* Today's Schedule */}
                        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Today's Schedule</h3>
                            <div className="space-y-2 sm:space-y-3">
                                {[
                                    { time: '08:00', class: 'Math - Grade 10', room: 'Room 101' },
                                    { time: '09:30', class: 'Advanced Math - Grade 11', room: 'Room 102' },
                                    { time: '11:00', class: 'Break', room: 'Staff Room' },
                                    { time: '11:30', class: 'Calculus - Grade 12', room: 'Room 105' },
                                    { time: '13:00', class: 'Lunch Break', room: 'Cafeteria' },
                                    { time: '14:00', class: 'Math - Grade 9', room: 'Room 101' },
                                ].map((schedule, index) => (
                                    <div key={index} className={`flex items-center justify-between p-2 sm:p-3 rounded-lg ${
                                        schedule.class.includes('Break') 
                                            ? 'border-l-4 border-gray-400 bg-gray-50' 
                                            : 'border-l-4 border-blue-500 bg-blue-50'
                                    }`}>
                                        <div>
                                            <p className="text-sm sm:text-base font-medium text-gray-900">{schedule.class}</p>
                                            <p className="text-xs sm:text-sm text-gray-600">{schedule.room}</p>
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-blue-800">{schedule.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}