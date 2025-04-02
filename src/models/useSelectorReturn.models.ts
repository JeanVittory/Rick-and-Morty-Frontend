import { reduxStore } from "../redux/store";

export type rootStateFromRedux = ReturnType<typeof reduxStore.getState>;
