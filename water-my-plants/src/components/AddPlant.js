import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";


const initlalDetails = {
        nickname: '',
        species: '',
        h20_frequency: '',
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
        axios.post(`/users/${id}/plants`, details)
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
                    name="h20_frequency"
                    onChange={handleChange}
                    placeholder="Water Frequency"
                    value={details.h20_frequency}
                />
                <button className="add-button">Add New Plant</button>
            </form>
            {/* <Suggestions /> */}
        </div>
    )
}

export default AddPlant;