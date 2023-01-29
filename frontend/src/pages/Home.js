import { useEffect } from "react";
import { useMedicationsContext } from "../hooks/useMedicationsContext" 

// components
import MedicationDetails from "../components/MedicationDetails";
import MedicationForm from "../components/MedicationForm";

const Home = () => {
  const {medications, dispatch} = useMedicationsContext()

  useEffect(() => {
    const fetchMedications = async () => {
      const response = await fetch("/api/medications");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_MEDICATIONS', payload: json})
      }
    };

    fetchMedications();
  }, []);

  return (
    <div className="home">
      <div className="medications">
        {medications &&
          medications.map((medication) => (
            <MedicationDetails medication={medication} key={medication._id} />
          ))}
      </div>
      <MedicationForm />
    </div>
  );
};

export default Home;
