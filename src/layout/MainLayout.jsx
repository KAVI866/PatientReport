import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-light dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="flex-1 container mx-auto p-6">{children}</main>
    </div>
  );
}
