"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    methodOfContact: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  const formLabelStyle = "block text-brand font-bold";
  const formTextInputStyle =
    "w-full border border-brand-accent text-ink/80 rounded p-2";
  const formSubmitButtonStyle =
    "inline-block rounded-full px-5 py-2.5 font-medium transition-colors bg-brand text-white hover:bg-brand-dark cursor-pointer";

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
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
        <button type="submit" className={formSubmitButtonStyle}>
          Submit
        </button>
      </form>
    </>
  );
}
