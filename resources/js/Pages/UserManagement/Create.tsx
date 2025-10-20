import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        role: 'student',
        birthdate: '',
        phone: '',
        grade: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('user-management.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create New User
                </h2>
            }
        >
            <Head title="Create User" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Full Name" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email Address" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="role" value="Role" />
                                    <select
                                        id="role"
                                        name="role"
                                        value={data.role}
                                        onChange={(e) => setData('role', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        required
                                    >
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                    </select>
                                    <InputError message={errors.role} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="birthdate" value="Birthdate" />
                                    <TextInput
                                        id="birthdate"
                                        type="date"
                                        name="birthdate"
                                        value={data.birthdate}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('birthdate', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.birthdate} className="mt-2" />
                                    <p className="mt-1 text-sm text-gray-600">
                                        Default password will be birthdate in MMDDYYYY format
                                    </p>
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone" value="Phone Number (Optional)" />
                                    <TextInput
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('phone', e.target.value)}
                                    />
                                    <InputError message={errors.phone} className="mt-2" />
                                </div>

                                {data.role === 'student' && (
                                    <div>
                                        <InputLabel htmlFor="grade" value="Grade (Optional)" />
                                        <TextInput
                                            id="grade"
                                            name="grade"
                                            value={data.grade}
                                            className="mt-1 block w-full"
                                            placeholder="e.g., Grade 9, Class A"
                                            onChange={(e) => setData('grade', e.target.value)}
                                        />
                                        <InputError message={errors.grade} className="mt-2" />
                                    </div>
                                )}

                                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                                    <h4 className="text-sm font-medium text-blue-800 mb-2">Account Details:</h4>
                                    <ul className="text-sm text-blue-700 space-y-1">
                                        <li>• {data.role === 'student' ? 'Student ID will be auto-generated (YYYYMM001 format)' : 'Employee ID will be auto-generated'}</li>
                                        <li>• Default password will be birthdate in MMDDYYYY format</li>
                                        <li>• User will be required to change password on first login</li>
                                        <li>• Email will be automatically verified</li>
                                    </ul>
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>
                                        Create User
                                    </PrimaryButton>

                                    <Link href={route('user-management.index')}>
                                        <SecondaryButton type="button">
                                            Cancel
                                        </SecondaryButton>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}