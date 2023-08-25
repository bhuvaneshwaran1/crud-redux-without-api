// EmployeeComponent.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, editEmployee, deleteEmployee } from './employeeActions';

const EmployeeComponent = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    designation: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      dispatch(editEmployee(formData));
    } else {
      const newEmployee = { ...formData, id: Date.now() };
      dispatch(addEmployee(newEmployee));
    }
    setFormData({ id: '', name: '', designation: '' });
  };

  const handleEdit = (employee) => {
    setFormData(employee);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div>
      <h2>Employee Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleInputChange}
          placeholder="Designation"
        />
        <button type="submit">Save</button>
      </form>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.designation}
            <button onClick={() => handleEdit(employee)}>Edit</button>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeComponent;
