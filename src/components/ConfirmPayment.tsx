import React from "react";

const Confirm = ({ setRouter }: any) => {
  return (
    <>
      {" "}
      <section id="Confirm" style={{ paddingTop: "10em" }}>
        <div className="card p-5 mx-5*">
          <div className="my-5 px-5">
            <div className="d-flex justify-content-center">
              <div
                className="rounded-circle shadow d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#6FCF97"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>{" "}
              </div>
            </div>
            <h1 style={{ color: "#4E598C" }}>Purchase Completed</h1>
            <p className="w-75">
              Please check your email for details concerning this transaction
            </p>
            <a
              href="#"
              style={{ color: "#f2994a" }}
              onClick={(e) => setRouter("personal")}
            >
              Return Home
            </a>{" "}
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Confirm;
