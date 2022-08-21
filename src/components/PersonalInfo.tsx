import React, { useState } from "react";

const Personal = ({ setRouter }: any) => {
  const [personal, setPersonal] = useState<object>({
    name: "",
    email: "",
    addressOne: "",
    addressTwo: "",
    local: "",
    state: "",
  });

  const submit = (e: any) => {
    e.preventDefault();
    setRouter("billing");
  };

  return (
    <>
      <section id="personal">
        <form onSubmit={submit}>
          <div className="mb-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              required
              onChange={(e) =>
                setPersonal({ ...personal, name: e.target.value })
              }
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email Address <span className="text-danger">*</span> <br />
              <small className="text-secondary">
                The purchase receipt would be sent to this address
              </small>
            </label>

            <input
              required
              onChange={(e) =>
                setPersonal({ ...personal, email: e.target.value })
              }
              type="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address 1{" "}
            </label>
            <input
              required
              onChange={(e) =>
                setPersonal({ ...personal, addressOne: e.target.value })
              }
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address 2
            </label>
            <input
              onChange={(e) =>
                setPersonal({ ...personal, addressTwo: e.target.value })
              }
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="row ">
            <div className="col-md-6">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Local Government{" "}
              </label>
              <input
                required
                onChange={(e) =>
                  setPersonal({ ...personal, local: e.target.value })
                }
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="exampleInputPassword1" className="form-label">
                State{" "}
              </label>
              <select
                required
                className="form-select"
                aria-label="Default select example"
                onChange={(e) =>
                  setPersonal({ ...personal, state: e.target.value })
                }
              >
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
              </select>
            </div>
          </div>
          <div className="d-grid gap-5 d-md-flex align-items-center pt-5 pb-5">
            <button className="btn  px-5" type="submit">
              Next{" "}
            </button>
            <a href="#" className="text-decoration-none">
              Cancel Payment{" "}
            </a>
          </div>{" "}
        </form>
      </section>
    </>
  );
};

export default Personal;
