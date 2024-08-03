import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser({users, setUser}) {
    


    let navigate = useNavigate()
    let { id } = useParams();
    console.log(id)
    


    const currentUser = users.find(user => user.id === parseInt(id))
    console.log(currentUser)

    const validatetheform = async(formattedValues)=>{
      try {
        const index = users.findIndex((user)=> user.id === formattedValues.id)
        const updatedUsers = [...users]
        updatedUsers.splice(index,1,formattedValues)
        setUser(updatedUsers)
        navigate('/')
        
      } catch (error) {
        console.log(error)
      }
    }
  
  const formSchema =  Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    username: Yup.string()
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    street:  Yup.string().required('Required'),
    suite:Yup.string().required('Required'),
    city:Yup.string().required('Required'),
    phone:Yup.string().required('Required'),
    website:Yup.string().required('Required'),
    company:Yup.string().required('Required')
  
  });
  
  let formik = useFormik({
    initialValues:{
      name: currentUser.name,
      email: currentUser.email,
      username: currentUser.username,
      street: currentUser.address.street,
      suite: currentUser.address.suite,
      city: currentUser.address.city,
      phone: currentUser.phone,
      website: currentUser.website,
      company: currentUser.company.name
    },
    enableReinitialize: true,
    validationSchema:formSchema,
    onSubmit: values =>{
      const formattedValues = {
        id: currentUser.id,
        name: values.name,
        email: values.email,
        username: values.username,
        address: {
          street: values.street,
          suite: values.suite,
          city: values.city
        },
        phone: values.phone,
        website: values.website,
        company: {
          name: values.company
        }
      }
      console.log(formattedValues.id)
   validatetheform(formattedValues)
    }
  })
  
    return <>
    <Form style={{width:'90%', margin:'auto'}} onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={formik.values.name} placeholder="Enter Name" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name ? <div style={{color:'red'}} >{formik.errors.name}</div>: null}
        </Form.Group>
        </div>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" value={formik.values.username} placeholder="User Name"  id='username' name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.username && formik.errors.username ? <div style={{color:'red'}} >{formik.errors.username}</div>: null}
        </Form.Group>
        </div>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={formik.values.email} placeholder="Enter email"  id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <div style={{color:'red'}} >{formik.errors.email}</div>: null}
        </Form.Group>
        </div>
        </div>
        
  
        <div className='row'>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" placeholder="Enter Street"  value={formik.values.street}  id='street' name='street' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.street && formik.errors.street ? <div style={{color:'red'}} >{formik.errors.street}</div>: null}
        </Form.Group>
        </div>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>Suite</Form.Label>
          <Form.Control type="text" placeholder="Enter Suite"  value={formik.values.suite}  id='suite' name='suite' onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.suite && formik.errors.suite ? <div style={{color:'red'}} >{formik.errors.suite}</div>: null}
        </Form.Group>
        </div>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City"   value={formik.values.city}  id='city' name='city' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.city && formik.errors.city ? <div style={{color:'red'}} >{formik.errors.city}</div>: null}
        </Form.Group>
        </div>
        </div>
  
  
        <div className='row'>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" value={formik.values.phone}   id='phone' name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.phone && formik.errors.phone ? <div style={{color:'red'}} >{formik.errors.phone}</div>: null}
        </Form.Group>
        </div>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" placeholder="Enter webiste" value={formik.values.website}  id='website' name='website' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.website && formik.errors.website ? <div style={{color:'red'}} >{formik.errors.website}</div>: null}
        </Form.Group>
        </div>
        <div className='col'>
        <Form.Group className="mb-3" >
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Enter Company" value={formik.values.company}  id='company' name='company' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.company && formik.errors.company ? <div style={{color:'red'}} >{formik.errors.company}</div>: null}
        </Form.Group>
        </div>
        </div>
  
  
  
  
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </>
}

export default EditUser