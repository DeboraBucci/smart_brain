import "./App.css";
import React, { Component } from "react";

import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/image_link_form/ImageLinkForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
