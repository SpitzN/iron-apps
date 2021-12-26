import React from "react";
import "./App.module.css";
import { useAppSelector } from "./app/hooks";
import IronForm from "./Components/IronApps/IronForm";
import IronApps from "./Components/IronApps/IronApps";

function App() {
  const isFormValid = useAppSelector((state) => state.form.isValid);
  return (
    <div className="App">
      <header className="App-header">
        <h1>IRON APPS</h1>
      </header>
      {!isFormValid && <IronForm />}
      {isFormValid && <IronApps />}
    </div>
  );
}

export default App;
