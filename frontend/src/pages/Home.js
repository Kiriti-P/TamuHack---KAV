import { useEffect, useState } from "react"

// components
import MedicationDetails from "../components/MedicationDetails"
import MedicationForm from "../components/MedicationForm"

const Home = () => {
  const [medications, setMedications] = useState(null)

  useEffect(() => {
    const fetchMedications = async () => {
      const response = await fetch('/api/medications')
      const json = await response.json()

      if (response.ok) {
        setMedications(json)
      }
    }

    fetchMedications()
  }, [])

  return (
    <div className="home">
      <div className="medications">
        {medications && medications.map(medication => (
          <MedicationDetails medication={medication} key={medication._id} />
        ))}
      </div>
      <MedicationForm/>
    </div>
  )
}

export default Home