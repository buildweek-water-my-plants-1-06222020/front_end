import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'


const initialDetails = {
    username:'',
    password:'',
    phone_number:''
}

const UserProfile = () => {
    const { push } = useHistory();
    const { id } = useParams();
    const [details, setDetails] = useState(initialDetails);
    

    useEffect(() => {
        axiosWithAuth()
            .get(`/users/${id}`)
            .then(res => {
                console.log(res.data)
                setDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/users/${id}`, details)
        .then(res => {
            push(`/account`)
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h2 id='updateUserInfo'>Update Account Information</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    value={details.username}
                />
                <div />

                <input
                    type="text"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={details.password}
                />
                <div />

                <input
                    type="text"
                    name="phoneNumber"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    value={details.phone_number}
                />

                <button className="update-user-button">Update</button>
            </form>
        </div>
    )
}

export default UserProfile;