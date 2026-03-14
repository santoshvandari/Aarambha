"use client";

import Button from "@/components/Button";
import { LuMail, LuPhone, LuMapPin, LuClock, LuSend } from "react-icons/lu";
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted text-text pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-textLight border border-border mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-text mb-5 leading-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-textLight max-w-2xl mx-auto"
          >
            Have a question, want to volunteer, or partner with us? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="rounded-xl bg-surface border border-border p-8 sm:p-10 text-text sticky top-28">
                <h3 className="text-xl font-heading font-bold mb-8 text-text">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <LuMail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-textLight mb-1">Email</p>
                      <p className="text-sm font-medium">info@aarambha.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <LuPhone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-textLight mb-1">Phone</p>
                      <p className="text-sm font-medium">+977 1-XXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <LuMapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-textLight mb-1">Address</p>
                      <p className="text-sm font-medium">
                        Kathmandu, Nepal
                        <br />
                        Bagmati Province
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <LuClock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-textLight mb-1">Office Hours</p>
                      <p className="text-sm font-medium">
                        Sun - Fri: 10:00 AM - 5:00 PM
                        <br />
                        Sat: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-textLight mb-4">Follow us</p>
                  <div className="flex gap-3">
                    {[
                      { label: "Facebook", icon: <CiFacebook className="h-5 w-5" /> },
                      { label: "Instagram", icon: <CiInstagram className="h-5 w-5" /> },
                      { label: "Twitter", icon: <CiTwitter className="h-5 w-5" /> },
                      { label: "LinkedIn", icon: <CiLinkedin className="h-5 w-5" /> },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-textLight transition-all duration-200 hover:bg-secondary hover:text-white"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="lg:col-span-3 order-1 lg:order-2"
            >
              <h2 className="text-2xl font-heading font-bold text-text mb-2">Send us a Message</h2>
              <p className="text-textLight mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6" id="contact-form">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      id="firstName"
                      type="text"
                      placeholder=" "
                      className="peer w-full rounded-lg border border-border bg-surface px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute left-4 top-2 text-xs text-textLight transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="lastName"
                      type="text"
                      placeholder=" "
                      className="peer w-full rounded-lg border border-border bg-surface px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-4 top-2 text-xs text-textLight transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                    >
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    className="peer w-full rounded-lg border border-border bg-surface px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs text-textLight transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                  >
                    Email Address
                  </label>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    placeholder=" "
                    className="peer w-full rounded-lg border border-border bg-surface px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-xs text-textLight transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                  >
                    Your Message
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg">
                  Send Message
                  <LuSend className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
            <div className="relative h-72 sm:h-96 bg-muted flex items-center justify-center">
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <LuMapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-1">Kathmandu, Nepal</h3>
                <p className="text-sm text-textLight">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
