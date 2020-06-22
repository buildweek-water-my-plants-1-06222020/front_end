import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";


const initlalDetails = {
        nickname: '',
        species: '',
        waterFreq: '',
        id: Date.now()
}

const AddPlant = props => {
    const { push } = useHistory();
    const { id } = useParams();
    const [details, setDetails] = useState(initlalDetails)


    const handleChange = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`https://water-my-plants-buildweek.herokuapp.com/api/users/${id}/plants`, details)
            .then(res => {
                props.setPlantList(res.data);
                props.getPlantList();
                push(`/plantlist`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div id='addPlant'>
            <h2>Add A Plant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nickname"
                    onChange={handleChange}
                    placeholder="Nickname"
                    value={details.nickname}
                />
                <div />
                <input
                    type="text"
                    name="species"
                    onChange={handleChange}
                    placeholder="Species"
                    value={details.species}
                />
                <div />
                <input
                    type="text"
                    name="waterFreq"
                    onChange={handleChange}
                    placeholder="Water Frequency"
                    value={details.waterFreq}
                />
                <button className="add-button">Add New Plant</button>
            </form>
            {/* <Suggestions /> */}
        </div>
    )
}

export default AddPlant;