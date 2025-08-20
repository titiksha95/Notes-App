export default function Navbar({ onLogout }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold">AI Notes</h1>
      <div className="flex gap-4 items-center">
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
