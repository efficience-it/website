"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

type Axis = {
  id: string;
  title: string;
  advice: string;
  href: string;
  hrefLabel: string;
};

type Question = {
  id: string;
  axisId: string;
  text: string;
  options: { label: string; value: number }[];
};

const AXES: Axis[] = [
  {
    id: "socle",
    title: "Socle technique et durcissement",
    advice:
      "Mettez à jour PHP et Symfony vers des versions supportées, désactivez le debug en production et ajoutez les headers de sécurité.",
    href: "/securite-application-symfony",
    hrefLabel: "Sécurité applicative Symfony",
  },
  {
    id: "auth",
    title: "Authentification et contrôle d'accès",
    advice:
      "Généralisez le MFA sur les comptes à privilèges et appliquez le principe de moindre privilège à chaque rôle.",
    href: "/article/conformite-nis2-application-symfony",
    hrefLabel: "Préparer son application à NIS2",
  },
  {
    id: "secrets",
    title: "Secrets et données sensibles",
    advice:
      "Sortez les secrets du code, chiffrez les données sensibles et anonymisez vos environnements de test.",
    href: "/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees",
    hrefLabel: "Anonymiser ses bases de données",
  },
  {
    id: "logs",
    title: "Journalisation et détection",
    advice:
      "Structurez la journalisation des événements de sécurité et centralisez-la pour pouvoir qualifier un incident rapidement.",
    href: "/article/conformite-nis2-application-symfony",
    hrefLabel: "La notification d'incident NIS2",
  },
  {
    id: "chaine",
    title: "Dépendances et continuité",
    advice:
      "Automatisez le scan des dépendances dans la CI et documentez un plan de réponse à incident testé.",
    href: "/article/cve-comprendre-les-failles-pour-mieux-se-proteger",
    hrefLabel: "Comprendre et gérer les CVE",
  },
];

