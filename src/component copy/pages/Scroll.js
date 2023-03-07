import SimpleBarReact from "simplebar-react";
import classes from "./scroll.module.css";
// import style from "./ViewFarmer.module.css";
import "simplebar/src/simplebar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { landActions } from "../../store/landStore";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { AiOutlineCheck } from "react-icons/ai";

const Scroll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const availabelLeaseList = [];

  const { fullFarmer } = useSelector((state) => state.farmer);
  const { farmer_id } = useSelector((state) => state.farmer);

  fullFarmer.map((farmer) =>
    farmer.landDetails.map((land) => {
      console.log(land.category);
      if (
        land.category === "availableForLease" &&
        farmer_id !== land.farmerId
      ) {
        const data = {
          landid: land.landId,
          name: farmer.farmerDetails.farmerName,
          fathername: farmer.farmerDetails.fatherName,
          ownerid: land.ownerId,
          area: land.area,
          category: land.category,
          farmerid: farmer.farmerDetails.farmerId,
          village: farmer.farmerDetails.village,
        };
        availabelLeaseList.push(data);
        console.log("landdetails", availabelLeaseList);
      } else {
        return "";
      }
    })
  );

  const selectHandler = (id) => {
    console.log(id, "id");
    const selected = availabelLeaseList.filter(
      (landid) => landid.landid === id
    );

    console.log("selected", selected);
    dispatch(landActions.selectedRentalLand(selected));

    navigate("/selectlandpage");
  };

  const backHandler = () => {
    navigate("/land");
  };
  return (
    <Layout>
      <div className={classes.land}>
        <div className={classes.container}>
          <h1>Lands for Lease</h1>
          <SimpleBarReact
            autoHide={true}
            style={{ maxHeight: 400 }}
            className={classes.land}
          >
            <table border="1" className="table">
              <thead>
                <tr className="table-head-row">
                  <th>Name</th>
                  <th>Farmer Id</th>
                  <th>Land Id</th>
                  <th>Area</th>
                  <th>FatherName</th>
                  <th>Village</th>
                  <th>Select Land</th>
                </tr>
              </thead>
              {availabelLeaseList.map((land) => (
                <tbody key={land.landid}>
                  <tr key={land.landid}>
                    <td>{land.name}</td>
                    <td>{land.ownerid}</td>
                    <td>{land.landid}</td>
                    <td>{land.area}</td>
                    <td>{land.fathername}</td>
                    <td>{land.village}</td>

                    <td>
                      <AiOutlineCheck
                        size={20}
                        style={{ margin: "5px" }}
                        onClick={() => selectHandler(land.landid)}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </SimpleBarReact>
          <button onClick={backHandler}> Back</button>
        </div>
      </div>
    </Layout>
  );
};

export default Scroll;

// function App() {
//   return (

//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
