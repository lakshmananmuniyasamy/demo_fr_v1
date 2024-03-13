import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../Assets/spotify-logo.png'


export const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const data = {
      username: formData.name,
      email: formData.email,
      password: formData.password
    }

    if (!data.username || !data.email || !data.password) {
      alert("Please fill in all fields.");
    } else {
      fetch("http://localhost:8080/form/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/Json'
        },
        body: JSON.stringify(data) // Ensure `data` is properly defined
      })
        .then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`Server returned status: ${response.status}`);
          } else {
            alert("Signup successful");
            navigate("/");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("An error occurred while signing up. Please try again later.");
        });

    }
  }

  return (
    <div className='outer'>
      <div className="header" style={{ textAlign: "center" }}>
        <img src={Logo} style={{ height: "70px" }} alt="" />
        <h3 style={{ display: "inline-block" }}>Spotify</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <h2 className='text-light'>Sign in</h2>
        <div className="underline"></div>

        <input type="text" name='name' placeholder='UserName' value={formData.name} onChange={handleChange} />
        <br />

        <input type="text" name='email' placeholder='EmilId' value={formData.email} onChange={handleChange} />
        <br />


        <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
        <br />

        <input type="submit" value="Sign In" />

      </form>
    </div>
  )
}

