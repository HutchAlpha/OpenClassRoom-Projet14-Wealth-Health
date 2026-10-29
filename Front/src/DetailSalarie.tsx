import { useEffect, useState } from 'react';
import './scss/_DetailSalarie.scss';

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

    useEffect(() => {
        try {
            const stored = localStorage.getItem('employees');
            const parsed = stored ? (JSON.parse(stored) as Employee[]) : [];
            setEmployees(Array.isArray(parsed) ? parsed : []);
        } catch {
            setEmployees([]);
        }
    }, []);

    return (
        <div className="detail-salarie">
            <h2 className="detail-salarie__title">Current Employees</h2>
            {employees.length === 0 ? (
                <p className="detail-salarie__empty">No employees found.</p>
            ) : (
                <table className="detail-salarie__table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Start Date</th>
                            <th>Department</th>
                            <th>Date of Birth</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
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

