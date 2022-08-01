const initialState = {
  active: false,
};

export const modalReducer = (state = initialState, action: any) => {
  if (action.type === "openModal") {
    return action.payload;
  }
  return state;
};
