import { configureStore } from "@reduxjs/toolkit";
import Childreducer from "./ChildrenSlice/childrenslice";
export const store = configureStore({
  reducer: {
    childdata: Childreducer,
  },
});
