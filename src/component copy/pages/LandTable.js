import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./landtable.module.css";
// import Layout from "../Layout/Layout";
import instance from "./BaseURL";
import { landActions } from "../../store/landStore";
import SimpleBarReact from "simplebar-react";
import { AiTwotoneDelete } from "react-icons/ai";

const LandTable = () => {
  const dispatch = useDispatch();
  const { farmer_id } = useSelector((state) => state.farmer);
  const navigate = useNavigate();
  const { landData } = useSelector((state) => state.land);

  // const [land, setLand] = useState();

  var land = [];
  const removeHandler = async (id) => {
    landData.map((lands) => {
      if (lands.landId === id) {
        land = lands;
        console.log(land, id, "lands");
      }
    });
    console.log(land, id, "lands1");

    await instance({
      url: `/land/id/${land.landId}`,
      method: "delete",
      data: {
        farmerId: land.farmerId,
        landId: land.landId,
        ownerId: land.farmerId,
      },
    })
      .then((response) => {
        console.log("deleteresponse", response);
        console.log("delete", typeof land.landId);
        dispatch(landActions.deleteLand(land.landId));
        // navigate("/land");
      })
      .catch((error) => {
        console.log("deleteerror", error);
      });
  };
  const addHandler = () => {
    navigate("/land");
  };

  return (
    // <Layout>
    <div className={classes.land}>
      <h1 style={{ marginTop: "16rem" }}>Land Details</h1>
      {/* <button onClick={() => addHandler()}>Add Land</button> */}
      <div className={classes.container} style={{ marginTop: "14rem" }}>
        {/* <div className="remove-button"> */}

        {/* </div> */}
        <SimpleBarReact
          autoHide={true}
          style={{ maxHeight: 120 }}
          className={classes.land}
        >
          <table border="1" className="table">
            <thead>
              <tr className="table-head-row">
                <th>FarmerID</th>
                <th>LandID</th>
                <th>OnwerID</th>
                <th>Category</th>
                <th>SupervisorID</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {landData.map((land, ind) => (
                <tr className="table-head-row" key={ind}>
                  <td>{farmer_id}</td>
                  <td> {land.landId} </td>
                  <td>{land.farmerId}</td>
                  <td>{land.category}</td>
                  <td>{land.supervisorId}</td>
                  <td>
                    <AiTwotoneDelete
                      size={15}
                      style={{ margin: "5px" }}
                      onClick={() => removeHandler(land.landId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SimpleBarReact>
      </div>
    </div>
  );
};

export default LandTable;
