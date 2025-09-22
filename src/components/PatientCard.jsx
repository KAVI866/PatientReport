export default function PatientCard({ patient, onView }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex flex-col items-start hover:shadow-lg transition">
      <h2 className="text-lg font-bold text-sky-600 dark:text-teal-400">{patient.firstName} {patient.lastName}</h2>
      <p className="text-gray-600 dark:text-gray-300">Age: {patient.age}</p>
      <p className="text-gray-600 dark:text-gray-300">Contact: {patient.phone}</p>
      <button
        onClick={() => onView(patient)}
        className="mt-3 bg-sky-500 dark:bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 dark:hover:bg-teal-600 transition"
      >
        View Details
      </button>
    </div>
  );
}
