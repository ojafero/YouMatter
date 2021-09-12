import React from "react";
import Navbar from "./Navbar";
import "./OrdersPage.css";

function OrdersPage() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="title">Place your Order</div>
        <div class="subtitle">
          Insert your details and upload the necessary documents to proceed to
          the next step!
        </div>
        <div class="detailsa">*Necessary Details</div>
        <div class="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Name *</span>
                <input type="text" placeholder="FIRST NAME" required />
              </div>
              <div class="input-box">
                <span class="details">Last name *</span>
                <input type="text" placeholder="LAST NAME" required />
              </div>
              <div class="input-box">
                <span class="details">Date of Birth *</span>
                <input type="date" required />
              </div>
              <div class="input-box">
                <span class="details">E-mail *</span>
                <input
                  type="text"
                  placeholder="Enter your e-mail address"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Gender *</span>
                <input type="text" placeholder="Enter your gender" required />
              </div>
              <div class="input-box">
                <span class="details">Phone number</span>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div class="user-location">
              <div class="input-data">
                <span class="datalocal">Address</span>
                <input
                  type="text"
                  placeholder="Street Address Line 1"
                  required
                />
              </div>
              <div class="input-data">
                <input
                  type="text"
                  placeholder="Street Address Line 2"
                  required
                />
              </div>
            </div>
            <div class="user-ubication">
              <div class="input-ub">
                <span class="">Country *</span>
                <input type="text" placeholder="Enter Country" required />
              </div>
              <div class="input-ub">
                <span class="dataub">City *</span>
                <input type="text" placeholder="Enter City" required />
              </div>
              <div class="input-ub">
                <span class="dataub">State *</span>
                <input type="text" placeholder="Enter State" required />
              </div>
            </div>
            <div class="user-location">
              <div class="input-data">
                <span class="datalocal">Documentation</span>
                <input
                  type="text"
                  placeholder="Upload all documents here for verification"
                  required
                />
              </div>
            </div>
            <div class="button">
              <input type="submit" value="SUBMIT!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
