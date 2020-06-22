import React, { useEffect, useContext, useState } from 'react'
import PlantCard from './PlantCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import PlantContext from '../contexts/PlantContext'
import { useParams, useHistory } from "react-router-dom";



const PlantList = () => {
    const { push } = useHistory();
    const { id } = useParams();
    const {getPlantList, plantList, setPlantList} = useContext(PlantContext)
   
    
    useEffect(() => {
        getPlantList()
    })
    

return(
    <div>
        <h1>Water My Plants</h1>
        <h2>My PLant List:</h2>
        <button onClick={() => push('/add-plant')}>Add A Plant</button>
        <PlantCard />
    </div>
)

}

export default PlantList