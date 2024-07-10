import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const Api2 = () => {
    const[data,setdata]=useState([])
    const token='a1720612574603kcd85743926wn'
    useEffect(()=>{
        demo1()
    },[])
    function demo1() {
        axios.get('https://service.apikeeda.com/api/v1/notes', {
                headers: {
                  "x-apikeeda-key": token
                }
              })
                .then((res) => {
                  console.log(res);
                  setdata(res.data.data)
                })
                .catch((err) => {
                  console.log(err);
                })
    }
    const hendal=(values)=>{
        axios.post('https://service.apikeeda.com/api/v1/notes',values,{
            headers:{
                "x-apikeeda-key":token
            }
        })
        .then((res)=>{
            console.log(res);
            demo1()
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <Formik
        enableReinitialize
        initialValues={{       
            title:'',
            date:'',
            description:''
        }}
        onSubmit={hendal}>
            <Form>
            title<Field name="title"></Field>
            date<Field name="date"></Field>
            description<Field name="description"></Field>
            <button type='submit'>submit</button>
            </Form>
        </Formik>
      <table border={1}>
        <tr>
            <td>title</td>
            <td>date</td>
            <td>description</td>
        </tr>
        {
            data.map((el,i)=>(
                <tr>
                    <td>{el.title}</td>
                    <td>{el.date}</td>
                    <td>{el.description}</td>
                </tr>
            ))
        }
      </table>
    </div>
  )
}

export default Api2
