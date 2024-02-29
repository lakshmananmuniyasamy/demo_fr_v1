import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
        console.log(name, value);
    }
    const handleSubmit = (event) => {

        event.preventDefault();
        console.log(formData);
        const Check = {
            username: formData.username,
            password: formData.password
        }
        fetch("http://localhost:8080/form/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(Check)
        })
         .then(response => {

                if (response.status === 200) {
                    console.log("datareceived", response);
                    alert("singup seccessfully");
                    navigate("/homels");
                }
            }).catch(error => {
                console.log("error", error);
            })
            .then((data) => {

                if (data == !formData.username && data == !formData.password) {
                    return alert("Enter valid details");
                } else {
                    console.log("Data", data)
                    setFormData(data)
                }
            })
            .catch((error) => {
                console.error("Error during fetch", error);
            });

    }
    return (
        <div className="css" >

            <div className="outer">
                <h1>Login Form</h1>
                <h4>login in to get notified</h4>
                <div>
                    <form onSubmit={handleSubmit}>

                        <p>Username : <input type="text" placeholder="Type your username" name="username" value={formData.username} onChange={handleChange} /></p>

                        <p>Password : <input type="password" placeholder="Type your Password" name="password" value={formData.password} onChange={handleChange} /></p>

                        <p>Create new account <Link to="/signup">Create</Link></p>

                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
            {/* <div className="container">
                {Array.isArray(formData) && formData.map((formData) => (
                    <div className="card" key={formData.id}>
                        <h3>Welcome, {formData.firstname} {formData.lastname}</h3>
                    </div>
                ))}
            </div> */}
        </div>


    )
}
// export default Login













// import React, { useState } from 'react'
// import './Login.css'

// export const Login = () => {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     })

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({ ...formData, [name]: value });
//         console.log(name, value);
//     }

//     const Login=()=>{

//         const data ={
//             email:formData.email,
//             password:formData.password
//         }

//         fetch("http://localhost:8080/Login/set",{
//             method:'POST',
//             headers:{
//                 'Content-Type' : 'application/Json'
//             },
//             body:JSON.stringify(data)
//         })
//         .then(response=>{
//             console.log(response);
//         }).catch(error=>{
//             console.log(error);
//         })
//     }


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(formData);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h1>Log in Form</h1>
//                 <label htmlFor="">emailId</label>
//                 <input type="text" name='email' value={formData.email} onChange={handleChange} />
//                 <br /><br />

//                 <label htmlFor="">password</label>
//                 <input type="password" name='password' value={formData.password} onChange={handleChange} />
//                 <br /><br />

//                 <button onClick={()=>{Login()}}>Login</button>
//             </form>
//         </div>
//     )
// }





