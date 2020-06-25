import React, { useEffect, useContext } from 'react'
import PlantCard from './PlantCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import PlantContext from '../contexts/PlantContext'
import { useParams, useHistory } from "react-router-dom";
import UserContext from '../contexts/UserContext'


const PlantList = () => {
    const { push } = useHistory();
    const { setPlantList } = useContext(PlantContext)
    const { userId } = useContext(UserContext)
   
    const getPlantList = (userId) => {
        axiosWithAuth()
            .get(`/users/${userId}/plants`)
            .then(res => setPlantList(res.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getPlantList(userId.userId)
    }, [userId.userId])


    return (
        <div id='plantList'>
            <h1>Water My Plants</h1>
            <h2>{`My Plant List:`}</h2>
            <button onClick={() => push('/add-plant')}>Add A Plant</button>
            <PlantCard />
        </div>
    )

}

export default PlantList