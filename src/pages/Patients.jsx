import { useEffect, useState } from "react";
import { fetchPatients } from "../api/patients";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (err) {
        setError("Failed to load patients");
      } finally {
        setLoading(false);
      }
    };
    loadPatients();
  }, []);

  const filteredPatients = patients.filter((p) =>
    `${p.firstName} ${p.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-gray-600 dark:text-gray-300">⏳ Loading patients...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-sky-600 dark:text-teal-400">Patients</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 border rounded-lg p-2 mb-6 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} onView={setSelectedPatient} />
        ))}
      </div>

      <PatientModal patient={selectedPatient} onClose={() => setSelectedPatient(null)} />
    </div>
  );
}
