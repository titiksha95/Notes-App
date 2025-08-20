import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { NotesProvider } from "./context/NotesContext";

function App() {
  const [page, setPage] = useState("landing"); // landing, login, signup, dashboard

  return (
    <NotesProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        {page === "landing" && <Landing onLogin={() => setPage("login")} />}
        {page === "login" && (
          <Login
            onLogin={() => setPage("dashboard")}
            switchToSignup={() => setPage("signup")}
          />
        )}
        {page === "signup" && (
          <Signup
            onSignup={() => setPage("dashboard")}
            switchToLogin={() => setPage("login")}
          />
        )}
        {page === "dashboard" && <Dashboard onLogout={() => setPage("landing")} />}
      </div>
    </NotesProvider>
  );
}

export default App;
