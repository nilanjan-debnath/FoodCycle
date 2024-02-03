import React from "react";

function FeedBack() {
  return (
    <>
      <div class="px-1 py-2 my-2 text-center">
        <h1 class="display-5 fw-bold text-body-emphasis">
          Welcome to Feedback Page
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-1">Please provide your valuabale feedback</p>
        </div>
      </div>

      <div className="card feedback-container" style={{ width: "30rem" }}>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Please enter your name"
                style={{ width: "80%" }}
              />
            </div>
            <div className="mb-3">
              <label for="Email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                placeholder="Please Enter your valid email id"
                style={{ width: "80%" }}
              />
            </div>

            <div class="mb-3">
              <label for="Contact" class="form-label">
                Contact Number
              </label>
              <input
                type="text"
                class="form-control"
                id="Contact"
                placeholder="Please enter your 10 digit Mobile number"
                style={{ width: "80%" }}
              />
            </div>
            <div class="mb-3">
              <label for="Select" name="Select" class="form-label">
                How do you came to know about us?
              </label>
              <select
                id="Select"
                name="Select"
                class="form-select"
                style={{ width: "80%" }}
              >
                <option>Select from the following</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Relatives">Relatives</option>
                <option value="Friends">Friends</option>
                <option value="Blogs">Blogs</option>
                <option value="Newspapers">Newspapers</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="Check" />
              <label className="form-check-label" for="Check">
                Would you like to join out initiative?
              </label>
            </div>
            <div class="mb-3">
              <label for="Review" class="form-label">
                Please tell us about our service
              </label>
              <textarea type="text" class="form-control" id="Review" rows={4} />
            </div>

            <center>
              <button type="submit" class="btn btn-info">
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}
export default FeedBack;
