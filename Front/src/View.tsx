import './scss/_View.scss';
import { useState } from 'react';
import { usStates } from "./Donnee/UsState.tsx";
import {GestionUser, GestionAdress, GestionToken, GestionConnexion} from './redux/DonneeSalarie.tsx';

export default function View() {
    
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [dateOfBirth, setDateOfBirth] = useState('');
        const [startDate, setStartDate] = useState('');
        const [street, setStreet] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [zipCode, setZipCode] = useState('');
        const [department, setDepartment] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        async function EmployeeData() {
            const  FormDonneeEmployee = {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                startDate: startDate,
                street: street,
                city: city,
                state: state,
                zipCode: zipCode,
                department: department
            };

            if (firstName === '' || lastName === '' || dateOfBirth === '' || startDate === '' || street === '' || city === '' || state === '' || zipCode === '' || department === '') {
                console.error('Tous les champs sont requis.');
                return;
            }

            console.log('Données récoltées :', FormDonneeEmployee);
            
            try {
                const stored = localStorage.getItem("DonneeUser");
                let employees = stored ? JSON.parse(stored) : [];
                employees.push(FormDonneeEmployee);
                localStorage.setItem("DonneeUser", JSON.stringify(employees));
                console.log('Données sauvegardées dans le localStorage.');
            } catch (error) {
                console.error('Erreur lors de la sauvegarde des données dans le localStorage :', error);
            }

        }


        EmployeeData();
    };
    return (
        <>
            <div className="view">
                <div className="view__form-container">
                    <h2 className="view__title">Create Employee</h2>

                    <form onSubmit={handleSubmit} action="#" id="create-employee" className="view__form">
                        <label htmlFor="first-name" className="view__label">First Name</label>
                        <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="view__input" />

                        <label htmlFor="last-name" className="view__label">Last Name</label>
                        <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="view__input"/>

                        <label htmlFor="date-of-birth" className="view__label">Date of Birth</label>
                        <input type="date" id="date-of-birth" name="date-of-birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="view__input"/>

                        <label htmlFor="start-date" className="view__label">Start Date</label>
                        <input type="date" id="start-date" name="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="view__input"/>

                        <fieldset className="view__address">
                            <legend className="view__address-title">Address</legend>

                            <label htmlFor="street" className="view__label">Street</label>
                            <input type="text" id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)} className="view__input"/>

                            <label htmlFor="city" className="view__label">City</label>
                            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} className="view__input"/>

                            <label htmlFor="state" className="view__label">State</label>
                            <select name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} className="view__select">
                            {usStates.map((state) => (
                                <option key={state.abbreviation} value={state.abbreviation}>
                                    {state.name}
                                </option>
                                ))}
                            </select>

                            <label htmlFor="zip-code" className="view__label">Zip Code</label>
                            <input type="number" id="zip-code" name="zip-code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="view__input"/>
                        </fieldset>

                        <label htmlFor="department" className="view__label">Department</label>
                        <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} className="view__select">
                            <option value="">Select a department</option>
                            <option value="sales">Sales</option>
                            <option value="marketing">Marketing</option>
                            <option value="engineering">Engineering</option>
                            <option value="human-resources">Human Resources</option>
                            <option value="legal">Legal</option>
                        </select>

                        <button type="submit" id="SaveForm" className="view__save-button">Save</button>
                    </form>
                </div>

                <div id="confirmation" className="view__modal"></div>
            </div>
        </>
    );
}