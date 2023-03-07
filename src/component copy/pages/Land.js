import React, { useState } from "react";
import classes from "./land.module.css";
import { useEffect } from "react";
import LandTable from "./LandTable";
import instance from "./BaseURL";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { landActions } from "../../store/landStore";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { farmerActions } from "../../store/reducer";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

// import AvailableLeaseTable from "./AvailableLeaseTable";

const Land = () => {
  const navigate = useNavigate();
  // const farmerDetails = [];

  const dispatch = useDispatch();
  const { landData } = useSelector((state) => state.land);
  const { farmer_id } = useSelector((state) => state.farmer);
  // console.log(landData, "landdetails");
  const [area, setArea] = useState("");
  const [interestedFor, setInterestedFor] = useState("");
  const [addOns, setAddOns] = useState("None");
  const [supervisorID, setSupervisorID] = useState("");
  const [landId, setLandId] = useState("");
  const { selectedLand } = useSelector((state) => state.land);
  // console.log(("selectedland", selectedLand));
  const { isFarmerEdit } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const farmingList = ["interestedToClean", "cleanupTOFarm", "None"];
  //check
  const [ownFarmingCheck, setOwnFarmingCheck] = useState(false);
  const [takenLeaseCheck, setTakenLeaseCheck] = useState(false);
  const [error, setError] = useState(false);
  const [table, setTable] = useState(false);
  const [apiError, setApiError] = useState("");
  const [click, setClick] = useState(false);
  // const [initial, setInitial] = useState(false);

  useEffect(() => {
    console.log("yes", landData);
    if (landData.length === 0) {
      console.log(table, "empty");
      setTable(false);
    } else {
      setTable(true);
      console.log(table, "data");
    }
    if (click && (interestedFor.trim() || addOns.trim() || area.trim()) == "") {
      setError(true);
    } else if (
      click &&
      (interestedFor.trim() && addOns.trim() && area.trim()) !== ""
    ) {
      setError(false);
    }
  }, [landData, error, interestedFor, addOns, area]);

  useEffect(() => {
    instance
      .get(`/farmer/all`)
      .then((response) => {
        dispatch(farmerActions.farmerAll(response.data));
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
  // console.log("interestedfor", interestedFor);
  // useEffect(() => {
  const categoryHandler = (e) => {
    setInterestedFor(e.target.value);
    if (interestedFor === "") {
      setOwnFarmingCheck(false);
      setTakenLeaseCheck(false);
    } else if (
      interestedFor === "ownFarming" ||
      interestedFor === "availableForLease" ||
      interestedFor === "wasteLand"
    ) {
      setOwnFarmingCheck(true);
      setTakenLeaseCheck(false);
    } else if (interestedFor === "takenLease") {
      setOwnFarmingCheck(false);
      setTakenLeaseCheck(true);
    }
  };

  // }, [interestedFor]);

  // console.log("farmerid", farmer_id);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(area, interestedFor, addOns, supervisorID);
    setClick(true);
    await instance({
      url: "/land/create",
      method: "post",
      data: {
        landDetails: [
          {
            farmerId: farmer_id,
            // farmerId: "SWE0004",
            area: area,
            category: interestedFor,
            addons: addOns,
            supervisorId: farmer_id,
          },
        ],
      },
    })
      .then((response) => {
        console.log("res", response.data);

        //DISPATCH TO LANDdATA
        const userData = {
          farmerId: farmer_id,
          landId: response.data.landId,
          area: area,
          category: interestedFor,
          addons: addOns,
          ownerId: farmer_id,
          supervisorId: farmer_id,
        };
        dispatch(landActions.createLand(userData));
        if (isFarmerEdit) {
          navigate("/editland");
        }
        setError(false);
        setArea("");
        setSupervisorID("");
        setAddOns("no");
        setInterestedFor("");
        setLandId("");
        setTable(true);
        setClick(false);
      })
      .catch((error) => {
        console.log("err", error);
        setError(true);
        setApiError(error.response.data);
      });
  };

  if (loading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  const landHandler = () => {
    instance
      .get(`/farmer/all`)
      .then((response) => {
        dispatch(farmerActions.farmerAll(response.data));
        setLoading(false);
        // setInterestedFor("takenLease");
        navigate("/selectlandtable");
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
  };
  const categoryList = [
    "ownFarming",
    "wasteLand",
    "takenLease",
    "availableForLease",
  ];

  return (
    // <Layout>

    <div className={classes.container} style={{ marginLeft: "2rem" }}>
      <div className={classes.login}>
        <form>
          <h1>Add Land</h1>
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={categoryList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <label style={{ display: "table-cell" }}>*Category: </label>
            <span>
              <select
                type="text"
                placeholder="category"
                value={interestedFor}
                // onChange={(e) => setInterestedFor(e.target.value)}
                onChange={categoryHandler}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takeLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </span>
          </div>

          {takenLeaseCheck && (
            <div>
              <button type="button" onClick={landHandler}>
                select land
              </button>
            </div>
          )}

          <div>
            <label>*Area:</label>
            <span>
              <input
                placeholder="Area in sq.ft"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </span>
          </div>

          <div>
            <label>*AddOns:</label>
            <span>
              <select
                type="text"
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="no">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </span>
          </div>

          <div>
            <label>SupervisorID: </label>

            {ownFarmingCheck ? (
              <span>
                {" "}
                <input
                  disabled
                  type="text"
                  placeholder="supervisorID"
                  value={supervisorID}
                  onChange={(e) => setSupervisorID(e.target.value)}
                />
              </span>
            ) : (
              <span>
                {" "}
                <input
                  type="text"
                  placeholder="supervisorID"
                  value={supervisorID}
                  onChange={(e) => setSupervisorID(e.target.value)}
                />
              </span>
            )}
          </div>
          <div>
            <label>LandID: </label>
            {!ownFarmingCheck ? (
              <span>
                <input
                  type="text"
                  placeholder="landID"
                  value={landId}
                  onChange={(e) => setLandId(e.target.value)}
                />
              </span>
            ) : (
              <span>
                <input
                  disabled
                  type="text"
                  placeholder="landID"
                  value={landId}
                  onChange={(e) => setLandId(e.target.value)}
                />
              </span>
            )}
          </div>
          <div>
            <button onClick={submitHandler}>SUBMIT</button>
            {error && <p>Please Fill Required Details</p>}
            {/* {error && <p>{apiError}</p>} */}
          </div>
        </form>
      </div>
    </div>
    // {table && !isFarmerEdit && <LandTable />}
    // </Layout>
  );
};

export default Land;
