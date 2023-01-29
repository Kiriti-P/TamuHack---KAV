import { useState } from 'react'
import { useMedicationsContext } from "../hooks/useMedicationsContext" 

const MedicationForm = () => {
  const { dispatch } = useMedicationsContext()

  const [title, setTitle] = useState('')
  const [dosage, setDosage] = useState('')
  const [times_taken, settimes_taken] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const medication = {title, dosage, times_taken}
    
    const response = await fetch('/api/medications', {
      method: 'POST',
      body: JSON.stringify(medication),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDosage('')
      settimes_taken('')
      setEmptyFields([])
      console.log('new medication added:', json)
      dispatch({type: 'CREATE_MEDICATION', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Medication</h3>

      <label>Medication Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Dosage (in g):</label>
      <input 
        type="number" 
        onChange={(e) => setDosage(e.target.value)} 
        value={dosage}
        className={emptyFields.includes('dosage') ? 'error' : ''}
      />

      <label>Times Taken Per Day:</label>
      <input 
        type="number" 
        onChange={(e) => settimes_taken(e.target.value)} 
        value={times_taken} 
        className={emptyFields.includes('times') ? 'error' : ''}
      />

      <button>Add Medication</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default MedicationForm