import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Personal from "./components/PersonalInfo";
import Billing from "./components/BillingInfo";
import Confirm from "./components/ConfirmPayment";

function App() {
  const [router, setRouter] = useState<string>("personal");

  useEffect(() => {}, [router]);
  return (
    <main className="position-relative">
      {/* <div className="skew-gradient"></div> */}

      <div className="skew-gradient position-absolute"></div>

      <div className="container d-flex justify-content-center">
        <div className="position-absolute pt-5 custom-container">
          {router !== "confirm" && (
            <Header setRouter={setRouter} router={router} />
          )}{" "}
          {router === "personal" && <Personal setRouter={setRouter} />}
          {router === "billing" && <Billing setRouter={setRouter} />}
          {router === "confirm" && <Confirm setRouter={setRouter} />}
        </div>
      </div>
    </main>
  );
}

export default App;
