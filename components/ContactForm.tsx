"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\n${message}`
    );
    const mailto = `mailto:asso.agirpourreussir@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-agpr-forest">
            Nom complet <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-agpr-green/30 bg-white px-4 py-3 text-agpr-forest transition-colors focus:border-agpr-green"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-agpr-forest">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-agpr-green/30 bg-white px-4 py-3 text-agpr-forest transition-colors focus:border-agpr-green"
            placeholder="votre@email.fr"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-agpr-forest">
          Objet <span aria-hidden="true">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="mt-1.5 w-full rounded-xl border border-agpr-green/30 bg-white px-4 py-3 text-agpr-forest transition-colors focus:border-agpr-green"
          defaultValue=""
        >
          <option value="" disabled>
            Choisissez un objet
          </option>
          <option value="Demande d'information">Demande d&apos;information</option>
          <option value="Devenir bénévole">Devenir bénévole</option>
          <option value="Adhésion">Adhésion</option>
          <option value="Partenariat">Partenariat</option>
          <option value="Don">Don</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-agpr-forest">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-xl border border-agpr-green/30 bg-white px-4 py-3 text-agpr-forest transition-colors focus:border-agpr-green"
          placeholder="Votre message..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-agpr-green px-8 py-3.5 font-semibold text-white shadow-lg shadow-agpr-green/25 transition-all hover:bg-agpr-green-dark sm:w-auto"
      >
        Envoyer le message
      </button>

      {submitted && (
        <p className="text-sm text-agpr-green-dark" role="status">
          Votre client mail va s&apos;ouvrir. Si ce n&apos;est pas le cas, écrivez-nous
          directement à{" "}
          <a
            href="mailto:asso.agirpourreussir@gmail.com"
            className="font-semibold underline"
          >
            asso.agirpourreussir@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
