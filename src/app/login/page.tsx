"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    setSuccessMessage("Logged in successfully. Redirecting...");
    setLoading(false);
    router.push("/");
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSignupError("");
    setSignupSuccess("");
    setSignupLoading(true);

    const { error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
    });

    if (error) {
      setSignupError(error.message);
      setSignupLoading(false);
      return;
    }

    setSignupSuccess("Account created. Check your email to confirm.");
    setSignupLoading(false);
  };

  const handleReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResetError("");
    setResetSuccess("");
    setResetLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail);

    if (error) {
      setResetError(error.message);
      setResetLoading(false);
      return;
    }

    setResetSuccess("Password reset email sent.");
    setResetLoading(false);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-12 px-6 py-12 text-zinc-900">
      <section>
        <h1 className="text-3xl font-semibold">Log in</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Enter your email and password to continue.
        </p>

        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-md border border-zinc-200 px-3 py-2 text-base shadow-sm focus:border-zinc-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium">
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-md border border-zinc-200 px-3 py-2 text-base shadow-sm focus:border-zinc-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {errorMessage ? (
            <p className="text-sm text-red-600">{errorMessage}</p>
          ) : null}
          {successMessage ? (
            <p className="text-sm text-emerald-600">{successMessage}</p>
          ) : null}
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Sign up</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Create an account with your email and password.
        </p>

        <form className="mt-6 flex flex-col gap-5" onSubmit={handleSignup}>
          <label className="flex flex-col gap-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="signup-email"
              autoComplete="email"
              required
              value={signupEmail}
              onChange={(event) => setSignupEmail(event.target.value)}
              className="rounded-md border border-zinc-200 px-3 py-2 text-base shadow-sm focus:border-zinc-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium">
            Password
            <input
              type="password"
              name="signup-password"
              autoComplete="new-password"
              required
              value={signupPassword}
              onChange={(event) => setSignupPassword(event.target.value)}
              className="rounded-md border border-zinc-200 px-3 py-2 text-base shadow-sm focus:border-zinc-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={signupLoading}
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {signupLoading ? "Creating account..." : "Create account"}
          </button>

          {signupError ? (
            <p className="text-sm text-red-600">{signupError}</p>
          ) : null}
          {signupSuccess ? (
            <p className="text-sm text-emerald-600">{signupSuccess}</p>
          ) : null}
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Reset password</h2>
        <p className="mt-2 text-sm text-zinc-500">
          We will email you a reset link.
        </p>

        <form className="mt-6 flex flex-col gap-5" onSubmit={handleReset}>
          <label className="flex flex-col gap-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="reset-email"
              autoComplete="email"
              required
              value={resetEmail}
              onChange={(event) => setResetEmail(event.target.value)}
              className="rounded-md border border-zinc-200 px-3 py-2 text-base shadow-sm focus:border-zinc-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={resetLoading}
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {resetLoading ? "Sending email..." : "Send reset link"}
          </button>

          {resetError ? (
            <p className="text-sm text-red-600">{resetError}</p>
          ) : null}
          {resetSuccess ? (
            <p className="text-sm text-emerald-600">{resetSuccess}</p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