const QUESTIONS: Question[] = [
  {
    id: "php",
    axisId: "socle",
    text: "Quelle version de PHP fait tourner votre application en production ?",
    options: [
      { label: "PHP 8.3 ou plus récent", value: 1 },
      { label: "PHP 8.1 ou 8.2", value: 0.6 },
      { label: "PHP 8.0 ou antérieur", value: 0 },
      { label: "Je ne sais pas", value: 0 },
    ],
  },
  {
    id: "symfony",
    axisId: "socle",
    text: "Quelle version de Symfony utilisez-vous ?",
    options: [
      { label: "Symfony 7.x", value: 1 },
      { label: "Symfony 6.4 LTS", value: 0.8 },
      { label: "Symfony 5.x ou antérieur", value: 0 },
      { label: "Je ne sais pas", value: 0 },
    ],
  },
  {
    id: "headers",
    axisId: "socle",
    text: "Les headers de sécurité (CSP, HSTS, X-Content-Type-Options) sont-ils configurés ?",
    options: [
      { label: "Oui, configurés et vérifiés", value: 1 },
      { label: "Partiellement", value: 0.5 },
      { label: "Non ou je ne sais pas", value: 0 },
    ],
  },
  {
    id: "debug",
    axisId: "socle",
    text: "Le mode debug est-il désactivé en production avec une gestion propre des erreurs ?",
    options: [
      { label: "Oui, strictement", value: 1 },
      { label: "Partiellement", value: 0.5 },
      { label: "Non ou je ne sais pas", value: 0 },
    ],
  },
  {
    id: "mfa-admin",
    axisId: "auth",
    text: "Le MFA est-il activé pour les comptes d'administration ?",
    options: [
      { label: "Oui, pour tous les comptes à privilèges", value: 1 },
      { label: "Pour certains comptes seulement", value: 0.5 },
      { label: "Non", value: 0 },
    ],
  },
  {
    id: "auth-forte",
    axisId: "auth",
    text: "Proposez-vous une authentification forte (2FA, passkeys WebAuthn) aux utilisateurs sensibles ?",
    options: [
      { label: "Oui, en place", value: 1 },
      { label: "En projet", value: 0.5 },
      { label: "Non", value: 0 },
    ],
  },
  {
    id: "moindre-privilege",
    axisId: "auth",
    text: "Le contrôle d'accès suit-il le principe de moindre privilège (rôles, voters) ?",
    options: [
      { label: "Oui, formalisé et testé", value: 1 },
      { label: "Informel", value: 0.5 },
      { label: "Non ou je ne sais pas", value: 0 },
    ],
  },
  {
    id: "secrets",
    axisId: "secrets",
    text: "Comment gérez-vous les secrets (clés API, mots de passe) ?",
    options: [
      { label: "Coffre dédié ou Symfony Secrets", value: 1 },
      { label: "Variables d'environnement", value: 0.6 },
      { label: "En dur dans le code ou versionnés dans Git", value: 0 },
    ],
  },
  {
    id: "chiffrement",
    axisId: "secrets",
    text: "Les données personnelles sensibles sont-elles chiffrées au repos ?",
    options: [
      { label: "Oui", value: 1 },
      { label: "Partiellement", value: 0.5 },
      { label: "Non ou je ne sais pas", value: 0 },
    ],
  },
  {
    id: "anonymisation",
    axisId: "secrets",
    text: "Vos environnements de test utilisent-ils des données anonymisées ?",
    options: [
      { label: "Oui, systématiquement", value: 1 },
      { label: "Parfois", value: 0.5 },
      { label: "Non, données de production en clair", value: 0 },
    ],
  },
  {
    id: "logs",
    axisId: "logs",
    text: "Les événements de sécurité sont-ils journalisés de façon structurée ?",
    options: [
      { label: "Oui, centralisés et exploitables", value: 1 },
      { label: "Journaux locaux non centralisés", value: 0.5 },
      { label: "Non ou je ne sais pas", value: 0 },
    ],
  },
  {
    id: "detection",
    axisId: "logs",
    text: "Pouvez-vous détecter et qualifier un incident dans les délais NIS2 (24 à 72 h) ?",
    options: [
      { label: "Oui, outillé avec alertes", value: 1 },
      { label: "Détection manuelle et lente", value: 0.5 },
      { label: "Non", value: 0 },
    ],
  },
  {
    id: "scan-deps",
    axisId: "chaine",
    text: "Les dépendances sont-elles scannées automatiquement (composer audit) ?",
    options: [
      { label: "Oui, à chaque build en CI", value: 1 },
      { label: "Ponctuellement", value: 0.5 },
      { label: "Jamais", value: 0 },
    ],
  },
  {
    id: "cicd",
    axisId: "chaine",
    text: "Disposez-vous d'un pipeline CI/CD avec tests et contrôles qualité ?",
    options: [
      { label: "Oui, complet (tests, analyse statique)", value: 1 },
      { label: "Partiel", value: 0.5 },
      { label: "Aucun", value: 0 },
    ],
  },
  {
    id: "plan-incident",
    axisId: "chaine",
    text: "Avez-vous un plan de réponse à incident documenté ?",
    options: [
      { label: "Oui, documenté et testé", value: 1 },
      { label: "Documenté mais jamais testé", value: 0.5 },
      { label: "Aucun", value: 0 },
    ],
  },
];

const CONTACT_EMAIL = "contact@itefficience.com";

function levelOf(pct: number): "vert" | "orange" | "rouge" {
  if (pct >= 70) return "vert";
  if (pct >= 40) return "orange";
  return "rouge";
}

const LEVEL_LABEL: Record<string, string> = {
  vert: "Bonne maturité",
  orange: "À renforcer",
  rouge: "Point de vigilance",
};

const BAR_COLOR: Record<string, string> = {
  vert: "bg-green-500",
  orange: "bg-amber-500",
  rouge: "bg-red-500",
};

const TEXT_COLOR: Record<string, string> = {
  vert: "text-green-700",
  orange: "text-amber-700",
  rouge: "text-red-700",
};

