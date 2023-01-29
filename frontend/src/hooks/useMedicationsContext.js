import { MedicationsContext } from '../context/MedicationContext'
import { useContext } from 'react'

export const useMedicationsContext = () => {
    const context = useContext(MedicationsContext)

    if (!context) {
        throw Error('useMedicationsCotnext must be used inside an MedicationsContextProvider')
    }

    return context
}