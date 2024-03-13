import React, { useEffect, useState } from 'react'
import { Table, Offcanvas } from 'react-bootstrap'
import axios from 'axios';
import './User.css'
import Button from 'react-bootstrap/Button';


export const User = () => {

    const [posts, SetPosts] = useState([]);
    const [filterData, SetFilterData] = useState([]);

    //get login details 

    const fetchData = () => {
        axios.get('http://localhost:8080/form/getdetails')
            .then(res => {
                SetPosts(res.data);
                SetFilterData(res.data)
            })
            .catch(err => {
                console.log("error", err);
            })
    };
    useEffect(() => {
        fetchData();
    }, []);

    //filter by name

    const Filter = (event) => {
        //  SetFilterData(posts.filter(f => f.username.toLowerCase().includes(event.target.value)))
        SetFilterData(posts.filter(f => f.username?.toLowerCase().includes(event.target.value.toLowerCase())));
    }


    //offcanvas show

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container'>
            <div className='row justify-content-between mt-3'>

                <div className='col-4'>
                    <h3>User</h3>
                    <div>View The User List</div>
                    <input type="text" id="in" className='form-control' onChange={Filter} placeholder='enter a user name' />

                </div>
                <div className='col-1 mt-5'><br /><button onClick={handleShow} className='btn btn-primary '>Add</button></div>

            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>User Name</th>
                        <th>Email Address</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((post, i) => (
                        <tr key={i}>
                            <td><b>{post.id}</b></td>
                            <td><b>{post.username}</b></td>
                            <td><b>{post.email}</b></td>
                            <td><b>{post.password}</b></td>
                            <td>
                                <Button variant="primary" onClick={handleShow} className="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>




            {/* model  */}

            {/* <Modal size="sm" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {/* Offcanvas */}

            <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Create User</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    username <input type="text" placeholder='Enter Username' />
                    email <input type="text" placeholder='Enter Email' />
                    password <input type="text" placeholder='Enter Password' />
                    roll <input type='text' placeholder='Enter Roll' />
                    <Button className='btn-center'>Create</Button>
                </Offcanvas.Body>

            </Offcanvas>
        </div>
    )
}







