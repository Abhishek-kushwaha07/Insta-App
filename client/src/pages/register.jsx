
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Register data:", data);

    // Example:
    // await fetch("/api/auth/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-7">
          <div className="h-12 w-12 rounded-2xl bg-white text-zinc-950 flex items-center justify-center font-bold text-xl">
            A
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-semibold tracking-tight">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Get started by creating your account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-600 focus:bg-white/[0.07] ${
                  errors.name
                    ? "border-red-500/60"
                    : "border-white/10 focus:border-white/30"
                }`}
              />

              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-600 focus:bg-white/[0.07] ${
                  errors.email
                    ? "border-red-500/60"
                    : "border-white/10 focus:border-white/30"
                }`}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 pr-16 text-sm outline-none transition placeholder:text-zinc-600 focus:bg-white/[0.07] ${
                    errors.password
                      ? "border-red-500/60"
                      : "border-white/10 focus:border-white/30"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Confirm password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 pr-16 text-sm outline-none transition placeholder:text-zinc-600 focus:bg-white/[0.07] ${
                    errors.confirmPassword
                      ? "border-red-500/60"
                      : "border-white/10 focus:border-white/30"
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-zinc-400">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must accept the terms",
                })}
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-white"
              />

              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="text-white hover:underline"
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-white hover:underline"
                >
                  Privacy Policy
                </button>
              </span>
            </label>

            {errors.terms && (
              <p className="-mt-3 text-xs text-red-400">
                {errors.terms.message}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-zinc-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium transition hover:bg-white/10"
          >
            <span className="text-base font-bold">G</span>
            Continue with Google
          </button>
        </div>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <button className="font-medium text-white hover:underline">
            Sign in
          </button>
        </p>
      </div>
    </main>
  );
}

