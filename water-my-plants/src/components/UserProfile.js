import React, {useState, useEffect, useContext} from 'react'
import { useParams, useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import UserContext from '../contexts/UserContext'

const initialDetails = {
    id:'',
    username:'',
    phone_number:''
}

const UserProfile = () => {
    const { push } = useHistory();
    const [details, setDetails] = useState(initialDetails);
    const {userId} = useContext(UserContext)

    useEffect(() => {
        axiosWithAuth()
            .get(`/users/${userId.userId}`)
            .then(res => {
                console.log(res)
                setDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [userId]);

    const handleChange = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        axiosWithAuth()
        .put(`/users/${userId.userId}`, details)
        .then(res => {
            console.log(res)
            push(`/account`)
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h2 id='updateUserInfo'>Update Account Information</h2>
            <form id='userInfoForm' onSubmit={handleSubmit}>
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
                    name="phone_number"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    value={details.phone_number}
                />
                <br/>
                <button className="update-user-button">Update</button>
            </form>
        </div>
    )
}

export default UserProfile;