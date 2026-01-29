import React, { useState, useEffect } from 'react';
import { FinalCTA } from './FinalCTA';

export const PrivacyChoices: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        state: '',
        doNotSell: false,
        limitSensitive: false,
        optOutAds: false,
        deleteRequest: false,
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        // Handle checkbox separately for safely accessing checked property
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Privacy Choices Submitted:', formData);
        setSubmitted(true);
        // Here you would typically send the data to your backend
    };

    if (submitted) {
        return (
            <div className="pt-24 min-h-screen bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Request Received</h1>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mt-8">
                            <p className="text-lg text-green-800">
                                We have received your request to opt-out. Your information has been added to our suppression list, and we will no longer share your data with marketing partners.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-6 px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primaryHover transition-colors"
                            >
                                Return to Form
                            </button>
                        </div>
                    </div>
                </div>
                <FinalCTA />
            </div>
        )
    }

    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">YOUR PRIVACY CHOICES</h1>
                    <p className="text-gray-500 text-sm">
                        Last Updated: January 26, 2026
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                    <p>
                        If you are a resident of California, Colorado, Connecticut, Texas, Utah, or Virginia, you have specific rights regarding your personal data. This page allows you to exercise your Right to Opt-Out of the sale/sharing of your data and your Right to Limit the use of your sensitive personal information.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-brand-dark mb-4">1. NOTICE OF DATA PRACTICES</h2>
                        <p className="mb-4">
                            Autoclaimfiling.online is a marketing and technology platform. To provide our services, we "sell" or "share" your information (including identifiers and accident details) with our Marketing Partners (law firms and intake specialists). Because the information you provide often includes details about your physical injuries, it is classified as Sensitive Personal Information.
                        </p>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                            <p className="text-yellow-800 font-medium">
                                PLEASE NOTE: Our service is built on the transfer of this data. If you opt-out or limit the use of this data, we cannot match you with a law firm or process your inquiry.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-dark mb-6">2. EXERCISE YOUR RIGHTS</h2>
                        <p className="mb-6">
                            Please use the form below to submit your request. We will process your request within the timeframe required by your state’s law (typically 15–45 days).
                        </p>

                        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 space-y-6">

                            <div>
                                <h3 className="text-lg font-bold text-brand-dark mb-4">Step 1: Your Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-gray-400 text-xs">(Essential for suppression)</span></label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State of Residence</label>
                                        <select
                                            id="state"
                                            name="state"
                                            required
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white"
                                        >
                                            <option value="">Select State</option>
                                            <option value="CA">California (CA)</option>
                                            <option value="TX">Texas (TX)</option>
                                            <option value="CO">Colorado (CO)</option>
                                            <option value="WA">Washington (WA)</option>
                                            <option value="VA">Virginia (VA)</option>
                                            <option value="CT">Connecticut (CT)</option>
                                            <option value="UT">Utah (UT)</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-bold text-brand-dark mb-4">Step 2: Select Your Request</h3>
                                <div className="space-y-4">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="doNotSell"
                                            checked={formData.doNotSell}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 text-brand-primary rounded focus:ring-brand-primary"
                                        />
                                        <span className="text-sm text-gray-700">
                                            <strong>Do Not Sell or Share My Personal Information:</strong> Stop the transfer of my data to third parties for marketing or administrative fees.
                                        </span>
                                    </label>

                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="limitSensitive"
                                            checked={formData.limitSensitive}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 text-brand-primary rounded focus:ring-brand-primary"
                                        />
                                        <span className="text-sm text-gray-700">
                                            <strong>Limit the Use and Disclosure of My Sensitive Personal Information:</strong> I request that you restrict the use of my health/injury data to only what is strictly necessary to provide the service. (Note: This will prevent us from sharing your injury details with law firms).
                                        </span>
                                    </label>

                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="optOutAds"
                                            checked={formData.optOutAds}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 text-brand-primary rounded focus:ring-brand-primary"
                                        />
                                        <span className="text-sm text-gray-700">
                                            <strong>Opt-Out of Targeted Advertising:</strong> Do not use my data for cross-context behavioral advertising.
                                        </span>
                                    </label>

                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="deleteRequest"
                                            checked={formData.deleteRequest}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 text-brand-primary rounded focus:ring-brand-primary"
                                        />
                                        <span className="text-sm text-gray-700">
                                            <strong>Request to Delete:</strong> Permanently remove my record from your database.
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-brand-primaryHover transition-all shadow-lg hover:shadow-brand-primary/30 transform hover:-translate-y-0.5"
                            >
                                SUBMIT PRIVACY REQUEST
                            </button>

                        </form>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-dark mb-4">3. AUTOMATED OPT-OUT (GPC)</h2>
                        <p>
                            We honor Global Privacy Control (GPC) signals. If your browser or device sends a GPC signal, we will automatically opt you out of the "sale" and "sharing" of your personal information for that specific session without you needing to fill out the form above.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-dark mb-4">4. OTHER CONTACT METHODS</h2>
                        <p className="mb-2">If you have difficulty using the form, you may also submit your request via:</p>
                        <p><strong>Email:</strong> <a href="mailto:privacy@autofileclaim.com" className="text-brand-primary hover:underline">privacy@autofileclaim.com</a></p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-brand-dark mb-4">5. AUTHORIZED AGENTS</h2>
                        <p>
                            If you are submitting this request on behalf of another person, you must provide written proof of your authority (such as a power of attorney) to <a href="mailto:privacy@autofileclaim.com" className="text-brand-primary hover:underline">privacy@autofileclaim.com</a> before we can process the request.
                        </p>
                    </section>

                </div>
            </div>
            <FinalCTA />
        </div>
    );
};
