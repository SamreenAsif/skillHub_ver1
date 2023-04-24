import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./editProfile.css"; // import custom CSS file
import "./Profile.css";
export default function Profile() {
  const [profilePicture, setProfilePicture] = useState(
    // "images/advertisement/instructor-2x-v3.jpeg"
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkH6AvjoEnkfYmfOZx18UtMdRuohE51DsDYw&usqp=CAU"

  );
  const [inputs, setInputs] = useState({});

  const handleChangeProfilePicture = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setProfilePicture(imageUrl);
  };
  const handleSave = () => {
    // code to save the profile picture goes here
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
  <>
  
    <div className="profile-container">
      <div className="row mt-1">
        <div className="col-12 banner-container">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle mt-5 profile-picture"
              width="140px"
              src={profilePicture}
              alt="Profile"
            />
            <div className="username_email">
              <span className="font-weight-bold d-block">
                {inputs.firstname + " " + inputs.lastname}
              </span>
              <span className="font-weight-bold d-block">{inputs.email}</span>
            </div>
            <label htmlFor="upload-input" class="custom-file-upload">
              <input
                id="upload-input"
                type="file"
                accept="image/*"
                onChange={handleChangeProfilePicture}
              />
              Upload Image
            </label>
          </div>
        </div>
        <div className="col-12 mt-5">
          <div className="">
            <div className="">
              <h4 className="heading">Profile & Settings</h4>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlhtmlFor="firstName" className="labels profile-labels">
                  Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="htmlForm-control"
                  id="firstName"
                  placeholder="first name"
                  value={inputs.firstname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlhtmlFor="lastname" className="labels profile-labels">
                  Last Name
                </label>
                <input
                  name="lastname"
                  type="text"
                  className="htmlForm-control"
                  id="lastname"
                  placeholder="Last Name"
                  value={inputs.lastname || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-6">
                <label htmlhtmlFor="headline" className="labels profile-labels">
                  Headline
                </label>
                <input
                  type="tel"
                  className="htmlForm-control"
                  id="headline"
                  name="headline"
                  placeholder="Instructor at SkillHub"
                  value={inputs.headline || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlhtmlFor="email" className="labels profile-labels">
                  Email Address
                </label>
                <input
                  type="email"
                  className="htmlForm-control"
                  id="headline"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-6">
                <div className="ud-htmlForm-group">
                  <label
                    htmlhtmlFor="u301-htmlForm-group--18"
                    className="ud-htmlForm-label ud-heading-sm profile-labels"
                  >
                    Twitter
                  </label>
                  <div className="text-input-with-addons--with-addons--1byxB">
                    <div className="ud-text-input-container">
                      <div className="basic-info--social-url-prefix--2Mkpv text-input-with-addons--addon--1dOJH">
                        http://www.twitter.com/
                      </div>
                      <input
                        aria-invalid="false"
                        name="twitterProfile"
                        data-purpose="edit-profile-twitter"
                        placeholder="Username"
                        maxLength="128"
                        id="u301-htmlForm-group--18"
                        type="text"
                        className="ud-text-input ud-text-input-large ud-text-md"
                        value={inputs.twitterProfile || ""}
                        onChange={handleChange}
                      />
                      <div className="ud-text-input-box"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ud-htmlForm-group">
                  <label
                    htmlhtmlFor="u301-htmlForm-group--18"
                    className="ud-htmlForm-label ud-heading-sm profile-labels"
                  >
                    Facebook
                  </label>
                  <div className="text-input-with-addons--with-addons--1byxB">
                    <div className="ud-text-input-container">
                      <div className="basic-info--social-url-prefix--2Mkpv text-input-with-addons--addon--1dOJH">
                        http://www.facebook.com/
                      </div>
                      <input
                        aria-invalid="false"
                        name="facebookProfile"
                        data-purpose="edit-profile-facebook"
                        placeholder="Username"
                        maxLength="128"
                        id="u301-htmlForm-group--18"
                        type="text"
                        className="ud-text-input ud-text-input-large ud-text-md"
                        value={inputs.facebookProfile || ""}
                        onChange={handleChange}
                      />
                      <div className="ud-text-input-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-6">
                <div className="ud-htmlForm-group">
                  <label
                    htmlhtmlFor="u301-htmlForm-group--18"
                    className="ud-htmlForm-label ud-heading-sm profile-labels"
                  >
                    LinkedIn
                  </label>
                  <div className="text-input-with-addons--with-addons--1byxB">
                    <div className="ud-text-input-container">
                      <div className="basic-info--social-url-prefix--2Mkpv text-input-with-addons--addon--1dOJH">
                        http://www.linkedin.com/
                      </div>
                      <input
                        aria-invalid="false"
                        name="linkedinProfile"
                        data-purpose="edit-profile-linkedin"
                        placeholder="Resource ID"
                        maxLength="128"
                        id="u301-htmlForm-group--18"
                        type="text"
                        className="ud-text-input ud-text-input-large ud-text-md"
                        value={inputs.linkedinProfile || ""}
                        onChange={handleChange}
                      />
                      <div className="ud-text-input-box"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ud-htmlForm-group">
                  <label
                    htmlhtmlFor="u301-htmlForm-group--18"
                    className="ud-htmlForm-label ud-heading-sm profile-labels"
                  >
                    Youtube
                  </label>
                  <div className="text-input-with-addons--with-addons--1byxB">
                    <div className="ud-text-input-container">
                      <div className="basic-info--social-url-prefix--2Mkpv text-input-with-addons--addon--1dOJH">
                        http://www.youtube.com/
                      </div>
                      <input
                        aria-invalid="false"
                        name="youtubeProfile"
                        placeholder="Username"
                        maxLength="128"
                        id="u301-htmlForm-group--18"
                        type="text"
                        className="ud-text-input ud-text-input-large ud-text-md"
                        value={inputs.youtubeProfile || ""}
                        onChange={handleChange}
                      />
                      <div className="ud-text-input-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-1" id="save-container">
              <button id="save-btn" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </>
  );
}
