"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

const problems = [
  "Performance",
  "Dette technique / legacy",
  "Architecture à revoir",
  "Montée de version bloquée",
  "Autre",
];

const symfonyVersions = [
  "Symfony 3.x ou antérieur",
  "Symfony 4.x",
  "Symfony 5.x",
  "Symfony 6.x",
  "Symfony 7.x",
  "Je ne sais pas",
];

const teamSizes = [
  "1-2 développeurs",
  "3-5 développeurs",
  "6-10 développeurs",
  "Plus de 10 développeurs",
];

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = "contact@itefficience.com";
    const subject = "Demande d'audit Symfony gratuit";
    const body = [
      `Prénom : ${data.get("name")}`,
      `Email : ${data.get("email")}`,
      `Version Symfony : ${data.get("symfonyVersion")}`,
      `Taille de l'équipe : ${data.get("teamSize")}`,
      `Problème principal : ${data.get("problem")}`,
      "",
      `Message :`,
      `${data.get("message") || ""}`,
    ].join("\n");

    trackEvent("form_submit", {
      form_type: "audit",
      symfony_version: data.get("symfonyVersion") as string,
      team_size: data.get("teamSize") as string,
      problem: data.get("problem") as string,
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
          Merci pour votre demande !
        </p>
        <p className="mt-2 text-green-600">
          Votre client mail va s&apos;ouvrir pour envoyer votre demande
          d&apos;audit. Nous reviendrons vers vous sous 48h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-dark"
          >
            Prénom *
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
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="symfonyVersion"
            className="block text-sm font-medium text-dark"
          >
            Version Symfony actuelle *
          </label>
          <select
            id="symfonyVersion"
            name="symfonyVersion"
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
            {symfonyVersions.map((v) => (
              <option
                key={v}
                style={{
                  backgroundColor: "var(--color-light-gray)",
                  color: "var(--color-dark)",
                }}
                value={v}
              >
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="teamSize"
            className="block text-sm font-medium text-dark"
          >
            Taille de l&apos;équipe dev *
          </label>
          <select
            id="teamSize"
            name="teamSize"
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
            {teamSizes.map((s) => (
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
      </div>
      <div>
        <label
          htmlFor="problem"
          className="block text-sm font-medium text-dark"
        >
          Principal problème rencontré *
        </label>
        <select
          id="problem"
          name="problem"
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
          {problems.map((p) => (
            <option
              key={p}
              style={{
                backgroundColor: "var(--color-light-gray)",
                color: "var(--color-dark)",
              }}
              value={p}
            >
              {p}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-dark"
        >
          Contexte supplémentaire (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez brièvement votre projet, les difficultés rencontrées ou toute information utile pour préparer l'audit."
          className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-light-gray dark:text-dark"
        />
      </div>
      <Button type="submit">Demander mon audit gratuit</Button>
    </form>
  );
}
