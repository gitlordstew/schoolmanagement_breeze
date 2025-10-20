import React, { FormEventHandler, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/UI';

interface FormData {
    email: string;
    password: string;
    remember: boolean;
}

interface Props {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm<FormData>({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Sign In - SchoolName" />

            {/* Header */}
            <header className="bg-gradient-to-r from-slate-50 to-blue-50 shadow-sm border-b border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        <Link href="/" className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-2xl font-bold text-blue-900 tracking-tight">SchoolName</h1>
                                <p className="text-xs sm:text-sm text-blue-700 font-medium hidden sm:block">Student Portal</p>
                            </div>
                        </Link>
                        
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            {/* Registration removed - accounts are created by administrators */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Login Form */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-8 sm:py-12">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 tracking-tight">
                            Welcome Back
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-blue-700">
                            Sign in to access your account
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                        {status && (
                            <div className="mb-4 sm:mb-6 bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-green-700 font-medium">{status}</p>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-4 sm:space-y-6">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-200"
                                    placeholder="Enter your email address"
                                    required
                                    autoComplete="email"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-200"
                                        placeholder="Enter your password"
                                        required
                                        autoComplete="current-password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
                                    >
                                        {showPassword ? (
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember Me and Forgot Password */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-xs sm:text-sm text-blue-700">Remember me</span>
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            {/* Sign In Button */}
                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <div className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Signing In...
                                        </div>
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                            </div>
                        </form>

                        {/* Registration Link - Removed, accounts created by administrators */}
                        <div className="mt-6 sm:mt-8 text-center">
                            <p className="text-xs sm:text-sm lg:text-base text-blue-700">
                                Don't have an account?{' '}
                                <span className="font-semibold text-blue-600">
                                    Contact your school administrator
                                </span>
                            </p>
                        </div>

                        {/* School Info */}
                        <div className="mt-4 sm:mt-6 bg-blue-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                            <p className="text-xs text-blue-600 text-center">
                                Need help? Contact the school administration or IT support.
                            </p>
                        </div>
                    </div>

                    {/* Quick Access Cards */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-white/60 backdrop-blur-sm border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🎓</div>
                            <p className="text-xs sm:text-sm font-semibold text-blue-900">Students</p>
                            <p className="text-xs text-blue-700">Access grades, assignments</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">👨‍🏫</div>
                            <p className="text-xs sm:text-sm font-semibold text-blue-900">Teachers</p>
                            <p className="text-xs text-blue-700">Manage classes & students</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
