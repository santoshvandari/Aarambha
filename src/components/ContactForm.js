import Button from "./Button";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-text">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="rounded-lg border border-border bg-surface px-4 py-3 text-text transition-colors focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-text">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="rounded-lg border border-border bg-surface px-4 py-3 text-text transition-colors focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-text">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="resize-none rounded-lg border border-border bg-surface px-4 py-3 text-text transition-colors focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          placeholder="How can we help?"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-2 text-base w-full">
        Send Message
      </Button>
    </form>
  );
}
