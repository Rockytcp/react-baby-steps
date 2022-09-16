import React from "react";

export class NocturneMode extends React.Component {
  render() {
    const nocturneModeButton = (
      <div>
        <button className="nocturne-mode-button" onClick={this.toggleDarkMode}>
          Modo Noturno
        </button>
      </div>
    );
    return nocturneModeButton;
  }

  toggleDarkMode() {
    console.log("CLICOU");
    const fisrtBar = document.getElementById("first-bar");
    const textHeader = document.getElementById("text-header");
    textHeader.classList.toggle("text-header-dark-mode");
    fisrtBar.classList.toggle("first-bar-dark-mode");
    document.body.classList.toggle("dark-mode");
  }
}
export default NocturneMode;
