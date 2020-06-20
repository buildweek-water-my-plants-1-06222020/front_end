import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";


const initialDetails = {
    nickname='',
    species='',
    waterFreq=''
}

const EditPlant = props => {
    const { push } = useHistory();
    const { id } = useParams();
    const [details, setDtails] = useState(initialDetails)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/plant/${id}`)
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
        axios.put(`http://localhost:5000/api/plant/${id}`, details)
        .then(res => {
            props.setPlantList(res.data);
            props.getPlantList();
            push(`/plant/${id}`)
        })
        .catch(err => console.log(err))
    }

    return (
        <div id='updatePlant'>
            <h2 id='updatePlantNiceName'>Update Nickname</h2>
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
                <button className="update-button">Update</button>
            </form>
        </div>
    )
}

export default EditPlant;