import React from 'react'
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Plant = props => {
    const { push } = useHistory();

    const handleDelete = e => {
        e.preventDefault();
        axiosWithAuth
        .delete(`/plants/${props.plant.id}`)
        .then(res => {
            props.getPlantList();
            push('/plantlist')
        })
        .catch(err => console.log(err))
      }
      
    return(
        <div className='plant'>
            <h2 className='nickname'>{props.plant.nickname}</h2>
            <h3 className='species'>{props.plant.species}</h3>
            <h3 className='h2o_frequency'>{props.plant.h2o_frequency}</h3>
            <button onClick={() => push(`/edit-plant/${props.plant.id}`)}>Edit Plant</button>
            <button onClick={handleDelete}></button>
        </div>
    )
}

export default Plant;

//nickname
//species
//h20Frequency
