import InputError from '@/Components/InputError';
import { Transition } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

export default function UpdateAdditionalInfo({
    className = '',
}: {
    className?: string;
}) {
    const user = usePage().props.auth.user;
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const { data, setData, patch, errors, processing } = useForm({
        phone: user.phone || '',
        grade: user.grade || '',
        student_id: user.student_id || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update.additional'), {
            preserveScroll: true,
            onSuccess: () => {
                setRecentlySuccessful(true);
                setTimeout(() => setRecentlySuccessful(false), 3000);
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Additional Information
                </h2>
                <p className="text-slate-600">
                    Update your contact and academic information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
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
                            placeholder="Enter your phone number"
                        />
                        <InputError className="mt-2" message={errors.phone} />
                    </div>

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
                            placeholder="e.g., Grade 10, Year 1"
                        />
                        <InputError className="mt-2" message={errors.grade} />
                    </div>
                </div>

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
                        placeholder="Enter your student ID"
                    />
                    <InputError className="mt-2" message={errors.student_id} />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {processing ? (
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
                            Information updated!
                        </div>
                    </Transition>
                </div>
            </form>
        </section>
    );
}