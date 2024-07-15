import { useState, useEffect } from 'react';
import DataTable from '../../../layout/components/DataTable';

export const GridCustomersComponent = () => {

    const columns = [
        { 
            name: 'Nombre',
            selector: row => row.name
        },
        { 
            name: 'apellido',
            selector: row => row.lastName
         },
        { 
            name: 'email',
            selector: row => row.email
        },
        { name: 'telephone',
            selector: row => row.telephone
        },
    ];

    const data = [
        {
            name: 'Jorge ',
            lastName: 'Aguilar',
            email: 'jorgemizrain@gmail.com',
            telephone: '99990000'
        },
        {
            name: 'Jorge ',
            lastName: 'Aguilar',
            email: 'jorgemizrain@gmail.com',
            telephone: '99990000'
        },
        {
            name: 'Jorge ',
            lastName: 'Aguilar',
            email: 'jorgemizrain@gmail.com',
            telephone: '99990000'
        }
    ]

    /* useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); */


    return ( 
        <div className="activity-data">
            
        </div>
    );
}