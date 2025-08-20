import { useState } from "react";

export default function Signup({ onSignup, switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) onSignup();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Sign Up
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg w-full mb-4 dark:bg-gray-700 dark:border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg w-full mb-6 dark:bg-gray-700 dark:border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Sign Up
        </button>
        <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <button
            type="button"
            className="text-purple-500 font-semibold"
            onClick={switchToLogin}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
