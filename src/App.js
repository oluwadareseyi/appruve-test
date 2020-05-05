import React, { useState } from "react";
import "./App.scss";
import Modal from "./UI/Modal/Modal";
import { subscribe } from "./mockApi";

/**
 * @function App
 * @returns {JSX.Element}
 */

const App = () => {
  const [subscribeState, setSubscribeState] = useState(false);
  const [plan, setPlan] = useState("");
  const [error, setError] = useState(true);

  const setSubFalse = () => {
    setSubscribeState(false);
  };

  const callSubscribe = async (planName) => {
    const res = await subscribe();
    res && setPlan(planName);
    res && setSubscribeState(true);

    // !res && setError(true);
  };

  return (
    <div data-test="app-component" className="App">
      <Modal show={subscribeState} hide={setSubFalse}>
        {subscribeState && (
          <div className="modal-text">
            Successfully Subscribed to the {plan} plan
          </div>
        )}
        {error && <div className="modal-text error">An error occured</div>}
      </Modal>
      <h1 className="plans-title">Select a plan</h1>
      <div className="plans-boxes">
        <div className="box gold">
          <div className="texts">
            <div className="title">Gold Plan</div>
            <div className="sub">
              Visualize your plans: Get real-time updates and a custom
              dashboard.
            </div>
            <button
              onClick={() => callSubscribe("gold")}
              className=" button link"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="box vision silver">
          <div className="texts">
            <div className="title">Silver Plan</div>
            <div className="sub">
              Invite and collaborate with other managers.
            </div>
            <button
              onClick={() => callSubscribe("silver")}
              className=" button link"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="box vision bronze">
          <div className="texts">
            <div className="title">Bronze Plan</div>
            <div className="sub">
              Assign tasks, update team cheet, track yur team's progress and
              more.
            </div>
            <button
              onClick={() => callSubscribe("bronze")}
              className=" button link"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
