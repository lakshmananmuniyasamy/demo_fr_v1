import React from 'react'

export const Dashboard = () => {
  const [formData, setFormData] = useState();
    return (
        <div className='m-5'>
            <h1>Welcome back, </h1>
            <input type="text" placeholder="Username :" name="username" value={formData} onChange={handleChange} /><br />


        </div>
    )
}
