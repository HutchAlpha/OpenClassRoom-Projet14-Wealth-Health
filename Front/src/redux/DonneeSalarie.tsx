import { createSlice } from "@reduxjs/toolkit";


const DonneeSalarie = createSlice({
    name: "DonneeUser",
    initialState: {
        user: {
            firstName: null,
            lastName: null,
            dateOfBirth : null,
            startDate : null
        },
        adress: {
            street : null,
            city : null,
            state : null,
            zipCode : null,
            department : null,
        },
    },

    reducers: { 
        //! Données de l'utilisateur
        GestionUser(state, action) {
            state.user = action.payload
        },

        GestionAdress(state, action) {
            state.adress = action.payload
        },
    }
})


export const { GestionUser, GestionAdress} = DonneeSalarie.actions


export default DonneeSalarie.reducer
