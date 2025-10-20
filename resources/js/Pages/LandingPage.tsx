import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Button, ModuleButton, NewsSection } from '@/Components/UI';

export default function LandingPage({
    auth,
}: PageProps) {
    return (
        <>
            <Head title="SchoolName - School Management System" />
            
            {/* Header */}
            <header className="bg-gradient-to-r from-slate-50 to-blue-50 shadow-sm border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        <div className="flex items-center space-x-3 sm:space-x-6">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-2xl font-bold text-blue-900 tracking-tight">
                                    SchoolName
                                </h1>
                                <p className="text-xs sm:text-sm text-blue-700 font-medium hidden sm:block">Management System</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            {auth.user ? (
                                <Button
                                    href={route('dashboard')}
                                    variant="primary"
                                    size="md"
                                    className="text-sm sm:text-base"
                                >
                                    Dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        href={route('login')}
                                        variant="primary"
                                        size="sm"
                                        className="text-xs sm:text-base px-3 sm:px-6"
                                    >
                                        Login
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Welcome Section */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 tracking-tight leading-tight">
                            Welcome to SchoolName
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-blue-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                            Excellence in Education Since 1995. Our comprehensive school management system 
                            helps streamline operations for students, teachers, and administrators.
                        </p>
                        
                        {!auth.user && (
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                                <Button
                                    href={route('login')}
                                    variant="primary"
                                    size="lg"
                                    className="w-full sm:w-auto"
                                >
                                    Staff & Student Login
                                </Button>
                                {/* Registration removed - contact administrator */}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Quick Access Modules */}
            <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 tracking-tight">
                            School Management Modules
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-3xl mx-auto px-4">
                            Access all school operations through our integrated management system
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {/* Module Cards */}
                        <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">Student Records</h3>
                            <p className="text-sm sm:text-base text-blue-700 mb-4 sm:mb-6 leading-relaxed">Manage student enrollment, profiles, and academic records</p>
                            <ModuleButton>
                                Access Module
                            </ModuleButton>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">Class Timetables</h3>
                            <p className="text-sm sm:text-base text-blue-700 mb-4 sm:mb-6 leading-relaxed">Create and manage class schedules and room assignments</p>
                            <ModuleButton>
                                Access Module
                            </ModuleButton>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">Grade Management</h3>
                            <p className="text-sm sm:text-base text-blue-700 mb-4 sm:mb-6 leading-relaxed">Track grades, generate report cards, and academic analytics</p>
                            <ModuleButton>
                                Access Module
                            </ModuleButton>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">Fee Management</h3>
                            <p className="text-sm sm:text-base text-blue-700 mb-4 sm:mb-6 leading-relaxed">Handle tuition fees, payments, and financial records</p>
                            <ModuleButton>
                                Access Module
                            </ModuleButton>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m2-4h10m-9 4h9M7 7h.01M7 11h.01M7 15h.01" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">Attendance</h3>
                            <p className="text-sm sm:text-base text-blue-700 mb-4 sm:mb-6 leading-relaxed">Track daily attendance and generate attendance reports</p>
                            <ModuleButton>
                                Access Module
                            </ModuleButton>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 sm:mb-3">Communications</h3>
                            <p className="text-sm sm:text-base text-blue-700 mb-4 sm:mb-6 leading-relaxed">Send notices, messages, and updates to staff and parents</p>
                            <ModuleButton>
                                Access Module
                            </ModuleButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Quick Stats */}
            <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 tracking-tight">
                            Current Academic Year Overview
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-3xl mx-auto px-4">
                            2025-2026 Academic Year Statistics and Key Numbers
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
                        <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 sm:mb-3">850</div>
                            <div className="text-xs sm:text-sm lg:text-base text-blue-700 font-medium">Total Students</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 sm:mb-3">65</div>
                            <div className="text-xs sm:text-sm lg:text-base text-blue-700 font-medium">Teaching Staff</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 sm:mb-3">28</div>
                            <div className="text-xs sm:text-sm lg:text-base text-blue-700 font-medium">Active Classes</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 sm:mb-3">95%</div>
                            <div className="text-xs sm:text-sm lg:text-base text-blue-700 font-medium">Attendance Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Section */}
            <NewsSection />

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8 sm:py-12 lg:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                        <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                SchoolName
                            </h3>
                            <p className="text-blue-100 text-base sm:text-lg">
                                Excellence in Education Since 1995
                            </p>
                            <p className="text-blue-200 text-sm sm:text-base">
                                123 Education Lane<br />
                                Academic City, AC 12345<br />
                                Phone: (555) 123-4567
                            </p>
                        </div>
                        
                        <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl font-bold text-white">Quick Links</h4>
                            <ul className="space-y-2 sm:space-y-3 text-blue-100">
                                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base lg:text-lg">Academic Calendar</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base lg:text-lg">School Policies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base lg:text-lg">Parent Portal</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base lg:text-lg">Student Handbook</a></li>
                            </ul>
                        </div>
                        
                        <div className="space-y-4 sm:space-y-6 text-center sm:text-left sm:col-span-2 lg:col-span-1">
                            <h4 className="text-lg sm:text-xl font-bold text-white">Office Hours</h4>
                            <div className="text-blue-100 space-y-1 sm:space-y-2 text-sm sm:text-base lg:text-lg">
                                <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                                <p>Saturday: 9:00 AM - 12:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-600">
                                <p className="text-white font-semibold text-sm sm:text-base">
                                    Emergency Contact: (555) 123-9999
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-blue-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
                        <p className="text-blue-100 text-sm sm:text-base lg:text-lg">&copy; 2025 SchoolName. All rights reserved.</p>
                        <p className="text-blue-200 mt-1 sm:mt-2 text-xs sm:text-sm">School Management System v1.0</p>
                    </div>
                </div>
            </footer>
        </>
    );
}