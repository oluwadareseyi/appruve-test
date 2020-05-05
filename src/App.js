import React, { useState } from "react";
import "./App.scss";

/**
 * @function App
 * @returns {JSX.Element}
 */

const App = () => {
  return (
    <div data-test="app-component" className="App">
      <h1 className="plans-title">Select a plan</h1>
      <div className="plans-boxes">
        <div className="box gold">
          <div className="texts">
            <div className="title">Gold Plan</div>
            <div className="sub">
              Visualize your plans: Get real-time updates and a custom
              dashboard.
            </div>
            <button className=" button link">Subscribe</button>
          </div>
        </div>

        <div className="box vision silver">
          <div className="texts">
            <div className="title">Silver Plan</div>
            <div className="sub">
              Invite and collaborate with other managers.
            </div>
            <button className=" button link">Subscribe</button>
          </div>
        </div>

        <div className="box vision bronze">
          <div className="texts">
            <div className="title">Bronze Plan</div>
            <div className="sub">
              Assign tasks, update team cheet, track yur team's progress and
              more.
            </div>
            <button className=" button link">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
