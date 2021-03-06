import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
        return { ...state, ..._.mapKeys(action.payload, 'id') };
    case "FETCH_TASK":
        return { ...state, [action.payload.id]: action.payload };
    case "CREATE_TASK":
        return { ...state, [action.payload.id]: action.payload };
    default:
        return state;
  }
};
