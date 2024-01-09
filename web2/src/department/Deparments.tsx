
import { useEffect, useState } from 'react';
import  {CustomTable}  from '../component/Table'
import Layout from '../layout/Layout';
import { Department } from '../model/Model';


function Deparments() {

    const [department, setDepartment] = useState<Department[]>([]);

    const setInitDepartment = () => {
        const department1 = new Department(12, 'dep0001', 'Finance')

        setDepartment([...department, department1]);
    }

    useEffect(() => {
        setInitDepartment()
    
      }, [])

    return (
        <p>
             <CustomTable props={{department: department}}/>   
             
        </p>
        
    )
}

export default Layout(Deparments);
