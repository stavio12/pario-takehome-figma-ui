import React from "react";

const Header = ({ setRouter, router }: any) => {
  return (
    <>
      <header id="Header" className="pt-5 mt-5 pb-5">
        <h1 style={{ color: "#4E598C" }}>Complete your Purchase</h1>
        <div className="d-flex justify-content-evenly align-items-center border-bottom pt-5 route-nav">
          <div className="position-relative">
            <p
              className={router === "personal" ? "route-active" : ""}
              style={{ cursor: "pointer" }}
              onClick={() => setRouter("personal")}
            >
              Personal Info
            </p>
            <span
              className={
                router === "personal" ? "active position-absolute d-block" : ""
              }
            ></span>{" "}
          </div>
          <div className="position-relative">
            <p
              className={router === "billing" ? "route-active" : ""}
              style={{ cursor: "pointer" }}
              onClick={() => setRouter("billing")}
            >
              Billing Info
            </p>
            <span
              className={
                router === "billing" ? "active position-absolute d-block" : ""
              }
            ></span>{" "}
          </div>
          <div className="position-relative">
            <p
              className={router === "confirm" ? "route-active" : ""}
              style={{ cursor: "pointer" }}
              onClick={() => setRouter("confirm")}
            >
              Confirm Payment
            </p>
            <span
              className={
                router === "confirm" ? "active position-absolute d-block" : ""
              }
            ></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
