import React from 'react'
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Plant = ({plant}) => {
    const { push } = useHistory();
    console.log(plant)
    const handleDelete = e => {
        axiosWithAuth()
        .delete(`/plants/${plant.plant_id}`)
        .then(res => {
            window.location.reload()
        })
        .catch(err => console.log(err))
      }
      
    return(
        <div className='plant'>
            <h2 className='nickname'>Plant Name: {plant.nickname}</h2>
            <h3 className='species'>Plant Species: {plant.species}</h3>
            <h3 className='h2o_frequency'> Water Frequency: {plant.h2o_frequency}</h3>
            <button onClick={() => push(`/edit-plant/${plant.plant_id}`)}>Edit Plant</button>
            <button onClick={handleDelete}>Delete Plant</button>
        </div>
    )
}

export default Plant;

