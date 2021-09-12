import React from "react";
import Navbar from "./Navbar";
import "./ThankYouPage.css";
import { Link } from "react-router-dom";

function ThankyouPage() {
  return (
    <>
      <Navbar />
      <div className="ThankYouPage">
        <div className="ThankYouPage__container">
          <div className="row">
            <div className="col">
              <h1>Thank you!</h1>
              <h2>Your order has been sent for review!</h2>
              <h2>Find your tracking progress below</h2>
              <Link to="/home">
                <button type="button" href="#">
                  Back to home page
                </button>
              </Link>
            </div>
            <div className="col">
              <div className="card card1">
                <h5>STEP 1</h5>
                <h6>Order sent for Review!</h6>
              </div>
              <div className="card card2">
                <h5>STEP 2</h5>
                <h6>Badge in shipment!</h6>
              </div>
              <div className="card card3">
                <h5>STEP 3</h5>
                <h6>Badge is route!</h6>
              </div>
              <div className="card card4">
                <h5>STEP 4</h5>
                <h6>Badge arrived!</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankyouPage;
