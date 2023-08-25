// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import EmployeeComponent from "./EmployeeComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EmployeeComponent />
      </div>
    </Provider>
  );
}

export default App;
