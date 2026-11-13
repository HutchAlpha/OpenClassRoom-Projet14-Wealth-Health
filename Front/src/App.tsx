import { Routes, Route } from "react-router";

import Header from "./Header.tsx";
import View from "./View.tsx";
import DetailSalarie from "./DetailSalarie.tsx";

import "./scss/App.scss";

export default function App() {
    return (
        <>
        <Header />

        <Routes>
            <Route path="/" element={<View />} />
            <Route path="/salarie" element={<DetailSalarie />} />
        </Routes>
        </>
    );
}