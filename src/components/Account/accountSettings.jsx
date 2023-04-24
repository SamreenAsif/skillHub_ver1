import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account.css"; // import custom CSS file

export default function Account() {
  return (
    <div id="details-view-wrapper">
      <div id="details-view">
        <div id="details-view-label">
          <h1 id="myAccountHead">MY ACCOUNT</h1>
        </div>
        <div id="my-account-info-wrapper">
          <div id="my-account-info">
            <div id="account-fields">
              <div className="account-field">
                <label className="label">USERNAME</label>
                <input type="text" className="input" value="Bloop" />
              </div>
              <div className="account-field">
                <label className="label">EMAIL</label>
                <input type="text" className="input" value="bloop@doop.com" />
              </div>
              <div className="account-field">
                <label className="label">CURRENT PASSWORD</label>
                <input
                  type="password"
                  className="input"
                  value="bloopiedoopiedoo"
                />
              </div>
              <div className="account-field">
                <label className="label">NEW PASSWORD</label>
                <input
                  type="password"
                  className="input"
                  value="bloopiedoopiedoo"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="save-options">
          <button id="cancel-btn" className="btn">
            Cancel
          </button>
          <button id="mySave-btn" className="btn">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
