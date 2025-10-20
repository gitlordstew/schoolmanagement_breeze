import React, { FormEventHandler, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/UI';

interface FormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role: 'student' | 'parent' | 'teacher' | '';
    student_id?: string;
    phone?: string;
    grade?: string;
}

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<FormData>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
        student_id: '',
        phone: '',
        grade: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
            onSuccess: () => {
                // Registration successful - user will be redirected to email verification page
                console.log('Registration successful! Please check your email for verification.');
            },
            onError: (errors) => {
                console.log('Registration errors:', errors);
            }
        });
    };

    const roles = [
        { value: 'student', label: 'Student', icon: '🎓', description: 'Current student at the school' },
        { value: 'parent', label: 'Parent/Guardian', icon: '👨‍👩‍👧‍👦', description: 'Parent or guardian of a student' },
        { value: 'teacher', label: 'Teacher/Staff', icon: '👨‍🏫', description: 'School faculty or staff member' },
    ];

    const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

    return (
        <>
            <Head title="Register - SchoolName" />

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
                                <p className="text-xs sm:text-sm text-blue-700 font-medium hidden sm:block">Create Account</p>
                            </div>
                        </Link>
                        
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <Button href={route('login')} variant="ghost" size="sm" className="text-xs sm:text-sm">
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Registration Form */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen py-8 sm:py-12">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 tracking-tight">
                            Join SchoolName
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-blue-700">
                            Create your account to access the school management system
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
                        <form onSubmit={submit} className="space-y-4 sm:space-y-6">
                            {/* Role Selection */}
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-blue-900 mb-3 sm:mb-4">
                                    I am registering as a:
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                    {roles.map((role) => (
                                        <label
                                            key={role.value}
                                            className={`relative flex flex-col items-center p-3 sm:p-4 border-2 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-200 ${
                                                data.role === role.value
                                                    ? 'border-blue-600 bg-blue-50 shadow-lg transform scale-105'
                                                    : 'border-blue-200 hover:border-blue-400 hover:bg-blue-50'
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="role"
                                                value={role.value}
                                                checked={data.role === role.value}
                                                onChange={(e) => setData('role', e.target.value as 'student' | 'parent' | 'teacher')}
                                                className="sr-only"
                                            />
                                            <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">{role.icon}</span>
                                            <span className="text-sm sm:text-base font-semibold text-blue-900 mb-1">{role.label}</span>
                                            <span className="text-xs text-blue-700 text-center">{role.description}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.role && (
                                    <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.role}</p>
                                )}
                            </div>

                            {/* Personal Information */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-200"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
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
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Conditional Fields Based on Role */}
                            {data.role && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {/* Student ID (for students) */}
                                    {data.role === 'student' && (
                                        <div>
                                            <label htmlFor="student_id" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                                                Student ID
                                            </label>
                                            <input
                                                id="student_id"
                                                type="text"
                                                value={data.student_id}
                                                onChange={(e) => setData('student_id', e.target.value)}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-200"
                                                placeholder="Enter your student ID"
                                            />
                                            {errors.student_id && (
                                                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.student_id}</p>
                                            )}
                                        </div>
                                    )}

                                    {/* Grade (for students) */}
                                    {data.role === 'student' && (
                                        <div>
                                            <label htmlFor="grade" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                                                Grade Level
                                            </label>
                                            <select
                                                id="grade"
                                                value={data.grade}
                                                onChange={(e) => setData('grade', e.target.value)}
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-200"
                                            >
                                                <option value="">Select your grade</option>
                                                {grades.map((grade) => (
                                                    <option key={grade} value={grade}>{grade}</option>
                                                ))}
                                            </select>
                                            {errors.grade && (
                                                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.grade}</p>
                                            )}
                                        </div>
                                    )}

                                    {/* Phone (for all roles) */}
                                    <div className={data.role === 'student' ? '' : 'sm:col-span-2'}>
                                        <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-200"
                                            placeholder="Example 09**-***-***"
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Password Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {/* Password */}
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
                                            placeholder="Create a password"
                                            required
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

                                {/* Confirm Password */}
                                <div>
                                    <label htmlFor="password_confirmation" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password_confirmation"
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={data.password_confirmation}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base border border-blue-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/70 backdrop-blur-sm transition-all duration-200"
                                            placeholder="Confirm your password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
                                        >
                                            {showConfirmPassword ? (
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
                                    {errors.password_confirmation && (
                                        <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.password_confirmation}</p>
                                    )}
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="bg-blue-50/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                                <p className="text-xs sm:text-sm text-blue-700 mb-2 sm:mb-3">
                                    By creating an account, you agree to SchoolName's Terms of Service and Privacy Policy.
                                </p>
                                <ul className="text-xs text-blue-600 space-y-1">
                                    <li>• Your information will be used for school management purposes only</li>
                                    <li>• You can update your information at any time through your profile</li>
                                    <li>• Contact the school administration for any account-related issues</li>
                                </ul>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 sm:pt-6">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full text-sm sm:text-base"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creating Account...
                                        </div>
                                    ) : (
                                        'Create Account'
                                    )}
                                </Button>
                            </div>
                        </form>

                        {/* Login Link */}
                        <div className="mt-6 sm:mt-8 text-center">
                            <p className="text-xs sm:text-sm text-blue-700">
                                Already have an account?{' '}
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
