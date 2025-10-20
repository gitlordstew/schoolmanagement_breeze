import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import StudentDashboard from './Dashboard/StudentDashboard';
import ParentDashboard from './Dashboard/ParentDashboard';
import TeacherDashboard from './Dashboard/TeacherDashboard';
import AdminDashboard from './Dashboard/AdminDashboard';
import ModeratorDashboard from './Dashboard/ModeratorDashboard';

export default function Dashboard() {
    const { auth } = usePage().props as any;
    const user = auth.user;
    const isEmailVerified = user.email_verified_at !== null;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowingNavigationDropdown(false);
            }
        }

        if (showingNavigationDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showingNavigationDropdown]);

    // Function to render role-specific dashboard
    const renderRoleDashboard = () => {
        if (!isEmailVerified) {
            return (
                <div className="text-center py-8">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Email Verification Required</h4>
                    <p className="text-gray-600 mb-4">
                        Please verify your email address to unlock all dashboard features.
                    </p>
                    <Link
                        href={route('verification.notice')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                        Verify Email Address
                    </Link>
                </div>
            );
        }

        switch (user.role) {
            case 'student':
                return <StudentDashboard user={user} isEmailVerified={isEmailVerified} />;
            case 'parent':
                return <ParentDashboard user={user} isEmailVerified={isEmailVerified} />;
            case 'teacher':
                return <TeacherDashboard user={user} isEmailVerified={isEmailVerified} />;
            case 'admin':
                return <AdminDashboard user={user} isEmailVerified={isEmailVerified} />;
            case 'moderator':
                return <ModeratorDashboard user={user} isEmailVerified={isEmailVerified} />;
            default:
                return (
                    <div className="text-center py-8">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Welcome to the Dashboard</h4>
                        <p className="text-gray-600">Your role-specific dashboard will appear here.</p>
                    </div>
                );
        }
    };

    return (
        <>
            <Head title="Dashboard" />

            {/* Custom Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-3">
                                <h1 className="text-white text-lg font-medium">EduPortal</h1>
                            </div>
                        </div>

                        {/* User Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                className="flex items-center space-x-3 text-white hover:bg-blue-700 rounded-lg px-3 py-2 transition-colors"
                            >
                                <div className="text-right hidden sm:block">
                                    <p className="text-white text-sm font-medium">{user.name}</p>
                                    <p className="text-blue-200 text-xs capitalize">{user.role}</p>
                                </div>
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                                    {user.profile_picture ? (
                                        <img 
                                            src={`/storage/profile_pictures/${user.profile_picture}`} 
                                            alt="Profile" 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white text-sm font-medium">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    )}
                                </div>
                                <svg className="w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {showingNavigationDropdown && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                    <div className="py-1">
                                        {/* User Info in Dropdown */}
                                        <div className="px-4 py-3 border-b border-gray-200">
                                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                            <p className="text-sm text-gray-600">{user.email}</p>
                                            <span className="inline-flex items-center px-2 py-1 mt-2 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                                                {user.role}
                                            </span>
                                        </div>

                                        {/* Navigation Links */}
                                        <Link
                                            href={route('profile.edit')}
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Profile Settings
                                        </Link>

                                        {!isEmailVerified && (
                                            <Link
                                                href={route('verification.notice')}
                                                className="flex items-center px-4 py-2 text-sm text-orange-700 hover:bg-orange-50 transition-colors"
                                            >
                                                <svg className="w-4 h-4 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Verify Email
                                            </Link>
                                        )}

                                        <div className="border-t border-gray-200 my-1"></div>

                                        {/* Logout */}
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors"
                                        >
                                            <svg className="w-4 h-4 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            Log Out
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                    {/* Email Verification Warning */}
                    {!isEmailVerified && (
                        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-yellow-800">
                                        Email verification required
                                    </h3>
                                    <p className="text-sm text-yellow-700 mt-1">
                                        Please verify your email address to access all features. Check your inbox for a verification link.
                                    </p>
                                </div>
                                <Link
                                    href={route('verification.notice')}
                                    className="ml-4 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    Verify Email
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Welcome Card */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg mb-6">
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Welcome back, {user.name}!
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Role: <span className="font-medium capitalize">{user.role}</span>
                                        {user.role === 'student' && user.grade && (
                                            <span className="ml-2">• Grade: {user.grade}</span>
                                        )}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                        isEmailVerified 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {isEmailVerified ? (
                                            <>
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Email Verified
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
                                                </svg>
                                                Unverified
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="min-h-screen">
                            {renderRoleDashboard()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
