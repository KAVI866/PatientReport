import { useEffect, useState } from "react";

export default function ColorModeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg bg-sky-500 text-white dark:bg-teal-500 hover:opacity-90 transition"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
