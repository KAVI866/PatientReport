import { motion } from "framer-motion";

export default function PatientModal({ patient, onClose }) {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-sky-600 dark:text-teal-400 mb-4">
          {patient.firstName} {patient.lastName}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <p><span className="font-semibold">Age:</span> {patient.age}</p>
          <p><span className="font-semibold">Gender:</span> {patient.gender}</p>
          <p><span className="font-semibold">Email:</span> {patient.email}</p>
          <p><span className="font-semibold">Phone:</span> {patient.phone}</p>
          <p className="sm:col-span-2"><span className="font-semibold">Address:</span> {patient.address.address}, {patient.address.city}</p>
        </div>
      </motion.div>
    </div>
  );
}
