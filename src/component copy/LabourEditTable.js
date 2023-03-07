import classes from './LabourEditTable.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { labourActions } from '../store/labourReducer';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


const LabourEditTable = ()=> {

const {labourData} = useSelector((state)=> state.labour)
console.log('labourData', labourData)
const {labourEditData} = useSelector((state)=> state.labour)
console.log('labourEditData', labourEditData)

const dispatch = useDispatch()
const Navigate = useNavigate()
    useEffect(() => {
        // const submitHandler =(event)=> {
        //     event.preventDefault()
   
        axios
          .get('https://a77b-49-204-112-10.in.ngrok.io/farmer/all')
          .then((response) => {
            console.log(response);
            dispatch(labourActions.create_labour(response.data))
          })
          
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
            } else if (error.request) {
              console.log("network error");
            } else {
              console.log(error);
            }
          });
  
  
     }, []);
  
// const labourEditData = [{
//     labourDetails: [
//     {
//         landPlowing: false,
//         weedRemoving: false,
//         pesticideSpraying: false,
//         handHarvesting: false,
//         cropSpanking: false,
//         pumpsetDuty: false,
//         landCleaning: false,
//         treeClimbing: false,
//         paddySteaming: false,
//         landPlowingWithTractor: false,
//         fertilization: false
//     },
//     {
//         landPlowing: true,
//         weedRemoving: false,
//         pesticideSpraying: false,
//         handHarvesting: true,
//         cropSpanking: false,
//         pumpsetDuty: false,
//         landCleaning: false,
//         treeClimbing: false,
//         paddySteaming: true,
//         landPlowingWithTractor: false,
//         fertilization: true
//     },
    

// ],
// }]



const editHandler =(farmer,input)=> {
     console.log('editinput',  input.landPlowing)
       
   const editData = {
     farmerId: farmer,
     landPlowing: input.landPlowing,
             weedRemoving: input.weedRemoving,
             pesticideSpraying: input.pesticideSpraying,
             handHarvesting: input.handHarvesting,
             cropSpanking: input.cropSpanking,
             pumpsetDuty: input.pumpsetDuty,
             landCleaning: input.landCleaning,
             treeClimbing: input.treeClimbing,
             paddySteaming: input.paddySteaming,
             landPlowingWithTractor: input.landPlowingWithTractor,
             fertilization: input.fertilization
       
   }
    console.log('editData', editData)
   
   dispatch(labourActions.labour_edit_data(editData))
   
   
//Navigate('/laboureditform')
   }

return (
    <div className={classes.labour}>
        <h1>Labour Working Table</h1>
    

    
    </div>
)
}

export default LabourEditTable