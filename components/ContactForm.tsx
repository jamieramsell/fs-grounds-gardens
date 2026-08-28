"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";

export default function ContactForm() {
  // Page states
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    methodOfContact: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Update the form state with the inputted values
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Hide status message as soon as a new input is written
    if (status !== "idle") {
      setStatus("idle");
    }
  }

  // On submit, post to web3forms, and await feedback
  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    // Do not send forms completed by bots
    if (form.company.trim() !== "") {
      return;
    }

    // Exclude the company field from the form data
    const { company, ...dataToSend } = form;

    // Send the form via web3forms
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...dataToSend,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          methodOfContact: "",
          company: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // Form styles
  const formLabelStyle = "block text-brand font-bold";
  const formTextInputStyle =
    "w-full border border-brand-accent text-ink/80 rounded p-2";
  const formSubmitButtonStyle =
    "inline-block rounded-full px-5 py-2.5 font-medium transition-colors bg-brand text-white hover:bg-brand-dark cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      {/* Name field */}
      <label htmlFor="name" className={formLabelStyle}>
        Name
      </label>
      <input
        id="name"
        name="name"
        className={formTextInputStyle}
        value={form.name}
        onChange={handleChange}
        required
      />

      {/* Email field */}
      <label htmlFor="email" className={formLabelStyle}>
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={formTextInputStyle}
        value={form.email}
        onChange={handleChange}
        required
      />

      {/* Phone number field */}
      <label htmlFor="phone" className={formLabelStyle}>
        Phone
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        className={formTextInputStyle}
        value={form.phone}
        onChange={handleChange}
      />

      {/* Message content field */}
      <label htmlFor="message" className={formLabelStyle}>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className={formTextInputStyle}
        value={form.message}
        onChange={handleChange}
        required
      />

      {/* Honeypot field */}
      <div
        className="absolute -m-px h-px w-px overflow-hidden border-0 p-0"
        style={{ clip: "rect(0 0 0 0)" }}
        aria-hidden="true"
      >
        <label htmlFor="company" className={formLabelStyle}>
          Company
        </label>
        <input
          id="company"
          name="company"
          className={formTextInputStyle}
          value={form.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Preferred contact method field */}
      <label htmlFor="methodOfContact" className={formLabelStyle}>
        Preferred method of contact
      </label>
      <select
        id="methodOfContact"
        name="methodOfContact"
        className={formTextInputStyle}
        value={form.methodOfContact}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Choose a method of contact...
        </option>
        <option value="email">Email</option>
        <option value="telephone">Telephone</option>
        <option value="text">Text</option>
      </select>

      {form.methodOfContact === "email" && (
        <p className="text-ink/80">
          Please note that email responses may come from a personal email
          address.
        </p>
      )}

      {/* Submit form button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`${formSubmitButtonStyle} disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>

      {/* Status messages */}
      <p className="text-ink/80" role="status">
        {status === "success" &&
          "Thank you, we've received your message, and we'll be in touch soon."}
      </p>

      <p role="alert" className="font-medium text-red-600">
        {status === "error" && (
          <>
            Something went wrong. Please try again, or{" "}
            <a
              href="mailto:enquiries@fsgroundsandgardens.co.uk"
              className="underline"
            >
              email us directly
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
