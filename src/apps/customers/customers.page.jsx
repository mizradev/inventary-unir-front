import { useEffect, useState } from "react";
import { Toaster, toast } from 'sonner';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Card } from 'primereact/card';

const CustomersPage = () => {
    const db = [
        {
            id: 1,
            name: 'Jorge ',
            lastName: 'Aguilar',
            email: 'jorgemizrain@gmail.com',
            telephone: '99990000'
        },
        {   
            id: 2,
            name: 'Daniel ',
            lastName: 'Hernandez',
            email: 'danielhdz@gmail.com',
            telephone: '99990000'
        },
        {
            id: 3,
            name: 'Dina ',
            lastName: 'Madrid',
            email: 'dmadrid@gmail.com',
            telephone: '99990000'
        }
    ]
    const [visible, setVisible] = useState(false);
    const [customers, setCustomers] = useState([{
        id: 1,
        name: 'Jorge ',
        lastName: 'Aguilar',
        email: 'jorgemizrain@gmail.com',
        telephone: '99990000'
    },
    {   
        id: 2,
        name: 'Daniel ',
        lastName: 'Hernandez',
        email: 'danielhdz@gmail.com',
        telephone: '99990000'
    },
    {
        id: 3,
        name: 'Dina ',
        lastName: 'Madrid',
        email: 'dmadrid@gmail.com',
        telephone: '99990000'
    }]);
    const [loading, setLoading] = useState(false);

    const addCustomer = () => {
        setLoading(true);
        console.log('Agreando cliente');
        setTimeout(()=> setLoading(false), 3000);
    } 

    useEffect(()=>{
        setTimeout(()=> {
            setCustomers(db);
            toast('Customers cargados exitosamente',{
                style: {
                    padding: ".8rem 1rem",
                },
            });
        }, 3000);
    },[]);

    return (
        <>
            <Toaster position="top-right" richColors />
            <div className="overview">
                <div className="title">
                    <i className="uil uil-tachometer-fast-alt"></i>
                    <span className="text">Customers</span>
                </div>
            </div>
            <Card>
                <div className="flex justify-content-end align-items-center mb-5">
                    <Button label="Nuevo cliente" className="px-3 py-2"  icon="pi pi-external-link" onClick={() => setVisible(true)} />
                </div>
                <table className="datatable">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => {
                                <tr id={customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.telephone}</td>
                                </tr>
                            })}
                        <tr id='4'>
                            <td>Jorge</td>
                            <td>Aguilar</td>
                            <td>jorge@aguilar.com</td>
                            <td>00009999</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
            
            
            <Dialog header="Agregar Cliente" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <div className="flex justify-content-start gap-5 mb-5">
                    <FloatLabel>
                        <InputText id="username" className="p-inputtext-sm" />
                        <label htmlFor="username">Nombre</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="username" className="p-inputtext-sm" />
                        <label htmlFor="username">Apellido</label>
                    </FloatLabel>
                    {/* <FloatLabel>
                        <InputText id="username" className="p-inputtext-sm" value={value} onChange={(e) => setValue(e.target.value)} />
                        <label htmlFor="username">Apellido</label>
                    </FloatLabel> */}
                </div>
                <div className="flex justify-content-start gap-5 mb-5">
                    <FloatLabel>
                        <InputText id="username" className="p-inputtext-sm" />
                        <label htmlFor="username">Email</label>
                    </FloatLabel>
                    <FloatLabel>
                        <InputText id="username" className="p-inputtext-sm" />
                        <label htmlFor="username">Telefono</label>
                    </FloatLabel>
                </div>
                <div className="flex justify-content-end  gap-2 ">
                    <Button label="Cancelar" severity="secondary" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                    <Button label="Submit" icon="pi pi-check" loading={loading} onClick={addCustomer} />
                </div>
            </Dialog>
        </>
    )
}

export default CustomersPage;