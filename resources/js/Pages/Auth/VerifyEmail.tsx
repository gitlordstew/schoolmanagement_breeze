import React, { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/UI';

interface VerifyEmailProps {
    status?: string;
    message?: string;
}

export default function VerifyEmail({ status, message }: VerifyEmailProps) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <>
            <Head title="Email Verification - SchoolName" />
            
            {/* Header */}
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
                <div className="h-16 sm:h-20 bg-white shadow-md flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                            <span className="text-lg sm:text-2xl font-bold text-white">S</span>
                        </div>
                        <span className="text-lg sm:text-2xl font-bold text-blue-900">SchoolName</span>
                    </div>
                    
                    <Link
                        href="/"
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>

                {/* Main Content */}
                <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="w-full max-w-md">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                            {/* Email Icon */}
                            <div className="text-center mb-6">
                                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">Verify Your Email</h2>
                                <p className="text-sm sm:text-base text-blue-700">
                                    We've sent you a verification link
                                </p>
                            </div>

                            {/* Message */}
                            {message && (
                                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm text-blue-800">{message}</p>
                                </div>
                            )}

                            <div className="mb-6 p-4 bg-blue-50/50 rounded-lg">
                                <p className="text-sm text-blue-700 leading-relaxed">
                                    Thanks for signing up! Before getting started, please verify your email address by clicking on the link we just emailed to you. If you didn't receive the email, we will gladly send you another.
                                </p>
                            </div>

                            {status === 'verification-link-sent' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-sm font-medium text-green-800">
                                            A new verification link has been sent to your email address.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={submit} className="space-y-4">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </div>
                                    ) : (
                                        'Resend Verification Email'
                                    )}
                                </Button>

                                <div className="text-center">
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                                    >
                                        Sign out
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
