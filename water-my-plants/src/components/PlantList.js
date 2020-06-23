import React, { useEffect, useContext } from 'react'
import PlantCard from './PlantCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import PlantContext from '../contexts/PlantContext'
import { useParams, useHistory } from "react-router-dom";



const PlantList = () => {
    const { push } = useHistory();
    const { id } = useParams();
    const { plantList, setPlantList} = useContext(PlantContext)
   
    
//   const getPlantList= () => {
//     axiosWithAuth()
//     .get(`https://water-my-plants-buildweek.herokuapp.com/api/users/${id}/plants`)
//     .then(res => setPlantList(res.data))
//     .catch(err => console.log(err))
// };


const crz = ''
const getPlantList = () => {
  axiosWithAuth()
  .get(`${crz}/auth/plants`)
//   .then(res => setPlantList(res.data))
  .then(res => console.log(res))
  .catch(err => console.log(err))
};


    useEffect(() => {
        getPlantList()
    }, [])
    

return(
    <div>
        <h1>Water My Plants</h1>
        <h2>My Plant List:</h2>
        <button onClick={() => push('/add-plant')}>Add A Plant</button>
        <PlantCard plantList={plantList} />
    </div>
)

}

export default PlantList