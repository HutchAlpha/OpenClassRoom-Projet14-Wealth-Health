import { createSlice } from "@reduxjs/toolkit";

const savedDonneForm = localStorage.getItem("DonneeUser");

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
        token: savedDonneForm || null,
        isLoggedIn: false
    },

    reducers: { 
        //! Données de l'utilisateur
        GestionUser(state, action) {
            state.user = action.payload
        },

        GestionAdress(state, action) {
            state.adress = action.payload
        },
        //! Token JWT
        GestionToken(state, action) {
            state.token = action.payload

            if (action.payload) {
                localStorage.setItem("token", action.payload)
            } else {
                localStorage.removeItem("token")
            }
        },

        //! État de connexion
        GestionConnexion(state, action) {
            state.isLoggedIn = action.payload
        }
    }
})


export const { GestionUser, GestionAdress, GestionToken, GestionConnexion } = DonneeSalarie.actions


export default DonneeSalarie.reducer