export default function Nis2Assessment() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [leadSent, setLeadSent] = useState(false);

  const result = useMemo(() => {
    const perAxis = AXES.map((axis) => {
      const axisQuestions = QUESTIONS.filter((q) => q.axisId === axis.id);
      const answered = axisQuestions.filter((q) => answers[q.id] !== undefined);
      const sum = axisQuestions.reduce(
        (acc, q) => acc + (answers[q.id] ?? 0),
        0,
      );
      const pct =
        axisQuestions.length > 0
          ? Math.round((sum / axisQuestions.length) * 100)
          : 0;
      return { axis, pct, level: levelOf(pct), answered: answered.length };
    });
    const globalSum = QUESTIONS.reduce(
      (acc, q) => acc + (answers[q.id] ?? 0),
      0,
    );
    const global = Math.round((globalSum / QUESTIONS.length) * 100);
    return { perAxis, global, level: levelOf(global) };
  }, [answers]);

  const answer = (value: number) => {
    const q = QUESTIONS[current];
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      const score = Math.round(
        (Object.values(next).reduce((a, b) => a + b, 0) / QUESTIONS.length) *
          100,
      );
      trackEvent("nis2_assessment_completed", {
        event_label: String(score),
        source_page:
          typeof window !== "undefined" ? window.location.pathname : "",
      });
    }
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
    setStarted(true);
    setLeadSent(false);
  };

  const downloadPdf = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const marginX = 48;
    let y = 64;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Évaluation NIS2 Symfony", marginX, y);
    y += 26;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(110);
    doc.text("Auto-évaluation technique - Efficience IT", marginX, y);
    y += 34;
    doc.setTextColor(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(
      `Score global de maturité : ${result.global}/100 (${LEVEL_LABEL[result.level]})`,
      marginX,
      y,
    );
    y += 30;
    doc.setFontSize(13);
    doc.text("Détail par axe", marginX, y);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    result.perAxis.forEach((row) => {
      y += 22;
      doc.text(
        `${row.axis.title} : ${row.pct}/100 (${LEVEL_LABEL[row.level]})`,
        marginX,
        y,
      );
    });
    y += 40;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Recommandations prioritaires", marginX, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const priorities = result.perAxis.filter((r) => r.level !== "vert");
    const list = priorities.length > 0 ? priorities : result.perAxis;
    list.forEach((row) => {
      const lines = doc.splitTextToSize(
        `- ${row.axis.title} : ${row.axis.advice}`,
        500,
      );
      y += 20;
      doc.text(lines, marginX, y);
      y += (lines.length - 1) * 14;
    });
    y += 40;
    doc.setTextColor(110);
    doc.setFontSize(10);
    doc.text(
      "Ce rapport est une auto-évaluation indicative et ne constitue pas un audit officiel.",
      marginX,
      y,
    );
    y += 14;
    doc.text(
      "Une attestation NIS2 relève d'un auditeur PASSI. Contact : contact@itefficience.com",
      marginX,
      y,
    );
    doc.save("evaluation-nis2-symfony.pdf");
    trackEvent("nis2_assessment_pdf", {
      event_label: String(result.global),
      source_page:
        typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  const sendLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const company = data.get("company") || "";
    const subject = "Évaluation NIS2 Symfony - demande d'accompagnement";
    const body = [
      `Email : ${email}`,
      `Entreprise : ${company}`,
      "",
      `Score global : ${result.global}/100 (${LEVEL_LABEL[result.level]})`,
      "",
      "Détail par axe :",
      ...result.perAxis.map(
        (r) => `- ${r.axis.title} : ${r.pct}/100 (${LEVEL_LABEL[r.level]})`,
      ),
    ].join("\n");
    trackEvent("nis2_assessment_lead", {
      event_label: String(result.global),
      source_page:
        typeof window !== "undefined" ? window.location.pathname : "",
    });
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank",
    );
    setLeadSent(true);
  };

  if (!started) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm dark:bg-light-gray">
        <p className="text-lg text-gray">
          15 questions, environ 5 minutes. Tout est calculé dans votre
          navigateur : aucune donnée n&apos;est envoyée tant que vous ne le
          demandez pas.
        </p>
        <div className="mt-6">
          <Button onClick={() => setStarted(true)}>Commencer l&apos;évaluation</Button>
        </div>
      </div>
    );
  }

  if (!finished) {
    const q = QUESTIONS[current];
    const axis = AXES.find((a) => a.id === q.axisId);
    const progress = Math.round((current / QUESTIONS.length) * 100);
    return (
      <div className="rounded-2xl border border-border bg-white p-8 shadow-sm dark:bg-light-gray">
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray">
            <span>{axis?.title}</span>
            <span>
              Question {current + 1} / {QUESTIONS.length}
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-light-gray dark:bg-white/20">
            <div
              className="h-2 rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <h2 className="font-display text-xl font-bold text-dark md:text-2xl">
          {q.text}
        </h2>
        <div className="mt-6 space-y-3">
          {q.options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => answer(opt.value)}
              className="block w-full rounded-lg border border-border bg-white px-5 py-3 text-left text-dark transition hover:border-primary hover:bg-primary/5 dark:bg-white/5"
            >
              {opt.label}
            </button>
          ))}
        </div>
        {current > 0 && (
          <button
            type="button"
            onClick={back}
            className="mt-6 text-sm font-medium text-gray hover:text-primary"
          >
            Question précédente
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-sm dark:bg-light-gray">
      <p className="text-sm font-semibold uppercase tracking-wider text-gray">
        Votre score de maturité NIS2
      </p>
      <div className="mt-2 flex items-baseline gap-3">
        <span className="font-display text-5xl font-bold text-dark">
          {result.global}
        </span>
        <span className="text-xl text-gray">/ 100</span>
        <span className={`text-lg font-semibold ${TEXT_COLOR[result.level]}`}>
          {LEVEL_LABEL[result.level]}
        </span>
      </div>

      <div className="mt-8 space-y-5">
        {result.perAxis.map((row) => (
          <div key={row.axis.id}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-dark">{row.axis.title}</span>
              <span className={`font-semibold ${TEXT_COLOR[row.level]}`}>
                {row.pct}/100
              </span>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-light-gray dark:bg-white/20">
              <div
                className={`h-2 rounded-full ${BAR_COLOR[row.level]}`}
                style={{ width: `${row.pct}%` }}
              />
            </div>
            {row.level !== "vert" && (
              <p className="mt-2 text-sm text-gray">
                {row.axis.advice}{" "}
                <Link
                  href={row.axis.href}
                  className="text-primary hover:underline"
                >
                  {row.axis.hrefLabel}
                </Link>
                .
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={downloadPdf}>Télécharger le rapport PDF</Button>
        <button
          type="button"
          onClick={restart}
          className="rounded-lg border border-border px-6 py-3 font-semibold text-dark transition hover:border-primary"
        >
          Recommencer
        </button>
      </div>

      <div className="mt-8 rounded-xl bg-light-gray p-6 dark:bg-white/5">
        <p className="text-sm text-gray">
          Cette évaluation est indicative et ne remplace pas un audit officiel.
          Une attestation NIS2 relève d&apos;un auditeur PASSI. Pour un état des
          lieux approfondi, appuyez-vous sur notre{" "}
          <Link
            href="/securite-application-symfony"
            className="text-primary hover:underline"
          >
            expertise en sécurité applicative Symfony
          </Link>{" "}
          ou notre{" "}
          <Link href="/audit-code-php" className="text-primary hover:underline">
            audit de code PHP
          </Link>
          .
        </p>

        {leadSent ? (
          <p className="mt-4 font-semibold text-green-700">
            Merci ! Votre client mail va s&apos;ouvrir pour finaliser l&apos;envoi.
          </p>
        ) : (
          <form
            onSubmit={sendLead}
            className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email professionnel"
              className="rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="text"
              name="company"
              placeholder="Entreprise (optionnel)"
              className="rounded-md border border-border bg-white px-4 py-2 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit">Être accompagné</Button>
          </form>
        )}
      </div>
    </div>
  );
}
