//initial state of application
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  weekly: null,
  //remove after development
  //token:
  //"BQB7nWSypheZvde4RA64nnh0JPHSQzBUAdKBLS5WrX18XK0AFsU_Ujk_dUQbwI2gIP91hkSyarsBSNtP2PSsjO85GI4PvOIQCY3yVkcRSVWtWDKlNAo4k5o4aHOkRW-ytIJvoVQw-vt3M2Tr6dDCa5jvu5MS8dMLbC1Nny93YvFSYO3bdIA5",
};

const reducer = (state, action) => {
  //reducer just sits and listens to actions
  //action has a type and data(payload)
  console.log(action);
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state, //keep whatever is in the current state(Don't overwrite)
        user: action.user,
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_PLAYLISTS": {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case "SET_DISCOVER_WEEKLY": {
      return {
        ...state,
        weekly: action.weekly,
      };
    }
    default:
      return state;
  }
};

export default reducer;
