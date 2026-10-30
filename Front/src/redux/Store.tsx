import { configureStore } from "@reduxjs/toolkit";
import DonneeSalarie from "./DonneeSalarie.tsx";

const store = configureStore({
  reducer: {
    bank: DonneeSalarie
  }
});

export default store;