import React from "react";
import mastercard from "../assets/mastercard.jpg";
import paypal from "../assets/paypal.jpg";
import upi from "../assets/upi.jpg";
import styles from "./css/Payment.module.css";

function Payments() {
  return (
    <>
      <div className={styles.paymentPageContainer}>
        <center>
          <h3> Payment Gateway</h3>
        </center>
        <div
          className={`card ${styles.pay_container}`}
          style={{ width: "50rem", height: "35rem" }}
        >
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="amount" class="form-label">
                  Enter amount
                </label>
                <input type="text" class="form-control" id="amount" />
              </div>
              <div className={styles.payMethod}>
                <div class="mb-3" className={styles.payTypeDiv}>
                  <label for="paymentType" class="form-label">
                    How would you like to pay?
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.payTypeInput}`}
                    id="paymentType"
                  />
                </div>
                <div class="mb-3" className={styles.payImgContainer}>
                  <img src={paypal} className={styles.payImg}></img>
                </div>
                <div class="mb-3" className={styles.payImgContainer}>
                  <img src={upi} className={styles.payImg}></img>
                </div>
                <div class="mb-3" className={styles.payImgContainer}>
                  <img src={mastercard} className={styles.payImg}></img>
                </div>
              </div>

              <div>Fill up your personal information</div>

              <div className={styles.personal}>
                <div class="mb-3">
                  <input
                    type="text"
                    className={`form-control ${styles.inpFirst}`}
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    className={`form-control ${styles.inpLast}`}
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  className={`form-control ${styles.inp_email}`}
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  className={`form-control ${styles.inp_cardno}`}
                  id="cardNumber"
                  placeholder="Card Number"
                />
              </div>
              <div className={styles.personal1}>
                <div class="mb-3">
                  <input
                    type="text"
                    className={`form-control ${styles.personal1_child_1}`}
                    id="expDate"
                    placeholder="Expiration Date"
                  />
                </div>
                <div class={`mb-3 ${styles.div_2_3}`}>
                  <input
                    type="text"
                    className={`form-control ${styles.personal1_child_2_3}`}
                    id="CVC"
                    placeholder="CVC"
                  />
                </div>
                <div class={`mb-3 ${styles.div_2_3}`}>
                  <input
                    type="text"
                    className={`form-control ${styles.personal1_child_2_3}`}
                    id="ZIP"
                    placeholder="ZIP"
                  />
                </div>
              </div>

              <center>
                <button type="submit" class="btn btn-primary">
                  Pay
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Payments;
