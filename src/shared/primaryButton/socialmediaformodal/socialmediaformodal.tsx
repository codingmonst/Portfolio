import React from "react";
import { urls } from "../../../constants/social-links";
import openInNewTab from "../openinnewtab/openInNewTab";

const Socialmediaformodal = () => {
  return (
    <React.Fragment>
      <div className="modalContactDetails">
        <div className="contactInfo">
          <div className="contacts">
            <h1>seg.ghazarian@gmail.com</h1>
            <div className="contactButtons">
              <button
                onClick={() => {
                  openInNewTab(urls[1].link);
                }}
              >
                GITHUB
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modalContactDetailsLine" />
      <p className="modalContactDetailsRights">© 2025. All rights reserved.</p>
    </React.Fragment>
  );
};

export default Socialmediaformodal;
