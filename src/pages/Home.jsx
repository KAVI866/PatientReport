export default function Home() {
  return (
    <div className="space-y-10">
      <div className="bg-gradient-to-r from-sky-500 to-teal-500 text-white rounded-2xl p-10 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to Jarurat Care 🏥</h1>
        <p className="mt-3 text-lg max-w-2xl">
          Your trusted healthcare partner. Manage patients, track records, and provide care with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-sky-600 dark:text-teal-400">Fast Access</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Quickly access patient records and details anytime.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-sky-600 dark:text-teal-400">Secure</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Data security is our top priority for all users.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-sky-600 dark:text-teal-400">User-Friendly</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Designed with simplicity for doctors & staff.</p>
        </div>
      </div>
    </div>
  );
}
