import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";


const initialDetails = {
    username:'',
    password:'',
    phoneNumber:''
}

const UserProfile = () => {
    const { push } = useHistory();
    const { id } = useParams();
    const [details, setDetails] = useState(initialDetails);
    

    useEffect(() => {
        axios
            .get(`https://water-my-plants-buildweek.herokuapp.com/api/users/${id}`)
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
        axios.put(`https://water-my-plants-buildweek.herokuapp.com/api/users/${id}`, details)
        .then(res => {
            push(`/user/${id}`)
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
                    value={details.phoneNumber}
                />

                <button className="update-user-button">Update</button>
            </form>
        </div>
    )
}

export default UserProfile;