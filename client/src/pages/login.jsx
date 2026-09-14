import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [notice, setNotice] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setNotice("Welcome back — this is a UI-only preview.");
    window.setTimeout(() => navigate("/feed"), 500);
  };

  return <AuthLayout eyebrow="Welcome back" quote="Share the little things that make life feel big.">
    <div className="mb-8"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b18369]">Welcome back</p><h1 className="mt-3 font-serif text-5xl tracking-tight text-stone-800">Your people<br />are waiting.</h1><p className="mt-3 text-sm leading-6 text-stone-500">Sign in to see what’s new in your circle.</p></div>
    <form onSubmit={submit} className="grid gap-5">
      <AuthField label="Email address"><input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></AuthField>
      <AuthField label="Password" action="Forgot password?"><div className="relative"><input required type={showPassword ? "text" : "password"} value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Enter your password" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400">{showPassword ? "Hide" : "Show"}</button></div></AuthField>
      <label className="flex items-center gap-2 text-xs text-stone-500"><input type="checkbox" className="h-4 w-4 rounded border-stone-300 accent-stone-800" /> Keep me signed in</label>
      <button className="rounded-xl bg-stone-800 py-3.5 text-sm font-bold text-white shadow-lg shadow-stone-300/70 transition hover:-translate-y-0.5 hover:bg-stone-700">Sign in <span className="ml-2 text-lg">→</span></button>
      {(notice || location.state?.created) && <p className="rounded-lg bg-[#eaf4ed] px-3 py-2 text-center text-xs text-[#4c7657]">{notice || "Your account preview is ready. You can sign in now."}</p>}
    </form>
    <p className="mt-7 text-center text-sm text-stone-500">New to Luma? <Link to="/register" className="font-bold text-[#9c6c52] hover:underline">Create an account</Link></p>
  </AuthLayout>;
}

export function AuthField({ label, action, children }) { return <label className="grid gap-2"><span className="flex justify-between text-xs font-bold text-stone-600">{label}{action && <button type="button" className="text-[#a5755c]">{action}</button>}</span><span className="auth-input">{children}</span></label>; }
export function AuthLayout({ eyebrow, quote, children }) { return <main className="auth-layout"><section className="auth-showcase"><Link to="/feed" className="auth-logo auth-logo--showcase"><i>L</i>Luma</Link><div className="auth-showcase-copy"><p>{eyebrow}</p><h2>{quote}</h2><span>A quieter, kinder place for the people and moments you love.</span></div><div className="auth-orb auth-orb-one"/><div className="auth-orb auth-orb-two"/></section><section className="auth-content"><Link to="/feed" className="auth-logo auth-logo--mobile"><i>L</i>Luma</Link><div className="auth-form-wrap">{children}</div></section></main>; }
