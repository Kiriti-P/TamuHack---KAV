const MedicationDetails = ({ medication }) => {
    
    return (
        <div className="medication-details">
            <h4>{medication.title}</h4>
            <p><strong>Dosage (g): </strong>{medication.dosage}</p>
            <p><strong>Times taken: </strong>{medication.times_taken}</p>
            <p>{medication.createdAt}</p>
        </div>
    )
}

export default MedicationDetails