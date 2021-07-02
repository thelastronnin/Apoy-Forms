import React from "react";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Form1 />
        </div>
      </>
    );
  }
}

export default App;
