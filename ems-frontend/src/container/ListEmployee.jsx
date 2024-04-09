import React, {useEffect,useState} from 'react'
import { listEmployees } from '../service/EmployeeService';
import {useNavigate} from 'react-router-dom';

const ListEmployee = () => {
    
    const [employees,setEmployees]=useState([])
    useEffect(() =>{
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error =>{
            console.error(error);
        })
    },[]);

    const navigator = useNavigate();

    const addEmp = ()=>{
        navigator("/add-emp");
    }
    const updateEmployee = (id)=>{
        navigator('/update-emp/${id}');
    }



    return (    
    <div className='container'>
        <h2 className = 'text-center'>List of Employees</h2>
        <button className='btn btn-primary btn-sm' onClick={addEmp}>Add Employee</button>
        <table className='table table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {   
                    employees.map(employee=>
                        <tr key={employee.id} >
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td><button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button></td> 
                        </tr>)
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployee