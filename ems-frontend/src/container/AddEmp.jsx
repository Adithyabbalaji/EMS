import React,{useState,useEffect} from 'react'
import { createEmployee } from '../service/EmployeeService';
import {useNavigate,useParams} from 'react-router-dom';

const AddEmp = () => {

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const navigator = useNavigate();

    const {id} = useParams();

    function handleFirstName(e){
        setFirstName(e.target.value);
    }
   
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function submitEmp(e){
        e.preventDefault();
        const Emp = {firstName,lastName,email}
        console.log(Emp);
        createEmployee(Emp).then((response)=>{
            console.log(response.data);
            navigator("/employees");
        });
        

    }
    function pageTitle() {
        if(id)
        return <h1 className='text-center'>Update Employee</h1>
        else 
        return <h1 className='text-center'>Add Employee</h1>
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3 '>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>   
                            <label className='form-label'> First Name</label>
                            <input type='text'
                            placeholder='Enter first name'
                            value={firstName}
                            className='form-control'
                            onChange={handleFirstName}>
                            </input>
                        </div>
                        <div className='form-group mb-2'>   
                            <label className='form-label'> Last Name</label>
                            <input type='text'
                            placeholder='Enter last name'
                            value={lastName}
                            className='form-control'
                            onChange={(e)=>setLastName(e.target.value)}>
                            </input>
                        </div>
                        <div className='form-group mb-2'>   
                            <label className='form-label'> Email</label>
                            <input type='text'
                            placeholder='Enter Email'
                            value={email}
                            className='form-control'
                            onChange={handleEmail}>
                            </input>
                        </div>
                    </form>

                </div>
                <button className='btn btn-success' onClick={submitEmp}>Submit</button>


            </div>

        </div>

    </div>
  )
}

export default AddEmp