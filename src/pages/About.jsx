export default function About() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-sky-600 dark:text-teal-400 mb-3">About Jarurat Care</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Jarurat Care is a healthcare management platform built to empower hospitals, clinics, and doctors.
          With our system, you can manage patients efficiently, improve workflows, and ensure secure access to critical information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-teal-500 to-sky-500 text-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="mt-2">To make healthcare management smarter, faster, and more accessible.</p>
        </div>
        <div className="bg-gradient-to-r from-sky-500 to-orange-500 text-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="mt-2">To become the most reliable digital healthcare assistant worldwide.</p>
        </div>
      </div>
    </div>
  );
}
