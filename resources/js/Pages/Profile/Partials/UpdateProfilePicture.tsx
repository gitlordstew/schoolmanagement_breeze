import InputError from '@/Components/InputError';
import { Transition } from '@headlessui/react';
import { router, usePage } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

export default function UpdateProfilePicture({
    className = '',
}: {
    className?: string;
}) {
    const user = usePage().props.auth.user;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<{profile_picture?: string}>({});
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setErrors({});
            
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        if (!selectedFile) {
            setErrors({ profile_picture: 'Please select a profile picture' });
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        const formData = new FormData();
        formData.append('profile_picture', selectedFile);

        router.post(route('profile.update.picture'), formData, {
            preserveScroll: true,
            onSuccess: () => {
                setIsSubmitting(false);
                setRecentlySuccessful(true);
                setPreviewImage(null);
                setSelectedFile(null);
                
                // Reset file input
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }

                // Hide success message after 3 seconds
                setTimeout(() => setRecentlySuccessful(false), 3000);
            },
            onError: (errors) => {
                setIsSubmitting(false);
                setErrors(errors);
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Profile Picture
                </h2>
                <p className="text-slate-600">
                    Update your profile picture.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6">
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
                            className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                        >
                            Choose Photo
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

                <div className="flex items-center justify-between mt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting || !selectedFile}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <div className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Updating...
                            </div>
                        ) : (
                            'Update Picture'
                        )}
                    </button>

                    <Transition
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
                            Picture updated!
                        </div>
                    </Transition>
                </div>
            </form>
        </section>
    );
}