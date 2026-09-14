import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthField, AuthLayout } from "./login";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmation: "", terms: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value });
  const submit = (event) => {
    event.preventDefault();
    if (form.password !== form.confirmation) return setError("The passwords don’t match yet.");
    if (!form.terms) return setError("Please accept the terms to continue.");
    setError("");
    navigate("/login", { state: { created: true } });
  };

  return <AuthLayout eyebrow="Join Luma" quote="Find beauty in your everyday.">
    <div className="mb-7"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b18369]">Join Luma</p><h1 className="mt-3 font-serif text-5xl tracking-tight text-stone-800">Make it yours.</h1><p className="mt-3 text-sm leading-6 text-stone-500">A few details and you’re ready to share your world.</p></div>
    <form onSubmit={submit} className="grid gap-4">
      <AuthField label="Your name"><input required name="name" value={form.name} onChange={update} placeholder="e.g. Maya Patel" minLength="2" /></AuthField>
      <AuthField label="Email address"><input required name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" /></AuthField>
      <AuthField label="Create password"><div className="relative"><input required name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={update} placeholder="At least 8 characters" minLength="8" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400">{showPassword ? "Hide" : "Show"}</button></div></AuthField>
      <AuthField label="Confirm password"><input required name="confirmation" type={showPassword ? "text" : "password"} value={form.confirmation} onChange={update} placeholder="One more time" minLength="8" /></AuthField>
      <label className="mt-1 flex items-start gap-2 text-xs leading-5 text-stone-500"><input required name="terms" checked={form.terms} onChange={update} type="checkbox" className="mt-0.5 h-4 w-4 rounded border-stone-300 accent-stone-800" /><span>I agree to the <button type="button" className="font-bold text-[#9c6c52]">Terms of Service</button> and <button type="button" className="font-bold text-[#9c6c52]">Privacy Policy</button>.</span></label>
      {error && <p className="rounded-lg bg-[#fdf0ed] px-3 py-2 text-xs text-[#ad5549]">{error}</p>}
      <button className="mt-1 rounded-xl bg-stone-800 py-3.5 text-sm font-bold text-white shadow-lg shadow-stone-300/70 transition hover:-translate-y-0.5 hover:bg-stone-700">Create account <span className="ml-2 text-lg">→</span></button>
    </form>
    <p className="mt-7 text-center text-sm text-stone-500">Already on Luma? <Link to="/login" className="font-bold text-[#9c6c52] hover:underline">Sign in</Link></p>
  </AuthLayout>;
}
