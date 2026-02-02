import React, { useState } from 'react';
import { Button } from './ui/Button';
import { ArrowRight, MessageSquare, User, Phone, Mail, ShieldCheck, Clock, CheckCircle, AlertCircle, Loader2, MapPin } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    message: ''
  });

  const [consentState, setConsentState] = useState({
    mainConsent: false,
    sensitiveDataConsent: false, // For Group B (CA, TX, CO)
    waHealthConsent: false       // For Group C (WA)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Determine Consent Group based on State
  const getConsentGroup = (stateCode: string) => {
    const groupB = ['CA', 'TX', 'CO'];
    const groupC = ['WA'];

    if (groupC.includes(stateCode)) return 'C'; // WA
    if (groupB.includes(stateCode)) return 'B'; // CA, TX, CO
    return 'A'; // Everyone else
  };

  const currentGroup = getConsentGroup(formState.state);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!consentState.mainConsent) {
      alert("You must agree to the Terms & Privacy Policy to proceed.");
      return;
    }
    if (currentGroup === 'C' && !consentState.waHealthConsent) {
      alert("Washington residents must authorize the collection of health data to proceed.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = {
        ...formState,
        timestamp: new Date().toISOString(),
        consent_group: currentGroup,
        consents: {
          tcpa: consentState.mainConsent,
          sensitive_data: consentState.sensitiveDataConsent,
          wa_health: consentState.waHealthConsent
        },
        user_agent: navigator.userAgent
      };

      // Send to both Email (FormSubmit.co) and Google Sheets in parallel
      const [emailResponse, sheetsResponse] = await Promise.allSettled([
        // Email notification via FormSubmit.co
        fetch('https://formsubmit.co/ajax/cee86aeecedf66e1d57f7ceb2e49c07b', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _subject: 'New Claim Request - Autoclaimfiling.online',
            _template: 'table'
          })
        }),
        // Google Sheets lead tracking
        fetch('https://script.google.com/macros/s/AKfycbwDKZZDO6vGNwL-x_I-v15EzQCrCdeEgsvRee2wdG4H96XiuTqxG7-zfuaTF4kV3FTP0g/exec', {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
      ]);

      // Check if at least email was sent successfully
      const emailSuccess = emailResponse.status === 'fulfilled' && emailResponse.value.ok;

      if (emailSuccess) {
        setSubmitStatus('success');
        setFormState({ name: '', phone: '', email: '', state: '', message: '' });
        setConsentState({ mainConsent: false, sensitiveDataConsent: false, waHealthConsent: false });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsentState(prev => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const usStates = [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }, { code: 'DC', name: 'District of Columbia' }
  ];

  return (
    <section id="contact" className="relative bg-brand-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="flex flex-col lg:flex-row min-h-[600px] relative z-10">

        {/* Left Side (Dark Info) */}
        <div className="w-full lg:w-5/12 p-8 pt-16 lg:p-20 xl:p-24 flex flex-col justify-center bg-brand-dark/50 backdrop-blur-sm lg:bg-transparent">
          <div className="max-w-lg mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-sm font-medium mb-6 animate-fade-in">
              <Clock size={14} />
              <span>Limited Time Free Review</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Claim <span className="text-brand-primary">Today</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every hour counts after an accident. Secure your evidence and rights now.
            </p>

            <div className="space-y-6 border-t border-white/10 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-brand-primary transition-colors duration-300">
                  <span className="text-brand-primary font-bold group-hover:text-white transition-colors">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Instant Review</h4>
                  <p className="text-gray-400 text-sm">We analyze your case details instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-brand-primary transition-colors duration-300">
                  <span className="text-brand-primary font-bold group-hover:text-white transition-colors">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Zero Risk Guarantee</h4>
                  <p className="text-gray-400 text-sm">No fees unless we win your case.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-4 text-gray-500 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>256-bit Secure</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <div>10k+ Claims Filed</div>
            </div>
          </div>
        </div>

        {/* Right Side (Form Card) */}
        <div className="w-full lg:w-7/12 bg-gray-50 flex flex-col justify-center p-4 py-12 lg:p-20 xl:p-24 relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-dark to-transparent lg:hidden opacity-20 pointer-events-none"></div>

          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-100 max-w-xl mx-auto w-full relative">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary to-blue-400 rounded-t-2xl"></div>

            <div className="mb-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Get Your Free Evaluation</h3>
              <p className="text-gray-500 text-sm">Fill out the form below to speak with a specialist.</p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                <p className="text-green-700 text-sm font-medium">Thank you! We've received your request and will contact you shortly.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-red-700 text-sm font-medium">Something went wrong. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                {/* Name Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                      placeholder="Phone Number"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Email Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                      placeholder="E-mail"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* State Selection */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                  </div>
                  <select
                    name="state"
                    id="state"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 appearance-none"
                    value={formState.state}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select Your State</option>
                    {usStates.map((state) => (
                      <option key={state.code} value={state.code}>{state.name}</option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Legal Consents - Conditioned by State */}
              <div className="space-y-4 pt-2">

                {/* 1. Main Consent (Mandatory for ALL) */}
                <div className="flex items-start gap-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="mainConsent"
                      name="mainConsent"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                      checked={consentState.mainConsent}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="text-xs text-gray-500 leading-snug">
                    By clicking [Submit], I agree to the <a href="#terms" className="underline hover:text-brand-primary">Terms of Service</a> and <a href="#privacy" className="underline hover:text-brand-primary">Privacy Policy</a>.
                    I provide my express written consent for Autoclaimfiling.online and its <a href="#partners" className="underline hover:text-brand-primary">Marketing Partners</a> to contact me via live calls, automated dialing systems, and text messages at the number provided.
                    I understand that my consent is not a condition of purchase and that calling or submitting this form does not create an attorney-client relationship.
                  </div>
                </div>

                {/* 2. Sensitive Data Consent (Optional - Only for CA, TX, CO) */}
                {currentGroup === 'B' && (
                  <div className="flex items-start gap-3 bg-yellow-50/50 p-2 rounded-lg border border-yellow-100">
                    <div className="flex h-6 items-center">
                      <input
                        id="sensitiveDataConsent"
                        name="sensitiveDataConsent"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                        checked={consentState.sensitiveDataConsent}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="text-xs text-gray-600 leading-snug">
                      <strong>Sensitive Data Consent:</strong> I expressly consent to the collection and sharing of my sensitive personal information, including details of my injuries and medical status,
                      with Autoclaimfiling.online’s marketing partners as described in the <a href="#privacy" className="underline hover:text-brand-primary">Privacy Policy</a>.
                      I understand I can withdraw this consent at any time.
                    </div>
                  </div>
                )}

                {/* 3. WA Health Data Consent (Mandatory - Only for WA) */}
                {currentGroup === 'C' && (
                  <div className="flex items-start gap-3 bg-brand-primary/5 p-2 rounded-lg border border-brand-primary/10">
                    <div className="flex h-6 items-center">
                      <input
                        id="waHealthConsent"
                        name="waHealthConsent"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                        checked={consentState.waHealthConsent}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="text-xs text-gray-600 leading-snug">
                      <strong>Washington Health Data Consent:</strong> I provide my authorization for the collection and sharing of my consumer health data as defined by the <a href="#wa-health-policy" className="underline hover:text-brand-primary">WA Health Policy</a>.
                      I acknowledge that my health data will be shared with marketing partners to facilitate my request for legal assistance.
                    </div>
                  </div>
                )}
              </div>

              {/* Honeypot for Spam Protection (FormSubmit.co) */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              {/* Disable Captcha to improve conversion (optional, can be enabled if spam is high) */}
              <input type="hidden" name="_captcha" value="false" />

              <Button
                type="submit"
                fullWidth
                disabled={isSubmitting}
                className="group py-4 text-lg shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit For Free Review
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
              <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed px-4">
                Your information is 100% secure.
              </p>
            </form>
          </div>
        </div>

      </div >
    </section >
  );
};