import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import SEO from "../components/SEO/SEO";
import Button from "../components/Button/Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactMethods = [
    {
      name: "Email",
      value: "myemail@email.com",
      href: "mailto:myemail@email.com",
      icon: Mail,
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/joel-santhosh-raja",
      href: "https://linkedin.com/in/joel-santhosh-raja",
      icon: Linkedin,
      color: "text-indigo-500 bg-indigo-500/10",
    },
    {
      name: "GitHub",
      value: "github.com/joelsanthosh",
      href: "https://github.com/joelsanthosh",
      icon: Github,
      color: "text-zinc-800 bg-zinc-850/10 dark:text-zinc-200 dark:bg-zinc-200/10",
    },
  ];

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Trigger canvas-confetti celebratory animation!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#a855f7", "#ec4899", "#10b981"],
      });
    }, 1500);
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Joel Santhosh Raja - send an email or submit the contact form to discuss opportunities."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-neonPurple rounded-full mx-auto"></div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
            Have a project in mind, want to collaborate, or just say hello? Drop a line and I'll respond as soon as possible.
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              Contact Information
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Feel free to reach out via any of these channels. I'm always open to discussing new roles, creative projects, or mentoring opportunities.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.name}
                    href={method.href}
                    target={method.name !== "Email" ? "_blank" : undefined}
                    rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 p-5 rounded-2xl border border-zinc-200/50 bg-white/50 dark:bg-brand-cardDark/50 dark:border-zinc-800/50 hover:shadow-md hover:border-brand-primary/30 dark:hover:border-brand-primary/30 transition-all group"
                  >
                    <div className={`p-3 rounded-xl ${method.color} transition-all`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                        {method.name}
                      </span>
                      <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-brand-primary transition-colors">
                        {method.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl border border-zinc-200/50 bg-white dark:border-zinc-800 dark:bg-brand-cardDark shadow-xl">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                Send a Message
              </h3>

              {submitSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out. I've received your query and will get back to you shortly.
                  </p>
                  <div className="pt-4">
                    <Button onClick={() => setSubmitSuccess(false)}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? "border-red-500 focus:ring-red-200"
                            : "border-zinc-200 dark:border-zinc-800 focus:ring-brand-primary/30 focus:border-brand-primary"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="flex items-center text-xs text-red-500 mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-500 focus:ring-red-200"
                            : "border-zinc-200 dark:border-zinc-800 focus:ring-brand-primary/30 focus:border-brand-primary"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="flex items-center text-xs text-red-500 mt-1">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-200"
                          : "border-zinc-200 dark:border-zinc-800 focus:ring-brand-primary/30 focus:border-brand-primary"
                      }`}
                      placeholder="Collaboration opportunity..."
                    />
                    {errors.subject && (
                      <span className="flex items-center text-xs text-red-500 mt-1">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:ring-red-200"
                          : "border-zinc-200 dark:border-zinc-800 focus:ring-brand-primary/30 focus:border-brand-primary"
                      }`}
                      placeholder="Describe your project or message..."
                    />
                    {errors.message && (
                      <span className="flex items-center text-xs text-red-500 mt-1">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
