import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const initlalDetails = {
        nickname: '',
        species: '',
        h2o_frequency: ''
}

const AddPlant = ({setPlantList, getPlantList, plantList}) => {
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
        axiosWithAuth()
       .post(`/users/${id}/plants`, details)
            .then(res => {
                console.log(res)
                setPlantList([...plantList, res.data]);
                getPlantList();
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
                    name="h2o_frequency"
                    onChange={handleChange}
                    placeholder="Water Frequency"
                    value={details.h2o_frequency}
                />
                <button className="add-button">Add New Plant</button>
            </form>
        </div>
    )
}

export default AddPlant;