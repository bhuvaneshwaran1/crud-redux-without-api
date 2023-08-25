// employeeActions.js
export const addEmployee = (employee) => ({
  type: "ADD_EMPLOYEE",
  payload: employee
});

export const editEmployee = (employee) => ({
  type: "EDIT_EMPLOYEE",
  payload: employee
});

export const deleteEmployee = (id) => ({
  type: "DELETE_EMPLOYEE",
  payload: id
});
