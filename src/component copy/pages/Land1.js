import React, { useState } from "react";
import axios from "axios";
import classes from "./land.module.css";
import { useEffect } from "react";
import LandTable from "./LandTable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { landActions } from "../../store/landStore";
import { useSelector } from "react-redux";
import { Action } from "@remix-run/router";
import Layout from "../Layout/Layout";

const Land = () => {
  const navigate = useNavigate();
  const farmerDetails = [
    {
      farmerDetails: {
        whatsappNumber: 9080344821,
        farmerId: "AIS0004",
        nickName: "Is",
        farmerName: "Aishu",
        age: 22,
        gender: "female",
        fatherName: "Aishu",
        phoneNumber: 9080344821,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: true,
        },
      ],
      machineDetails: [],
      landDetails: [
        {
          supervisorId: "AIS0004",
          ownerId: "JEY0001",
          category: "takenLease",
          landId: "JEY0001001",
          area: 102,
          addons: "None",
        },
      ],
      cropDetails: [
        {
          type: "aaaa",
          name: "bbbb",
          variety: "cccc",
          brand: "dddd",
          area: 102,
          croppedAt: "eeee",
          organic: true,
          seedingType: "eeee",
          harvestPeriod: "ffff",
        },
        {
          type: "aaaa",
          name: "bbbb",
          variety: "cccc",
          brand: "dddd",
          area: 102,
          croppedAt: "eeee",
          organic: true,
          seedingType: "eeee",
          harvestPeriod: "ffff",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "KRBL Limited",
          area: 100,
          croppedAt: "ee",
          organic: true,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "ASCDF",
          area: 100,
          croppedAt: "2023-02-25",
          organic: false,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "KBRL Limited",
          area: 102,
          croppedAt: "2023-01-05",
          organic: true,
          seedingType: "Seeded",
          harvestPeriod: "6 Months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "BRDL Limited",
          area: 12,
          croppedAt: "2023-01-17",
          organic: true,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
        {
          type: "Wetland",
          name: "Rice",
          variety: "Brown Rice",
          brand: "BRDL Limited",
          area: 12,
          croppedAt: "2023-01-17",
          organic: true,
          seedingType: "Planted",
          harvestPeriod: "6 months",
        },
      ],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 7654897654,
        farmerId: "JEY0001",
        nickName: "Hanish",
        farmerName: "Hanish Kumar",
        age: 11,
        gender: "Male",
        fatherName: "S",
        phoneNumber: 9212660591,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "pudhumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: true,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: true,
        },
      ],
      machineDetails: [],
      landDetails: [
        {
          supervisorId: "AIS0004",
          ownerId: "JEY0001",
          category: "leasedLand",
          addons: "None",
          landId: "JEY0001001",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001002",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          addons: "None",
          landId: "JEY0001003",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          addons: "None",
          landId: "JEY0001004",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          addons: "None",
          landId: "JEY0001005",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001006",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001007",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001008",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001009",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001010",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001011",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001012",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001013",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001014",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001015",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001016",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001017",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "JEY0001",
          category: "availableForLease",
          addons: "None",
          landId: "JEY0001018",
          area: 100,
        },
      ],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        whatsappNumber: 9878786756,
        farmerId: "MAH0006",
        nickName: "ma",
        farmerName: "Maha",
        age: 22,
        gender: "female",
        fatherName: "Maha",
        phoneNumber: 9878786756,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: false,
        },
      ],
      machineDetails: [],
      landDetails: [],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        whatsappNumber: 9790438091,
        farmerId: "NIS0005",
        nickName: "nishu",
        farmerName: "Nisha",
        age: 24,
        gender: "female",
        fatherName: "Nisha",
        phoneNumber: 9790438091,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: true,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: false,
        },
      ],
      machineDetails: [],
      landDetails: [],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        whatsappNumber: 9629772451,
        farmerId: "NIS0007",
        nickName: "ss",
        farmerName: "nish",
        age: 21,
        gender: "female",
        fatherName: "nish",
        phoneNumber: 9629772451,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: false,
        },
      ],
      machineDetails: [],
      landDetails: [
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007001",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "wasteLand",
          addons: "None",
          landId: "NIS0007002",
          area: 102,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007003",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007004",
          area: 100,
        },
        {
          supervisorId: "",
          ownerId: "NIS0007",
          category: "availableForLease",
          addons: "None",
          landId: "NIS0007005",
          area: 100,
        },
      ],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        residentialType: "Local",
        whatsappNumber: 7092660353,
        farmerId: "TES0002",
        nickName: "test2",
        farmerName: "test3",
        age: 11,
        gender: "Male",
        fatherName: "test3",
        phoneNumber: 7092669353,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "pudhumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: false,
        },
      ],
      machineDetails: [],
      landDetails: [],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
    {
      farmerDetails: {
        whatsappNumber: 9629772452,
        farmerId: "SWE0007",
        nickName: "swe",
        farmerName: "swetha",
        age: 22,
        gender: "female",
        fatherName: "swetha",
        phoneNumber: 9629772452,
        state: "Tamilnadu",
        district: "Ramanathapuram",
        union: "Mandapam",
        panchayat: "Pudumadam",
        village: "Ammapattinam",
        organic: false,
        singleSeed: false,
        altCrop: false,
        seedVariety: false,
        leaseOwnLand: false,
        farmRentedLand: false,
      },
      livestockDetails: [],
      labourDetails: [
        {
          landPlowing: false,
          weedRemoving: false,
          pesticideSpraying: false,
          handHarvesting: false,
          cropSpanking: false,
          pumpsetDuty: false,
          landCleaning: false,
          treeClimbing: false,
          paddySteaming: false,
          landPlowingWithTractor: false,
          fertilization: false,
        },
      ],
      machineDetails: [],
      landDetails: [
        {
          supervisorId: "",
          ownerId: "SWE0007",
          category: "ownFarming",
          addons: "None",
          landId: "SWE0007001",
          area: 123,
        },
        {
          supervisorId: "",
          ownerId: "SWE0007",
          category: "availableForLease",
          addons: "None",
          landId: "SWE0007002",
          area: 100,
        },
      ],
      cropDetails: [],
      gardenDetails: [],
      buyDetails: [],
      sellDetails: [],
    },
  ];

  const dispatch = useDispatch();
  const { landData } = useSelector((state) => state.land);
  console.log(landData, "landdetails");
  const availabelLeaseOwnerIdList = [];

  const availableLeaseLandIdList = [];
  const availableLeaseFarmers = [];
  const availabelLeaseList = {};

  const [area, setArea] = useState("");
  const [interestedFor, setInterestedFor] = useState("");
  const [table, setTable] = useState(false);
  // const [selectedFarming, setSelectedFarming] = useState("");
  const [update, setUpdate] = useState([]);
  const [addOns, setAddOns] = useState("None");
  const [supervisorID, setSupervisorID] = useState("");
  // const [wasteland, setWasteLand] = useState("");
  const [landId, setLandId] = useState("");
  const [list, setList] = useState([]);
  const [landid, setLandid] = useState();
  const leasedIdList = [];
  console.log(landId, landid);

  const [ownFarmingCheck, setOwnFarmingCheck] = useState(false);
  const [leasedLandCheck, setLeaseLandCheck] = useState(false);
  const [takenLeaseCheck, setTakenLeaseCheck] = useState(false);
  const [wasteLandCheck, setWasteLandCheck] = useState(false);
  const [availableForLeaseCheck, setAvailableForLeaseCheck] = useState(false);
  const [initial, setInitial] = useState(false);

  const farmingList = ["interestedToClean", "cleanupTOFarm", "None"];

  useEffect(() => {
    if (interestedFor == "") {
      setInitial(true);
      setOwnFarmingCheck(false);
      setWasteLandCheck(false);
      setLeaseLandCheck(false);
      setTakenLeaseCheck(false);
      setAvailableForLeaseCheck(false);
    } else if (interestedFor == "ownFarming") {
      setInitial(false);
      setOwnFarmingCheck(true);
      setWasteLandCheck(false);
      setLeaseLandCheck(false);
      setTakenLeaseCheck(false);
      setAvailableForLeaseCheck(false);
    } else if (interestedFor == "wasteLand") {
      setInitial(false);
      setOwnFarmingCheck(false);
      setWasteLandCheck(true);
      setLeaseLandCheck(false);
      setTakenLeaseCheck(false);
      setAvailableForLeaseCheck(false);
    } else if (interestedFor == "leasedLand") {
      setInitial(false);
      setOwnFarmingCheck(false);
      setWasteLandCheck(false);
      setTakenLeaseCheck(false);
      setAvailableForLeaseCheck(false);
      setLeaseLandCheck(true);
    } else if (interestedFor == "takenLease") {
      setInitial(false);
      setOwnFarmingCheck(false);
      setWasteLandCheck(false);
      setLeaseLandCheck(false);
      setAvailableForLeaseCheck(false);
      setTakenLeaseCheck(true);
    } else if (interestedFor == "availableForLease") {
      setInitial(false);
      setOwnFarmingCheck(false);
      setWasteLandCheck(false);
      setLeaseLandCheck(false);
      setTakenLeaseCheck(false);
      setAvailableForLeaseCheck(true);
    }
  }, [interestedFor]);

  const { leaseLands } = useSelector((state) => state.land);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(area, interestedFor, addOns, supervisorID);

    const userData = {
      farmerId: "JEY0002",
      area: 102,
      category: "availableForLease",
      addons: "None",
      supervisorId: "",
    };

    // await axios({
    //   url: "http://90b9-49-204-114-12.in.ngrok.io/land/create",

    //   method: "post",
    //   data: {
    //     landDetails: [
    //       {
    //         farmerId: "SWE0007",
    //         area: area,
    //         category: interestedFor,
    //         wasteland: wasteland,
    //         addons: addOns,
    //         supervisorId: supervisorID,
    //       },
    //     ],
    //   },
    //   // body: JSON.stringify(userData),
    //   // headers: {
    //   //   "content-type": "application/json",
    //   // },
    // })
    //   .then((response) => {
    //     console.log("res", response);

    // const data = [];
    // data.push(farmerLandDetails, userData);

    if (landData === "undefined") {
      dispatch(landActions.createLand([userData]));
    } else {
      dispatch(landActions.createLand([...landData, userData]));
    }

    // landDetails: [
    //       {
    //         farmerId: "SWE0007",
    //         area: area,
    //         category: interestedFor,
    //         wasteland: wasteland,
    //         addons: addOns,
    //         supervisorId: supervisorID,
    //       },
    //     ],

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    farmerDetails.map((farmer) => console.log(farmer, "fare"));

    navigate("/cropform");
  };
  useEffect(() => {
    if (interestedFor == "takenLease") {
      // await axios({
      //   url: "http://90b9-49-204-114-12.in.ngrok.io/land/rent",
      //   method: "post",
      //   data: {
      //     rentLandDetails: [
      //       {
      //         farmerId: "MAH0006",
      //         landId: landid,
      //         ownerId: supervisorID,
      //       },
      //     ],
      //   },
      // })
      //   .then((response) => {
      //     console.log("rentresponse", response);
      //   })
      //   .catch((error) => {
      //     console.log("rent error", error);
      //   });

      farmerDetails.map((farmer) => {
        // console.log("landdetails", farmer.landDetails);
        if (farmer.landDetails == []) {
          console.log("no land details area available");
        } else {
          farmerDetails.map((land) => {
            // console.log(
            // "land",
            land.landDetails.map((cat) => {
              // console.log("cat", cat.category);
              if (cat.category == "availableForLease") {
                // if (!availabelLeaseOwnerIdList.includes(cat.ownerId)) {
                // console.log("lis");
                // availabelLeaseOwnerIdList.push(cat.ownerId);
                const data = {
                  name: farmer.farmerDetails.farmerName,
                  fathername: farmer.farmerDetails.fatherName,
                  area: cat.area,
                  farmerid: cat.ownerId,
                  landid: cat.landId,
                };
                if (leaseLands === "undefined") {
                  dispatch(landActions.updateLeaseLands([data]));
                } else {
                  dispatch(landActions.updateLeaseLands([...leaseLands, data]));
                }
                console.log("leaseLands", leaseLands);
                console.log(
                  farmer.farmerDetails.farmerName,
                  farmer.farmerDetails.fatherName,
                  cat.area,
                  cat.ownerId,
                  cat.landId,
                  data,
                  "details"
                );

                if (!availableLeaseLandIdList.includes(cat.landId)) {
                  availabelLeaseOwnerIdList.push(cat.ownerId);
                  availableLeaseLandIdList.push(cat.landId);
                  const arr = availableLeaseLandIdList.filter(
                    (ids) => ids.slice(0, 3) == cat.landId.slice(0, 3)
                  );
                  console.log("arr", arr);
                  availabelLeaseList[cat.ownerId] = arr;
                }
                // console.log(
                //   "avail",
                //   availabelLeaseOwnerIdList,
                //   availableLeaseLandIdList,
                //   availabelLeaseList
                // );
                // }
              }
              // console.log(
              //   "availabelLeaseList",
              //   availabelLeaseOwnerIdList,
              //   availableLeaseLandIdList
              // );
            });
            // );
          });
        }
      });
    } else if (interestedFor == "") {
      farmerDetails.map((farmer) => {
        // console.log("landdetails", farmer.landDetails);
        if (farmer.landDetails == []) {
          console.log("no land details area available");
        } else {
          farmerDetails.map((land) => {
            // console.log(
            // "land",
            land.landDetails.map((cat) => {
              // console.log("cat", cat.category);
              if (cat.category == "availableForLease") {
                // if (!availabelLeaseOwnerIdList.includes(cat.ownerId)) {
                // console.log("lis");
                // availabelLeaseOwnerIdList.push(cat.ownerId);

                if (!availableLeaseLandIdList.includes(cat.landId)) {
                  availableLeaseFarmers.push(land);
                  availabelLeaseOwnerIdList.push(cat.ownerId);
                  availableLeaseLandIdList.push(cat.landId);
                  const arr = availableLeaseLandIdList.filter(
                    (ids) => ids.slice(0, 3) == cat.landId.slice(0, 3)
                  );
                  // console.log("arr", arr);
                  // console.log(availableLeaseFarmers, "table");
                  availabelLeaseList[cat.ownerId] = arr;
                }
                // console.log(
                //   "avail",
                //   availabelLeaseOwnerIdList,
                //   availableLeaseLandIdList,
                //   availabelLeaseList
                // );
                // }
              }
              // console.log(
              //   "availabelLeaseList",
              //   availabelLeaseOwnerIdList,
              //   availableLeaseLandIdList
              // );
            });
            // );
          });
        }
      });
    } else if (interestedFor == "takenLease") {
      console.log("yes");

      farmerDetails.map((farmer) => {
        // console.log("landdetails", farmer.landDetails);
        if (farmer.landDetails == []) {
          console.log("no land details area available");
        } else {
          farmerDetails.map((land) => {
            // console.log(
            // "land",
            land.landDetails.map((cat) => {
              // console.log("cat", cat.category);
              if (cat.category == "availableForLease") {
                // if (!availabelLeaseOwnerIdList.includes(cat.ownerId)) {
                // console.log("lis");
                // availabelLeaseOwnerIdList.push(cat.ownerId);

                if (!availableLeaseLandIdList.includes(cat.landId)) {
                  console.log(
                    farmer.farmerDetails.farmerName,
                    farmer.farmerDetails.fatherName,
                    land.area,
                    land.ownerId,
                    land.landId,
                    "details"
                  );
                  availabelLeaseOwnerIdList.push(cat.ownerId);
                  availableLeaseLandIdList.push(cat.landId);
                  const arr = availableLeaseLandIdList.filter(
                    (ids) => ids.slice(0, 3) == cat.landId.slice(0, 3)
                  );
                  console.log("arr", arr);
                  availabelLeaseList[cat.ownerId] = arr;
                }
                // console.log(
                //   "avail",
                //   availabelLeaseOwnerIdList,
                //   availableLeaseLandIdList,
                //   availabelLeaseList
                // );
                // }
              }
              // console.log(
              //   "availabelLeaseList",
              //   availabelLeaseOwnerIdList,
              //   availableLeaseLandIdList
              // );
            });
            // );
          });
        }
      });
    } else if (interestedFor == "leasedLand") {
      farmerDetails.map((farmer) => {
        console.log("leasedland", farmer.landDetails);
        farmer.landDetails.map((ids) => {
          console.log("id", ids.ownerId);
          if (ids.ownerId != "") {
            if (!leasedIdList.includes(ids.ownerId)) {
              leasedIdList.push(ids.ownerId);
            }
          }
          console.log("lease", leasedIdList);
        });
      });
    } else {
      console.log("no");
    }
  }, [interestedFor]);
  const selectedId = Object.entries(availabelLeaseList);

  useEffect(() => {
    if (!supervisorID == "") {
      selectedId.map((val) => {
        if (val[0] == supervisorID) {
          setList(val[1]);
        }
        // console.log("1234567890", val[0], val[1], list);
      });
    }
  }, [supervisorID]);
  console.log(list);

  const landHandler = () => {
    navigate("/selectland");
  };

  return (
    <Layout>
      <div className={classes.login}>
        <h1>Add Land</h1>
        {ownFarmingCheck && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                <option value="leasedLand"> leasedLand </option>
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>
            <div>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className={classes.submit}>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setSupervisorID(e.target.value)}
              >
                <option value="">supervisorId </option>
                {Object.keys(availabelLeaseList).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.next}>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setLandid(e.target.value)}
              >
                <option value="">land Id </option>
                {list.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}
        {leasedLandCheck && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                <option value="leasedLand"> leasedLand </option>
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>
            <div>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setSupervisorID(e.target.value)}
              >
                <option value="">supervisorId </option>
                {availabelLeaseOwnerIdList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setLandid(e.target.value)}
              >
                <option value="">land Id </option>
                {list.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}
        {wasteLandCheck && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                <option value="leasedLand"> leasedLand </option>
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>
            <div>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setSupervisorID(e.target.value)}
              >
                <option value="">supervisorId </option>
                {Object.keys(availabelLeaseList).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setLandId(e.target.value)}
              >
                <option value="">land Id </option>
                {list.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}
        {takenLeaseCheck && (
          <form>
            <div>
              <div>
                <select
                  placeholder="category"
                  value={interestedFor}
                  onChange={(e) => setInterestedFor(e.target.value)}
                >
                  <option value="choose"> category </option>
                  <option value="ownFarming"> ownFarming </option>
                  {/* <option value="leasedLand"> leasedLand </option> */}
                  <option value="wasteLand"> wasteLand </option>
                  <option value="takenLease"> takenLease </option>
                  <option value="availableForLease"> availableForLease </option>
                </select>
              </div>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setSupervisorID(e.target.value)}
              >
                <option value="">supervisorId </option>
                {Object.keys(availabelLeaseList).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div> */}
            <div>
              <button onClick={landHandler}>select land</button>
            </div>
            {/* <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setLandid(e.target.value)}
              >
                <option value="">land Id </option>
                {list.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div> */}
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}
        {availableForLeaseCheck && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                {/* <option value="leasedLand"> leasedLand </option> */}
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>
            <div>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setSupervisorID(e.target.value)}
              >
                <option value="">supervisorId </option>
                {Object.keys(availabelLeaseList).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                disabled
                name="states"
                id="states"
                onChange={(e) => setLandid(e.target.value)}
              >
                <option value="">land Id </option>
                {list.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}
        {initial && (
          <form>
            <div>
              <select
                placeholder="category"
                value={interestedFor}
                onChange={(e) => setInterestedFor(e.target.value)}
              >
                <option value="choose"> category </option>
                <option value="ownFarming"> ownFarming </option>
                {/* <option value="leasedLand"> leasedLand </option> */}
                <option value="wasteLand"> wasteLand </option>
                <option value="takenLease"> takenLease </option>
                <option value="availableForLease"> availableForLease </option>
              </select>
            </div>
            <div>
              <input
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                type="number"
              />
            </div>

            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setAddOns(e.target.value)}
              >
                <option value="">addOn </option>
                {farmingList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setSupervisorID(e.target.value)}
              >
                <option value="">supervisorId </option>
                {Object.keys(availabelLeaseList).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="states"
                id="states"
                onChange={(e) => setLandid(e.target.value)}
              >
                <option value="">land Id </option>
                {list.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button onClick={submitHandler}>submit</button>
            </div>
          </form>
        )}
        {/* {table && <LandTable />} */}
      </div>
    </Layout>
  );
};

export default Land;
