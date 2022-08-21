import React, { useEffect, useState } from "react";

const Billing = ({ setRouter }: any) => {
  const [section, setSection] = useState<string>("billing");
  const [card, setCard] = useState("");

  useEffect(() => {}, [card]);

  const billing = (e: any) => {
    e.preventDefault();

    setSection("pay");
  };

  return (
    <>
      {section === "billing" && (
        <section id="Billing">
          <form onSubmit={billing}>
            <div className="mb-5">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Card Type<span className="text-danger">*</span>
              </label>
              <select
                required
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">Visa</option>
                <option value="2">Master</option>
                <option value="3">American Express</option>
              </select>
            </div>
            <div className="mb-5 row">
              <div className="col-md-6">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Card Details <span className="text-danger">*</span>
                </label>
                <input
                  required
                  onChange={(e) => {
                    if (e.target.value.length <= 19) {
                      setCard(
                        e.target.value
                          .replace(/\W/gi, "")
                          .replace(/(.{4})/g, "$1 ")
                      );
                    }
                  }}
                  value={card}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Expiry date <span className="text-danger">*</span>
                </label>
                <div className="d-flex justify-content-start position-relative align-items-center">
                  <div className="position-relative">
                    <input
                      required
                      className="form-control border-end-0 rounded-0 rounded-start"
                      type="text"
                      name="month"
                      placeholder="MM"
                      maxLength={2}
                      size={2}
                    />
                  </div>
                  <span
                    className="position-absolute"
                    style={{ zIndex: "99", right: "7em" }}
                  >
                    /
                  </span>
                  <div className="position-relative" style={{ right: "6px" }}>
                    <input
                      required
                      className="form-control border-start-0 rounded-0 rounded-end"
                      type="text"
                      name="year"
                      placeholder="YY"
                      maxLength={2}
                      size={2}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  CVV<span className="text-danger">*</span>
                </label>
                <input
                  maxLength={3}
                  required
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>

            <div className="d-grid gap-5 d-md-flex pt-5 pb-5">
              <button className="btn btn-primary px-5" type="submit">
                Next
              </button>
              <a href="#" className="text-decoration-none">
                Cancel Payment{" "}
              </a>
            </div>
          </form>
        </section>
      )}

      {section === "pay" && (
        <section id="pay">
          <div
            className="card shadow"
            style={{ borderRadius: "16px 10px 0px 0px" }}
          >
            <div className="d-flex justify-content-between align-items-center bg-primary rounded-top px-5 py-2  text-white">
              <p className="mt-3">Item Name</p>
              <p className="mt-3">Price</p>
            </div>

            <div className="d-flex justify-content-between align-items-center px-5 pt-4 mt-2">
              <p className="col-md-6*">Data science and usability</p>
              <p className="col-md-6*">50,000.00</p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-5 pt-3">
              <p className="col-md-6*">Shipping</p>
              <p className="col-md-6*">0.00</p>
            </div>
            <div className="px-4 pb-5">
              <hr />
              <div className="d-flex justify-content-between align-items-center mt-4 pt-2 px-3  border">
                <p className="col-md-6*">Total</p>
                <p className="col-md-6*">50,000.00</p>
              </div>
            </div>
          </div>
          <div className="d-grid gap-5 d-md-flex pt-5 pb-5">
            <button
              className="btn btn-primary px-5"
              type="button"
              onClick={() => setRouter("confirm")}
            >
              Pay
            </button>
            <a href="#" className="text-decoration-none">
              Cancel Payment{" "}
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default Billing;
