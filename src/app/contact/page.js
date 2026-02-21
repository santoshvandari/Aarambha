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
      {/* Page Header */}
      <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-white/[0.07] backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/70 border border-white/[0.08] mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Have a question, want to volunteer, or partner with us? We&apos;d love to hear from you.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Content — Split Layout */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info Sidebar (Left) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="rounded-2xl bg-primary dark:bg-white/[0.03] dark:border dark:border-white/10 p-8 sm:p-10 text-white dark:text-text sticky top-28 overflow-hidden">
                <h3 className="text-xl font-heading font-bold mb-8 text-white dark:text-text">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 dark:bg-secondary/10">
                      <LuMail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 dark:text-muted mb-1">Email</p>
                      <p className="text-sm font-medium">info@aarambha.org</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 dark:bg-secondary/10">
                      <LuPhone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 dark:text-muted mb-1">Phone</p>
                      <p className="text-sm font-medium">+977 1-XXXXXXX</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 dark:bg-secondary/10">
                      <LuMapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 dark:text-muted mb-1">Address</p>
                      <p className="text-sm font-medium">
                        Kathmandu, Nepal
                        <br />
                        Bagmati Province
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 dark:bg-secondary/10">
                      <LuClock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 dark:text-muted mb-1">Office Hours</p>
                      <p className="text-sm font-medium">
                        Sun – Fri: 10:00 AM – 5:00 PM
                        <br />
                        Sat: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-8 pt-6 border-t border-white/10 dark:border-border">
                  <p className="text-sm text-white/50 dark:text-muted mb-4">Follow us</p>
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
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 dark:bg-secondary/10 text-white/70 dark:text-muted transition-all duration-200 hover:bg-secondary hover:text-white"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Right) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="lg:col-span-3 order-1 lg:order-2"
            >
              <h2 className="text-2xl font-heading font-bold text-text mb-2">
                Send us a Message
              </h2>
              <p className="text-muted mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
                id="contact-form"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      id="firstName"
                      type="text"
                      placeholder=" "
                      className="peer w-full rounded-lg border border-border dark:border-white/10 bg-surface dark:bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="lastName"
                      type="text"
                      placeholder=" "
                      className="peer w-full rounded-lg border border-border dark:border-white/10 bg-surface dark:bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
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
                    className="peer w-full rounded-lg border border-border dark:border-white/10 bg-surface dark:bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
                  >
                    Email Address
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-lg border border-border dark:border-white/10 bg-surface dark:bg-white/[0.04] px-4 py-3 text-sm text-text transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
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
                    className="peer w-full rounded-lg border border-border dark:border-white/10 bg-surface dark:bg-white/[0.04] px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-xs text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-secondary"
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

      {/* Map Placeholder */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-border/40 dark:border-white/10 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:bg-white/[0.03] dark:shadow-none overflow-hidden">
            <div className="relative h-72 sm:h-96 bg-background flex items-center justify-center">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              
              {/* Center content */}
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <LuMapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-1">
                  Kathmandu, Nepal
                </h3>
                <p className="text-sm text-muted">
                  Interactive map coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
