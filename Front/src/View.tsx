import './scss/_View.scss';
import { useState } from 'react';
import { usStates } from "./Donnee/UsState.tsx";


export default function View() {


    const [formDonneeEmployee, setformDonneeEmployee] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Données récoltées :', formDonneeEmployee);


    };    

    return (
        <>
            <div className="view">
                <div className="view__form-container">
                    <h2 className="view__title">Create Employee</h2>

                    <form onSubmit={handleSubmit} action="#" id="create-employee" className="view__form">
                        <label htmlFor="first-name" className="view__label">First Name</label>
                        <input type="text" id="first-name" name="first-name" className="view__input"/>

                        <label htmlFor="last-name" className="view__label">Last Name</label>
                        <input type="text" id="last-name" name="last-name" className="view__input"/>

                        <label htmlFor="date-of-birth" className="view__label">Date of Birth</label>
                        <input type="date" id="date-of-birth" name="date-of-birth" className="view__input"/>

                        <label htmlFor="start-date" className="view__label">Start Date</label>
                        <input type="date" id="start-date" name="start-date" className="view__input"/>

                        <fieldset className="view__address">
                            <legend className="view__address-title">Address</legend>

                            <label htmlFor="street" className="view__label">Street</label>
                            <input type="text" id="street" name="street" className="view__input"/>

                            <label htmlFor="city" className="view__label">City</label>
                            <input type="text" id="city" name="city" className="view__input"/>

                            <label htmlFor="state" className="view__label">State</label>
                            <select name="state" id="state" className="view__select">
                            {usStates.map((state) => (
                                <option key={state.abbreviation} value={state.abbreviation}>
                                    {state.name}
                                </option>
                                ))}
                            </select>

                            <label htmlFor="zip-code" className="view__label">Zip Code</label>
                            <input type="number" id="zip-code" name="zip-code" className="view__input"/>
                        </fieldset>

                        <label htmlFor="department" className="view__label">Department</label>
                        <select name="department" id="department" className="view__select">
                            <option value="">Select a department</option>
                            <option value="sales">Sales</option>
                            <option value="marketing">Marketing</option>
                            <option value="engineering">Engineering</option>
                            <option value="human-resources">Human Resources</option>
                            <option value="legal">Legal</option>
                        </select>

                        <button type="button" id="SaveForm" className="view__save-button">
                            Save
                        </button>
                    </form>
                </div>

                <div id="confirmation" className="view__modal"></div>
            </div>
        </>
    );
}