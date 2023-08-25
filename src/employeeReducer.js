// employeeReducer.js
const initialState = [];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.payload];

    case "EDIT_EMPLOYEE":
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );

    case "DELETE_EMPLOYEE":
      return state.filter((employee) => employee.id !== action.payload);

    default:
      return state;
  }
};

export default employeeReducer;
