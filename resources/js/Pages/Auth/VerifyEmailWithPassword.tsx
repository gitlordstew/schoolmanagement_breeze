import { useState, FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    school_id?: string;
    grade?: string;
    phone?: string;
}

interface Props {
    user: User;
    verification_id: string;
    verification_hash: string;
}

export default function VerifyEmailWithPassword({ user, verification_id, verification_hash }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
        verification_id: verification_id,
        verification_hash: verification_hash,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('verification.verify-with-password'), {
            onFinish: () => reset('current_password', 'password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Email Verification & Password Setup" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="w-full sm:max-w-md mt-6 px-8 py-8 bg-white shadow-lg overflow-hidden sm:rounded-lg">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to EduPortal!</h1>
                        <p className="text-sm text-gray-600">Complete your account setup</p>
                    </div>

                    {/* User Info Card */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6 border border-blue-100">
                        <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                            <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Account Details
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Name:</span>
                                <span className="font-medium text-gray-800">{user.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Email:</span>
                                <span className="font-medium text-gray-800">{user.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Role:</span>
                                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                    user.role === 'admin' ? 'bg-red-100 text-red-800' :
                                    user.role === 'teacher' ? 'bg-green-100 text-green-800' :
                                    user.role === 'student' ? 'bg-blue-100 text-blue-800' :
                                    'bg-gray-100 text-gray-800'
                                }`}>
                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                </span>
                            </div>
                            {user.school_id && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">ID:</span>
                                    <span className="font-medium text-gray-800">{user.school_id}</span>
                                </div>
                            )}
                            {user.grade && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{user.role === 'student' ? 'Grade:' : 'Department:'}</span>
                                    <span className="font-medium text-gray-800">{user.grade}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                        <div className="flex items-start">
                            <svg className="h-5 w-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="font-medium text-amber-800 mb-1">Set Your Password</h4>
                                <p className="text-sm text-amber-700">
                                    Please set up your account password. After setting your password, your email will be automatically verified.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Password Form */}
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="current_password" value="Current Password (if any)" />
                            <TextInput
                                id="current_password"
                                type="password"
                                name="current_password"
                                value={data.current_password}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('current_password', e.target.value)}
                                placeholder="Leave blank if this is your first login"
                            />
                            <InputError message={errors.current_password} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="New Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                placeholder="Enter your new password"
                            />
                            <InputError message={errors.password} className="mt-2" />
                            <p className="mt-1 text-xs text-gray-600">
                                Password must be at least 8 characters long and contain letters and numbers.
                            </p>
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Confirm New Password" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                                placeholder="Confirm your new password"
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-center">
                            <PrimaryButton 
                                className="w-full justify-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" 
                                disabled={processing}
                            >
                                {processing ? 'Setting up...' : 'Set Password & Verify Email'}
                            </PrimaryButton>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500">
                            After setting your password, your email will be verified and you'll have full access to EduPortal.
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}