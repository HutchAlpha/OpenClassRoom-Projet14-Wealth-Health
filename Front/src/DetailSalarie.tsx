import { useEffect, useState } from 'react';
import './scss/_DetailSalarie.scss';
import { useSelector } from 'react-redux';

import DataTable, { Column } from 'datatables.net-react';
import DtCore from 'datatables.net-dt';
import 'datatables.net-dt/css';

//! Association du cœur DataTables au composant React
DataTable.use(DtCore);

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
            if (user !== null && adress !== null) {
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
                <div className="detail-salarie__table-container" role="region" aria-label="Liste des salariés, défilement horizontal possible" tabIndex={0}>
                    <DataTable data={employees} className="display detail-salarie__table">
                        <Column title="First Name" data="firstName" />
                        <Column title="Last Name" data="lastName" />
                        <Column title="Start Date" data="startDate" />
                        <Column title="Department" data="department" />
                        <Column title="Date of Birth" data="dateOfBirth" />
                        <Column title="Street" data="street" />
                        <Column title="City" data="city" />
                        <Column title="State" data="state" />
                        <Column title="Zip Code" data="zipCode" />
                    </DataTable>
                </div>
            )}
        </div>
    );
}

