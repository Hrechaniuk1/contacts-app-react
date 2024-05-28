import { configureStore } from "@reduxjs/toolkit";

import { filterReduser } from "./filtersSlice";
import { contactsReduser } from "./contactsSlice";


export const store = configureStore({
  reducer: {
    items: contactsReduser,
    name: filterReduser,
  }
});
