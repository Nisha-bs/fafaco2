import classes from "./CropForm.module.css";
import { useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CropEditForm = () => {
  const navigate = useNavigate();
  const {farmer_id} = useSelector((state)=> state.farmer)
  console.log('farmer_id', farmer_id)
// const {addCrop} = useSelector((state)=> state.crop)
// console.log('addCrop', addCrop)
 
  const [inputdata, setInputData] = useState([]);

  const [farmerId, setFarmerId] = useState("SWE0003");
  const [area, setArea] = useState();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  const [brand, setBrand] = useState("");
  const [cropedAt, setCropedAt] = useState("");
  const [organic, setOrganic] = useState(false);
  const [seedingType, setSeedingType] = useState("");
  var [harvestPeriod, setHarvestPeriod] = useState("");
  var [areaUnit, setAreaUnit] = useState()
  var [areaNum, setAreaNum] = useState()

  const [num, setNum] = useState();
  const [text, setText] = useState();

  harvestPeriod = num + " " + text;

  console.log("t", harvestPeriod);

  const [tableDetail, setTableDetail] = useState();
  const [errMsg, setErrMsg] = useState(false);
  const [show, setShow] = useState(false);
  const[focuses, setFocused] = useState(false)
  const[errorMsg, setErrorMsg] = useState('')
  var [placeholderValue, setPlaceholderValue] = useState()
  var [harvestPlaceholder, setHarvestPlaceholder] = useState()

  const areaValue =  ['Acres', "Hectares", 'Square Meters']
  const harvestPeriodValue = ['Days', 'Weeks', 'Months']


const  areaChangeHandler =(event)=> {
  setAreaUnit(event.target.value)
  areaValue.map((item)=> {
    console.log('item', item)
    if(item === event.target.value){
     setPlaceholderValue(event.target.value)
    }
  })
  console.log('true', placeholderValue)
}

const harvestChangeHandler =(event)=> {
setText(event.target.Value)

harvestPeriodValue.map((item)=> {
  console.log('item', item)
  if(item === event.target.value){
    setHarvestPlaceholder(event.target.value)
  }
})
console.log('place', placeholderValue)


}
  const data = [
    {
      farmerId: farmerId,
      area: +area,
      type: type,
      name: name,
      variety: variety,
      brand: brand,
      croppedAt: cropedAt,
      organic: organic,
      seedingType: seedingType,
      harvestPeriod: harvestPeriod,
    },
  ];

  console.log("data", data);

  const submitHandler = (event) => {
    event.preventDefault();

// if( name.trim().length === 0 || variety === 0|| brand.trim().length || cropedAt.length === 0 || seedingType.length ===0 
//   || type.length === 0 
//   ){
//   setErrMsg(true)
//   setFocused(true)
// }

    console.log("data", data);

    const val = {
      name,
      type,
      organic,
      harvestPeriod,
      area,
      farmerId,
      brand,
      cropedAt,
      seedingType,
    };

    // const table = [...data, val];
    // console.log("table", table);
    // setInputData(table);

    // axios
    //   .put(
    //     "https://a8b2-49-204-136-220.in.ngrok.io/crop/create",
    //     { cropDetails: data }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setErrorMsg(error.response.data)
    //   });
 //  navigate("/garden");


  };
  console.log('error', errorMsg.organic)
  console.log("inputData", inputdata);

  return (
    <Layout>
      <div className={classes.div}>
        <h1 className={classes.header}>Add Crop Details</h1>

        <form className={classes.crop_form}>
          <select
            value={type}
            name="type"
            onChange={(event) => setType(event.target.value)}
          >
            <option hidden value="">Select Type of Land </option>
            <option value="DryLand">Dryland</option>
            <option value="Wetland">Wetland</option>
          </select>
          {/* {errMsg && type.length<=0?<h5>This field may not be blank</h5> : ''} */}
<h5>{errorMsg.type}</h5>
          <input
            placeholder="Enter Crop Name"
            type="text"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
{/* {errMsg && name.length<=0?<h5>This field may not be blank</h5> : ''} */}
<h5>{errorMsg.name}</h5>
          <input
            type="text"
            placeholder="Enter Crop type"
            value={variety}
            name="variety"
            onChange={(event) => setVariety(event.target.value)}
          />
          {/* {errMsg && variety.length<=0?<h5>This field may not be blank</h5> : ''} */}
          <h5>{errorMsg.variety}</h5>
          <input
            type="text"
            placeholder="Enter Brand"
            value={brand}
            name="brand"
            onChange={(event) => setBrand(event.target.value)}
          />
     {/* {errMsg && brand.length<=0?<h5>This field may not be blank</h5> : ''} */}
     <h5>{errorMsg.brand}</h5>
     <div className ={classes.area}>
<select
              value={areaUnit}
              // onChange={(event) => setAreaUnit(event.target.value)}
              onChange={areaChangeHandler}
              placeholder="Select  Unit"
            >
              <option hidden value="">Select Area Units</option>
              <option value="Square Meters">Square Meters</option>
              <option value="Acres">Acres</option>

              <option value="Hectares">Hectares</option>
            </select>
            <input
            type="number"
            placeholder={'in' + " " + placeholderValue}
            value={area}
            name="area"
            onChange={(event) => setArea(event.target.value)}
          />
            </div>
            <h5>{errorMsg.area}</h5>
          <div className={classes.dropdown}>
          <select
              value={text}
              // onChange={(event) => setText(event.target.value)}
              onChange={harvestChangeHandler}
              placeholder="Select  Period"
            >
              <option hidden value="">Select Period</option>
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>

              <option value="Months">Months</option>
            </select>
          
            <input
              type="number"
              value={num}
              onChange={(event) => setNum(event.target.value)}
              placeholder={'in' + " " + harvestPlaceholder}
            />
          
          {/* {errMsg && harvestPeriod.length<=0?<h5>This field may not be blank</h5> : ''} */}
          <h5>{errorMsg.harvestPeriod}</h5>
          </div>
        
          <div className={classes.date}>
      
	<input
 	  type="date"
  	  required="required" 
      placeholder="Enter Cropped at Date(Starting Date)"
      value={cropedAt}
      onChange={(event) => setCropedAt(event.target.value)}
	/>
	{/* {errMsg && cropedAt.length<=0?<h5>This field may not be blank</h5> : ''} */}
  <h5>{errorMsg.croppedAt}</h5>
      </div>

          <select
            value={seedingType}
            name="seedingType"
            onChange={(event) => setSeedingType(event.target.value)}
            placeholder ='choose planted or seeded'
           // selected disabled 
          >
         <option hidden value >Select Seeding Type </option>
            <option value="Planted">Planted</option>

            <option value="Seeded">Seeded</option>
          </select>
          {/* {errMsg && seedingType.length<=0?<h5>This field may not be blank</h5> : ''} */}
          <h5>{errorMsg.seedingType}</h5>
        </form>

        <div className={classes.check}>
         
          <input
            type="checkbox"
            value={organic}
            name="organic"
            onChange={() => setOrganic(!organic)}
          />
           <label for="checkbox">Organic</label>
           <h5>{errorMsg.organic}</h5>
        </div>

        <button onClick={submitHandler} className={classes.btn}>
          SUBMIT
        </button>
        <button onClick={()=> navigate("/garden")}>NEXT</button>
        {/* <div>
<button className={classes.btn1}  onClick={showHandler}>Save</button>
<button className={classes.btn2} > Next</button>
</div> */}
      </div>
    </Layout>
  );
};

export default CropEditForm;
