import React, { useEffect, useContext } from 'react'
import PlantCard from './PlantCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import PlantContext from '../contexts/PlantContext'

const PlantList = () => {
    const {getPlantList, plantList, setPlantList} = useContext(PlantContext)

    
    useEffect(() => {
        getPlantList()
    })
    

return(
    <div>
        <PlantCard />
    </div>
)

}

export default PlantList