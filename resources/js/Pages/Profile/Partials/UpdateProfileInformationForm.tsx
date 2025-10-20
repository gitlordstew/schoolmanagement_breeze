import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage, router } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data, setData, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            grade: user.grade || '',
            student_id: user.student_id || '',
            profile_picture: null as File | null,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create FormData manually to ensure all fields are included
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        
        // Always include name and email (they're the core profile fields)
        formData.append('name', data.name);
        formData.append('email', data.email);
        
        // Include optional fields
        formData.append('phone', data.phone || '');
        formData.append('grade', data.grade || '');
        formData.append('student_id', data.student_id || '');
        
        // Include profile picture if selected
        if (data.profile_picture) {
            formData.append('profile_picture', data.profile_picture);
        }

        // Use router.post method with _method PATCH for file uploads
        router.post(route('profile.update'), formData, {
            preserveScroll: true,
            onSuccess: (page) => {
                setIsSubmitting(false);
                // Clear the preview image and file input
                setPreviewImage(null);
                setData('profile_picture', null);
                
                // Reset file input
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            },
            onError: (errors) => {
                setIsSubmitting(false);
                console.log('Profile update errors:', errors);
            },
            onFinish: () => {
                setIsSubmitting(false);
            }
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('profile_picture', file);
            
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Profile Information
                </h2>
                <p className="text-slate-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* Profile Picture */}
                <div>
                    <label className="block text-sm font-medium text-slate-900 mb-4">
                        Profile Picture
                    </label>
                    <div className="flex items-center space-x-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                            {previewImage || user.profile_picture ? (
                                <img 
                                    src={previewImage || (user.profile_picture ? `/storage/profile_pictures/${user.profile_picture}` : '')} 
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-2xl font-bold text-white">
                                    {user.name.charAt(0).toUpperCase()}
                                </span>
                            )}
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Change Photo
                            </button>
                            <p className="text-xs text-slate-600 mt-1">
                                JPG, GIF or PNG. Max size of 2MB
                            </p>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                    </div>
                    <InputError className="mt-2" message={errors.profile_picture} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete="name"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            autoComplete="tel"
                        />
                        <InputError className="mt-2" message={errors.phone} />
                    </div>

                    {user.role === 'student' && (
                        <div>
                            <label htmlFor="grade" className="block text-sm font-medium text-slate-900 mb-2">
                                Grade/Class
                            </label>
                            <input
                                id="grade"
                                type="text"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                value={data.grade}
                                onChange={(e) => setData('grade', e.target.value)}
                            />
                            <InputError className="mt-2" message={errors.grade} />
                        </div>
                    )}

                    {user.role === 'student' && (
                        <div>
                            <label htmlFor="student_id" className="block text-sm font-medium text-slate-900 mb-2">
                                Student ID
                            </label>
                            <input
                                id="student_id"
                                type="text"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                value={data.student_id}
                                onChange={(e) => setData('student_id', e.target.value)}
                            />
                            <InputError className="mt-2" message={errors.student_id} />
                        </div>
                    )}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-start">
                            <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <div>
                                <h3 className="text-sm font-medium text-yellow-800 mb-1">
                                    Email Verification Required
                                </h3>
                                <p className="text-sm text-yellow-700 mb-3">
                                    Your email address is unverified. Please verify your email to access all features.
                                </p>
                                <Link
                                    href={route('verification.send')}
                                    method="post"
                                    as="button"
                                    className="text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-3 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Resend Verification Email
                                </Link>
                            </div>
                        </div>

                        {status === 'verification-link-sent' && (
                            <div className="mt-3 text-sm font-medium text-green-600 bg-green-50 border border-green-200 rounded-lg p-3">
                                ✓ A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Saving...
                            </div>
                        ) : (
                            'Save Changes'
                        )}
                    </button>                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <div className="flex items-center text-sm text-green-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Profile updated successfully!
                        </div>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
