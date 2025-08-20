export default function Landing({ onLogin }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-center px-6">
      <h1 className="text-5xl font-extrabold mb-4 text-sky-700 dark:text-sky-400">
        Notes App
      </h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-xl">
        Take smarter notes. Stay organized and productive 🗓️
      </p>
      <button
        onClick={onLogin}
        className="px-8 py-3 rounded-2xl bg-sky-600 text-white text-lg shadow-md hover:shadow-lg hover:bg-sky-700 transition-all"
      >
        Get Started
      </button>
    </div>
  );
}
