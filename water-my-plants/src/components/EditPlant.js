import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PlantContext from '../contexts/PlantContext'

const initialDetails = {
    nickname:'',
    species:'',
    h2o_frequency:'',
    img_url:null
}

const EditPlant = () => {
    const { push } = useHistory();
    const { id } = useParams();
    const [details, setDetails] = useState(initialDetails)
    const { setPlantList } = useContext(PlantContext)

    useEffect(() => {
        axiosWithAuth()
            .get(`/plants/${id}`)
            .then(res => {
                console.log(res.data.plant_id)
                setDetails({
                    nickname: res.data.nickname,
                    species: res.data.species,
                    h2o_frequency: res.data.h2o_frequency
                });
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
        .put(`/plants/${id}`, details)
        .then(res => {
            push(`/plantlist`).reset()
        })
        .catch(err => console.log(err))
    }

    return (
        <div id='updatePlant'>
            <h2>Update Plant Information</h2>
            <form id='updatePlantForm' onSubmit={handleSubmit}>
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
                <br/>
                <button className="update-button">Update Plant</button>
            </form>
        </div>
    )
}

export default EditPlant;