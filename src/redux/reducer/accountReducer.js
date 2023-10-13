const INITIAL_STATE = {
  id: "",
  username: "",
  password: "",
  name: "",
  email: "",
  img: "",
};

export const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        password: action.payload.password,
        name: action.payload.name,
        email: action.payload.email,
        img: action.payload.img,
      };

    default:
      return state;
  }
};
