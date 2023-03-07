import { createSlice } from "@reduxjs/toolkit";

export const labourSlice = createSlice({
  name: "labour",
  initialState: {
    labourWork: [],
    labourData: [],
    labourEditData: [],
  },
  reducers: {
    add_labour_work(state, action){
state.labourWork = action.payload
    },
    create_labour(state, action) {
      state.labourData = action.payload
    },
    labour_edit_data(state, action){
      state.labourEditData = action.payload;
    }
  },
});

export const labourActions = labourSlice.actions;

export default labourSlice.reducer;

