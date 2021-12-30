import "./App.css";
import React, { Component } from "react";

import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/image_link_form/ImageLinkForm";
import Rank from "./components/rank/Rank";
import Particles from "react-tsparticles";

const opt = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 500,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" id="tsparticles" options={opt} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
