import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


let URL = 'https://jsonplaceholder.typicode.com/users'


function Dashboard({users,setUser}) {

    let navigate = useNavigate()

    
    useEffect(() => {
      if (users.length === 0) {
        fetchData();
      }
    }, [users]);
  

    const fetchData = async ()=>{
        try {
            const res = await axios.get(URL)
            setUser(res.data)
        } catch (error) {
            console.log(error)
        }
    }

//since i couldn't delete the data through axios I am removing it from the array list
    const deleteData = async(id)=>{
        try {
            console.log('delete called', `id:${id}`)
          const updateUser = [...users]
          const index = updateUser.findIndex(user => user.id === id);
          updateUser.splice(index,1)
           console.log(updateUser)
           setUser(updateUser)
          
            
        } catch (error) {
            console.log(error)
        }
    }


 
  return <>

{console.log(users)}


   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
            users.map((user,i)=>(
                <tr key={user.id}>
                <td>{i+1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street} <br/>
                 {user.address.suite}, {user.address.city}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>
                <Button variant="outline-secondary" onClick={()=>navigate(`/edit-user/${user.id}`)}>Edit</Button> &nbsp;&nbsp;
                <Button variant="outline-danger" onClick={()=>deleteData(user.id)}>Delete</Button>

                </td>
              </tr>

            ))
        }
      
      </tbody>
    </Table>

  </>
}

export default Dashboard