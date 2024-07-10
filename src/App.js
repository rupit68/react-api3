
// import axios from 'axios';
// import './App.css';
// import { useEffect, useState } from 'react';
// import { Field, Form, Formik } from 'formik';
import Api2 from './Api2';
function App() {
  // const [data, setdata] = useState([])
  // const [inivalue, setinivalue] = useState({
  //   productName: '',
  //   weight: '',
  //   energy: '',
  //   protine: '',
  //   carbohydrate: '',
  //   fat: ''
  // })
  // const [id, setid] = useState(null)
  // const token = "y1720608693313hgq87751336xu"
  // useEffect(() => {
  //   demo()
  // }, [])
  // function demo() {
  //   axios.get('https://service.apikeeda.com/api/v1/nutri-food', {
  //     headers: {
  //       "x-apikeeda-key": token
  //     }
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setdata(res.data.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
  // const hendel = (values,{resetForm}) => {
  //   if (id !== null) {
  //     axios.patch(`https://service.apikeeda.com/api/v1/nutri-food/${id}`,values ,{
  //       headers: {
  //         "x-apikeeda-key": token
  //       }
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         demo()
  //         resetForm()
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }
  //   else {
  //     axios.post('https://service.apikeeda.com/api/v1/nutri-food', values, {
  //       headers: {
  //         "x-apikeeda-key": token
  //       }
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         demo()
  //         resetForm()
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }
  //   setinivalue({
  //     productName: '',
  //     weight: '',
  //     energy: '',
  //     protine: '',
  //     carbohydrate: '',
  //     fat: ''
  //   })
  // }
  // const deletedata = (_id) => {
  //   axios.delete(`https://service.apikeeda.com/api/v1/nutri-food/${_id}`, {
  //     headers: {
  //       "x-apikeeda-key": token
  //     }
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       demo()
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
  // const updatedata = (el, id) => {
  //   setinivalue({
  //     productName: el.productName,
  //     weight: el.weight,
  //     energy: el.energy,
  //     protine: el.protine,
  //     carbohydrate: el.carbohydrate,
  //     fat: el.fat
  //   })
  //   setid(id)
  // }
  return (
    <div className="App">
      {/* <Formik
      enableReinitialize
        initialValues={inivalue}
        onSubmit={hendel}
      >
        <Form>
          productName<Field name="productName"></Field> <br />
          weight <Field name="weight"></Field> <br />
          energy  <Field name="energy"></Field> <br />
          protine<Field name="protine"></Field> <br />
          carbohydrate<Field name="carbohydrate"></Field> <br />
          fat<Field name="fat"></Field> <br />
          <button type='submit'>submit</button>
        </Form>
      </Formik>
      <table border={1}>
        <tr>
          <td>id</td>
          <td>productName</td>
          <td>weight</td>
          <td>energy</td>
          <td>protine</td>
          <td>carbohydrate</td>
          <td>fat</td>
          <td>delete</td>
          <td>update</td>
        </tr>
        {
          data.map((el, i) => (
            <tr>
              <td>{el._id}</td>
              <td>{el.productName}</td>
              <td>{el.weight}</td>
              <td>{el.energy}</td>
              <td>{el.protine}</td>
              <td>{el.carbohydrate}</td>
              <td>{el.fat}</td>
              <td><button onClick={() => { deletedata(el._id) }}>delete</button></td>
              <td><button onClick={() => { updatedata(el, el._id) }}>update</button></td>
            </tr>
          ))
        }
      </table> */}
      <Api2></Api2>
    </div>
  );
}

export default App;
