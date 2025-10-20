import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState, useRef } from 'react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfilePicture from './Partials/UpdateProfilePicture';
import UpdateBasicInfo from './Partials/UpdateBasicInfo';
import UpdateAdditionalInfo from './Partials/UpdateAdditionalInfo';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { auth } = usePage().props as any;
    const user = auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const tabs = [
        { id: 'profile', name: 'Profile Information', icon: '👤' },
        { id: 'security', name: 'Security', icon: '🔒' },
        { id: 'preferences', name: 'Preferences', icon: '⚙️' },
        { id: 'danger', name: 'Danger Zone', icon: '⚠️' },
    ];

    return (
        <>
            <Head title="Profile Settings - EduPortal" />

            {/* Custom Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <Link href={route('dashboard')} className="flex items-center">
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
                        </Link>

                        {/* Navigation & User Info */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href={route('dashboard')}
                                className="text-blue-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                ← Back to Dashboard
                            </Link>
                            
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    {/* Page Header */}
                    <div className="mb-6 sm:mb-8">
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                                        {user.profile_picture ? (
                                            <img 
                                                src={`/storage/profile_pictures/${user.profile_picture}`} 
                                                alt={user.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-2xl sm:text-3xl font-bold text-white">
                                                {user.name.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                                            Profile Settings
                                        </h1>
                                        <p className="text-slate-600 mt-1">
                                            Manage your account settings and preferences
                                        </p>
                                        <div className="flex items-center mt-2">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${
                                                user.role === 'admin' ? 'bg-red-100 text-red-800' :
                                                user.role === 'moderator' ? 'bg-green-100 text-green-800' :
                                                user.role === 'teacher' ? 'bg-purple-100 text-purple-800' :
                                                user.role === 'parent' ? 'bg-orange-100 text-orange-800' :
                                                'bg-blue-100 text-blue-800'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-6">
                        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden">
                            <nav className="flex space-x-0">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex-1 px-4 py-3 text-sm font-medium text-center transition-colors ${
                                            activeTab === tab.id
                                                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                    >
                                        <span className="mr-2">{tab.icon}</span>
                                        <span className="hidden sm:inline">{tab.name}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-6">
                        {activeTab === 'profile' && (
                            <div className="space-y-6">
                                {/* Profile Picture Section */}
                                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                    <UpdateProfilePicture className="max-w-2xl" />
                                </div>

                                {/* Basic Information Section */}
                                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                    <UpdateBasicInfo
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="max-w-2xl"
                                    />
                                </div>

                                {/* Additional Information Section */}
                                <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                    <UpdateAdditionalInfo className="max-w-2xl" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <UpdatePasswordForm className="max-w-2xl" />
                            </div>
                        )}

                        {activeTab === 'preferences' && (
                            <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <div className="max-w-2xl">
                                    <h3 className="text-lg font-medium text-slate-900 mb-4">Preferences</h3>
                                    <p className="text-slate-600 mb-4">Customize your experience with EduPortal.</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between py-3 border-b border-slate-200">
                                            <div>
                                                <h4 className="text-sm font-medium text-slate-900">Email Notifications</h4>
                                                <p className="text-xs text-slate-600">Receive email updates about your account</p>
                                            </div>
                                            <button className="bg-blue-600 relative inline-flex h-6 w-11 items-center rounded-full transition-colors">
                                                <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                                            </button>
                                        </div>
                                        
                                        <div className="flex items-center justify-between py-3 border-b border-slate-200">
                                            <div>
                                                <h4 className="text-sm font-medium text-slate-900">Dark Mode</h4>
                                                <p className="text-xs text-slate-600">Switch to dark theme</p>
                                            </div>
                                            <button className="bg-slate-200 relative inline-flex h-6 w-11 items-center rounded-full transition-colors">
                                                <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'danger' && (
                            <div className="bg-white/90 backdrop-blur-sm border border-red-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                <DeleteUserForm className="max-w-2xl" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
