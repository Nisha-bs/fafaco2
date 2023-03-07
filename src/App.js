import { Route, Routes } from "react-router-dom";
import Farmerdetails from "./component copy/pages/Farmerdetails";
import Machinedetails from "./component copy/pages/Machinedetails";
import Start from "./component copy/pages/Start";
import Land from "./component copy/pages/Land";
import ViewFarmer from "./component copy/pages/ViewFarmer";
import Add from "./component copy/pages/Add_Employee";
import CropForm from "./component copy/pages/CropForm";
import Signup from "./component copy/pages/Signup";
import Admin from "./component copy/pages/Admin";
import Employee from "./component copy/pages/Employee";
import View from "./component copy/pages/View_Employee";
import EditLand from "./component copy/pages/EditLand";
import Livestock from "./component copy/pages/Livestock";
import Garden from "./component copy/pages/Garden";
import LabourWorkForm from "./component copy/pages/LabourWorkForm";
import Scroll from "./component copy/pages/Scroll";
import SelectLand from "./component copy/pages/SelectLand";
import LandTable from "./component copy/pages/LandTable";
import Edit from "./component copy/pages/Edit_Employee";
// import Preview from "./component copy/pages/Preview";
import Editgarden from "./component copy/pages/editgarden";
import EditLivestock from "./component copy/pages/Editlivestocktable";
import EditMachinedetails from "./component copy/pages/EditMachinedetails";
import EditCrop from "./component copy/pages/CropEditTable";
import Gardentable from "./component copy/pages/gardentable";
import Livestocktable from "./component copy/pages/livestocktable";
import CropTable from "./component copy/pages/CropTable";
import LabourEditForm from "./component copy/pages/LabourEditForm";
import ViewMachine from "./component copy/pages/Viewmachine";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/add_employee" element={<Add />} />
      <Route path="/view_employee" element={<View />} />
      <Route path="/farmerdetails" element={<Farmerdetails />} />
      <Route path="/land" element={<Land />} />
      <Route path="/machinedetails" element={<Machinedetails />} />
      <Route path="/viewfarmer" element={<ViewFarmer />} />
      <Route path="/cropform" element={<CropForm />} />
      <Route path="/livestock" element={<Livestock />} />
      <Route path="/garden" element={<Garden />} />
      <Route path="/gardentable" element={<Gardentable />} />
      <Route path="/livestocktable" element={<Livestocktable />} />
      <Route path="/editgarden" element={<Editgarden />} />
      <Route path="/editlivestock" element={<EditLivestock />} />
      <Route path="/labour" element={<LabourWorkForm />} />
      <Route path="/edit_employee" element={<Edit />} />
      <Route path="/selectlandtable" element={<Scroll />} />
      <Route path="/selectlandpage" element={<SelectLand />} />
      <Route path="/landtable" element={<LandTable />} />
      <Route path="/editland" element={<EditLand />} />
      {/* <Route path="/preview" element={<Preview />} /> */}
      <Route path="/editmachine" element={<EditMachinedetails />} />
      <Route path="/editcrop" element={<EditCrop />} />
      <Route path="/croptable" element={<CropTable />} />
      <Route path="/editlabour" element={<LabourEditForm />} />
      <Route path="/machinetable" element={<ViewMachine />} />
    </Routes>
  );
}

export default App;
