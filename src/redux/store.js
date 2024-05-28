import { configureStore } from "@reduxjs/toolkit";

import { filterReduser } from "./filter/slice";
import { contactsReduser } from "./contacts/slice";
import { authReduser } from "./auth/slice";


export const store = configureStore({
  reducer: {
    auth: authReduser,
    items: contactsReduser,
    name: filterReduser,
  }
});
