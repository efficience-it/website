"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

const subjects = [
  "Demande de devis",
  "Proposer un projet",
  "Candidature",
  "Venir prendre le café",
  "Autre",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const email = "contact@itefficience.com";
    const subject = data.get("subject") as string;
    const body = `Nom: ${data.get("name")}\nEntreprise: ${data.get("company")}\nTéléphone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;

    trackEvent("form_submit", {
      form_name: "contact",
      source_page: window.location.pathname,
      subject,
    });

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">
          Merci pour votre message !
        </p>
        <p className="mt-2 text-green-600">
          Votre client mail va s&apos;ouvrir pour envoyer votre demande.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark">
            Nom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light-gray dark:text-dark"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-dark"
          >
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light-gray dark:text-dark"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-dark"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light-gray dark:text-dark"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light-gray dark:text-dark"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-dark"
        >
          Objet de votre demande *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light-gray dark:text-dark"
        >
          <option
            style={{
              backgroundColor: "var(--color-light-gray)",
              color: "var(--color-dark)",
            }}
            value=""
          >
            Sélectionnez
          </option>
          {subjects.map((s) => (
            <option
              key={s}
              style={{
                backgroundColor: "var(--color-light-gray)",
                color: "var(--color-dark)",
              }}
              value={s}
            >
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-dark"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light-gray dark:text-dark"
        />
      </div>
      <Button type="submit">Envoyer ma demande</Button>
    </form>
  );
}
