import React, {useContext} from 'react'
import PlantContext from '../contexts/PlantContext'
import Plant from './Plant'

const PlantCard = () => {
    const { plantList } = useContext(PlantContext)
   console.log(plantList)
    return(
        <div>
            {plantList.map(plant => (
                <Plant
                key={plant.id}
                plant={plant}
                className='plant'
                />
            ))}
        </div>
    )
}

export default PlantCard;