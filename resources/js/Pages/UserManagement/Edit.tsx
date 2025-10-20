import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { Link } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    student_id?: string;
    employee_id?: string;
    birthdate?: string;
    phone?: string;
    grade?: string;
}

interface Props {
    user: User;
}

export default function Edit({ user }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        grade: user.grade || '',
        birthdate: user.birthdate || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('user-management.update', user.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit User: {user.name}
                </h2>
            }
        >
            <Head title={`Edit ${user.name}`} />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="mb-6 p-4 bg-gray-50 rounded-md">
                                <h4 className="text-sm font-medium text-gray-800 mb-2">Account Information:</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                    <div>
                                        <span className="font-medium">Role:</span> 
                                        <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                                            user.role === 'admin' ? 'bg-red-100 text-red-800' :
                                            user.role === 'teacher' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-medium">ID:</span> 
                                        <span className="ml-2">{user.student_id || user.employee_id || 'N/A'}</span>
                                    </div>
                                </div>
                            </div>

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
                                    <InputLabel htmlFor="phone" value="Phone Number" />
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

                                <div>
                                    <InputLabel htmlFor="birthdate" value="Birthdate" />
                                    <TextInput
                                        id="birthdate"
                                        type="date"
                                        name="birthdate"
                                        value={data.birthdate}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('birthdate', e.target.value)}
                                    />
                                    <InputError message={errors.birthdate} className="mt-2" />
                                </div>

                                {user.role === 'student' && (
                                    <div>
                                        <InputLabel htmlFor="grade" value="Grade" />
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

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>
                                        Update User
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