import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from '../Assets/spotify-logo.png'
import './Login.css'



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
        fetch("http://localhost:8080/form/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Check)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Server returned status: ${response.status}`);
                }
            })
            .then(data => {
                if (!data.username || !data.password) {
                    alert("Enter valid details");
                } else {
                    alert("Login successful");
                    if (data.role === 'admin') {
                        navigate(`/admin/${data.username}`);

                    } else {
                        navigate("/songs");

                    }
                    console.log("Data", data);
                    setFormData(data);
                }
            })
            .catch(error => {
                console.error("Error during fetch", error);
                alert("Please enter the correct data");
            });

    }
    return (
        <div className="outer">
            <div className="header" style={{ textAlign: "center" }}>
                <img src={Logo} style={{ height: "70px" }} alt="" />
                <h3 style={{ display: "inline-block" }}>Spotify</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <h2 className="text-light">Log In</h2>
                <div className="underline"></div>

                <input type="text" placeholder="Username :" name="username" value={formData.username} onChange={handleChange} /><br />

                <input type="password" placeholder="Password :" name="password" value={formData.password} onChange={handleChange} /><br />

                <p>Don't have an account? <Link className="text-decoration-none text-light" to="/signin">Signin</Link></p><br />

                <input type="submit" className="button" value="Login in" />
            </form>
        </div>
    )
}






