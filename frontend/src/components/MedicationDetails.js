import { useMedicationsContext } from "../hooks/useMedicationsContext";

const MedicationDetails = ({ medication }) => {
  const { dispatch } = useMedicationsContext();

  const handleClick = async () => {
    const response = await fetch("/api/medications/" + medication._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_MEDICATION", payload: json });
    }
  };

  return (
    <div className="medication-details">
      <h4>{medication.title}</h4>
      <p>
        <strong>Dosage (g): </strong>
        {medication.dosage}
      </p>
      <p>
        <strong>Times taken: </strong>
        {medication.times_taken}
      </p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default MedicationDetails;
