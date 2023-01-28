import { useEffect, useState } from "react"

// components
import MedicationDetails from '../components/MedicationDetails'

const Home = () => {
    const [medication, dosage] = useState(null)

    useEffect(() => {
        const fetchMedications = async () => {
            const response = await fetch('/api/medications')
            const json = await response.json()

            if (response.ok) {
                dosage(json)
            }
        }

        fetchMedications() 
    }, [])

    return (
        <div className="home">
            <div className="medications">
                {medications && medications.map((medication) => (
                    <MedicationDetails key={medication._id} medication={medication}/>
                ))}
            </div>
        </div>
    )
}

export default Home