import { useEffect, useState } from 'react';
import './scss/_DetailSalarie.scss';
import { useSelector } from 'react-redux';

interface Employee {
    firstName: string;
    lastName: string;
    startDate: string;
    department: string;
    dateOfBirth: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

export default function DetailSalarie() {
   const [employees, setEmployees] = useState<Employee[]>([]);

    const user = useSelector((state: any) => state.bank.user);
    const adress = useSelector((state: any) => state.bank.adress);

    console.log('Données salarié récupérées :', user);
    console.log('Adresse récupérée :', adress);

    try {
        useEffect(() => {
            if (user && adress) {
                const employeeData: Employee = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    startDate: user.startDate,
                    department: user.department,
                    dateOfBirth: user.dateOfBirth,
                    street: adress.street,
                    city: adress.city,
                    state: adress.state,
                    zipCode: adress.zipCode
                };
                setEmployees([employeeData]);
            }
        }, [user, adress]);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }

    return (
        <div className="detail-salarie">
            <h2 className="detail-salarie__title">Current Employees</h2>
            {employees.length === 0 ? (
                <p className="detail-salarie__empty">No employees found</p>
            ) : (
                <table className="detail-salarie__table">
                    <thead>
                        <tr>
                            <th id="First Name">First Name</th>
                            <th id="Last Name">Last Name</th>
                            <th id="Start Date">Start Date</th>
                            <th id="Department">Department</th>
                            <th id="Date of Birth">Date of Birth</th>
                            <th id="Street">Street</th>
                            <th id="City">City</th>
                            <th id="State">State</th>
                            <th id="Zip Code">Zip Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.startDate}</td>
                                <td>{employee.department}</td>
                                <td>{employee.dateOfBirth}</td>
                                <td>{employee.street}</td>
                                <td>{employee.city}</td>
                                <td>{employee.state}</td>
                                <td>{employee.zipCode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

