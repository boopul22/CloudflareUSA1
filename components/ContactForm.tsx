import React, { useState } from 'react';
import { Button } from './ui/Button';
import { ArrowRight, MessageSquare, User, Phone, Mail, ShieldCheck, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        message: formState.message
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
        setFormState({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
                Your information is 100% secure. By submitting, you agree to our Terms & Privacy Policy.
              </p>
            </form>
          </div>
        </div>

      </div >
    </section >
  );
};