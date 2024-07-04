import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILED, FETCH_USER_DATA } from "./type";

const initialState = {
    users: [],
    loading: false,
    error: null
  };
  
  const UserReducer = (state = initialState, action) => {
    console.log("state",state);
    console.log("actions",action);
    switch (action.type) {
      case FETCH_USER_DATA:
            return {
                ...state,
                loading: true,
                error: null,
            };
      case FETCH_USER_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload
        };
      case FETCH_USER_DATA_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
          users:[]
        };
      default:
        return state;
    }
  };
  const rootReducer = UserReducer
  export default rootReducer;
  