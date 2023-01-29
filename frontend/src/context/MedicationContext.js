import { createContext, useReducer } from 'react'

export const MedicationsContext = createContext()

export const medicationsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MEDICATIONS':
            return {
                medications: action.payload
            }
        case 'CREATE_MEDICATION':
            return {
                medications: [action.payload, ...state.medications]
            }
        default:
            return state
    }
}

export const MedicationsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(medicationsReducer, {
        medications: null
    })

    

    return (
        <MedicationsContext.Provider value={{...state, dispatch}}>
            { children }
        </MedicationsContext.Provider>
    )
}