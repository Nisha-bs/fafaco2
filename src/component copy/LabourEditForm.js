import { useEffect, useState } from "react";
import axios from "axios";
import { FcCheckmark } from "react-icons/fc";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/io";
import classes from "./LabourWorkForm.module.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

const LabourEditForm = () => {
  // const [input, setInput] = useState({
  //   "labourDetails": [
  //       {

  //           "landPlowing": '',
  //           "landPlowingWithTractor": '',
  //           "fertilization": '',
  //           "weedRemoving": '',
  //           "pesticideSpraying": '',
  //           "handHarvesting": '',
  //           "cropSpanking": '',
  //           "pumpsetDuty": '',
  //           "landCleaning": '',
  //           "treeClimbing": '',
  //           "paddySteaming": ''
  //       }
  //   ]
  // })
  const [labour, setLabour] = useState("");
  const [landPlowing, setLandPlowing] = useState(false);
  const [landPlowingWithTractor, setLandPlowingWithTractor] = useState(false);
  const [fertilization, setFertilization] = useState(false);
  const [weedRemoving, setWeedRemoving] = useState(false);
  const [pesticideSpraying, setPesticideSpraying] = useState(false);
  const [handHarvesting, setHandHarvesting] = useState(false);
  const [cropSpanking, setCropSpanking] = useState(false);
  const [pumpsetDuty, setPumpsetDuty] = useState(false);
  const [landCleaning, setlandCleaning] = useState(false);
  const [treeClimbing, setTreeClimbing] = useState(false);
  const [paddySteaming, setPaddyStreaming] = useState(false);
  const [others, setOthers] = useState(false);
  const navigate = useNavigate();

  const [farmerId, setFarmerId] = useState("JE0001");


  const laborWork = [
    "landPlowing",
    "landPlowingWithTractor",
    "fertilization",
    "weedRemoving",
    "pesticideSpraying",
    "handHarvesting",
    "cropSpanking",
    "pumpsetDuty",
    "landCleaning",
    "treeClimbing",
    "paddySteaming",
  ];



  const labourData = [
    {
      farmerId: farmerId,
      landPlowing: landPlowing,
      landPlowingWithTractor: landPlowingWithTractor,
      fertilization: fertilization,
      weedRemoving: weedRemoving,
      pesticideSpraying: pesticideSpraying,
      handHarvesting: handHarvesting,
      cropSpanking: cropSpanking,
      pumpsetDuty: pumpsetDuty,
      landCleaning: landCleaning,
      treeClimbing: treeClimbing,
      paddySteaming: paddySteaming,
    },
  ];
  console.log("labourData", labourData);

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .put("https://a8b2-49-204-136-220.in.ngrok.io/labour/", {
        labourDetails: labourData,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //navigate("/livestock");
  };

  return (
    <Layout>
      <div className={classes.labour}>
    
          <h1>Labour Work Details</h1>

        <div className={classes.check}>
             <div className={classes.checkbox}>
            
      
       
        <label>  
 <input type='checkbox' name='landPlowing' value={landPlowing}   onChange={()=> setLandPlowing(!landPlowing)}/>
 Land plowing </label>


 <label>


 <input type='checkbox' name='landPlowingWithTractor' value={landPlowingWithTractor} onChange={()=> setLandPlowingWithTractor(!landPlowingWithTractor)}/>

 Land plowing with tractor </label>
 <label>


 <input type='checkbox' name='fertilization' value={fertilization} onChange={()=> setFertilization(!fertilization)}/>
 Fertilization</label>
<label>


 <input type='checkbox' name='weedRemoving' value={weedRemoving} onChange={()=> setWeedRemoving(!weedRemoving)}/>
 Weed removing </label>
 <label>


 <input type='checkbox' name='pesticideSpraying' value={pesticideSpraying} onChange={()=> setPesticideSpraying(!pesticideSpraying)}/>
 Pesticide spraying </label>
 <label>


 <input type='checkbox' name='handHarvesting' value={handHarvesting} onChange={()=> setHandHarvesting(!handHarvesting)}/>
 Hand harvesting </label>
<label>


 <input type='checkbox' name='cropSpanking' value={cropSpanking} onChange={()=> setCropSpanking(!cropSpanking)}/>

 Crop spanking </label>
 <label>


<input type='checkbox' name='pumpsetDuty' value={pumpsetDuty} onChange={()=> setPumpsetDuty(!pumpsetDuty)}/>
Pumpset duty </label>
 <label>


 <input type='checkbox' name='landCleaning' value={landCleaning} onChange={()=> setlandCleaning(!landCleaning)}/>
 Land cleaning </label>
<label>


 <input type='checkbox' name='treeClimbing' value={treeClimbing} onChange={()=> setTreeClimbing(!treeClimbing)}/>

Tree climbing </label>
<label>


 <input type='checkbox' name='paddySteaming' value={paddySteaming} onChange={()=> setPaddyStreaming(!paddySteaming)}/>
 
 Paddy Steaming</label>

<label>


 <input type='checkbox'name='others' value={others} onChange={()=> setOthers(!others)}/>
 Others </label> 
 </div>
 </div>
        <button onClick={submitHandler}>Submit</button> 
      </div>

    </Layout>
  );
};
export default LabourEditForm;










