// Replace these placeholder values with your real details later.
// "display" is the text shown on the card, "href" is where the click goes.
const contactItems = [
  {
    label: "Email",
    display: "ananyaacharya686@gmail.com",
    href: "mailto:ananyaacharya686@gmail.com",
    external: false,
    hint: "Send me an email",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3.5 7.5l8.5 6 8.5-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    display: "github.com/Ananyashree-gif",
    href: "https://github.com/Ananyashree-gif",
    external: true,
    hint: "View my code",
    icon: (
      <svg
        viewBox="0 0 16 16"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/ananyashree-acharya-7045a4341",
    href: "https://www.linkedin.com/in/ananyashree-acharya-7045a4341",
    external: true,
    hint: "Let's connect",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section className="contact-page">
      <div className="container contact-inner">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-lead">
          I'm always open to new opportunities, collaborations, and interesting
          projects. Feel free to connect with me.
        </p>

        <div className="contact-cards">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="contact-card"
            >
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.display}</span>
              <span className="contact-hint">
                {item.hint} <span className="contact-arrow">→</span>
              </span>
            </a>
          ))}
        </div>

        <p className="contact-closing">Looking forward to connecting with you.</p>
      </div>
    </section>
  );
}

export default Contact;