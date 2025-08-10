import type { Activity } from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: { newActivity: Activity };
};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "save-activity") {
    //Este código maneja la logica para actualizar el estado
    //con una nueva actividad.
    console.log(action.payload.newActivity);
  }
  return {
    ...state, //retorna el estado anterior
    activities: [...state.activities, action.payload.newActivity], //agrega la nueva actividad al estado
  };
};
