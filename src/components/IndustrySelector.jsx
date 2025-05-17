import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./IndustrySelector.css";
import publicc from "../assets/icons/public.png";
import oil from "../assets/icons/Oil.png";
import logi from "../assets/icons/Logi.png";
import mining from "../assets/icons/Mining.png";
import cold from "../assets/icons/Cold.png";
import other from "../assets/icons/Other.png";
import Variant from "../assets/icons/Variant.png";
import Variant8 from "../assets/icons/Variant8.png";
import Variant9 from "../assets/icons/Variant9.png";
import Variant10 from "../assets/icons/Variant10.png";
import Variant11 from "../assets/icons/Variant11.png";
import Variant12 from "../assets/icons/Variant12.png";
import { MdCopyright } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import Radio from "../assets/icons/Checkbox_Radio_Toggle_blank.png";
import RadioChecked from "../assets/icons/Checkbox_Radio_Toggle_color.png";
import right from "../assets/icons/chevron-right.png";
import left from "../assets/icons/chevron-left.png";
import check from "../assets/icons/check.png";

import Diirf from "../assets/Diirf-logo.png";
import checkCircle from "../assets/icons/check-circle.png";
import finalCheck from "../assets/icons/final_check.png";

const solutionsIcons = [
  Variant,
  Variant,
  Variant8,
  Variant9,
  Variant10,
  Variant11,
  Variant12,
];

const icons = [publicc, oil, logi, mining, cold, other];
const industries = [
  "Public Transportation",
  "Oil & Gas",
  "Logistics",
  "Mining",
  "Cold storage",
  "Other",
];
const vehiclesCount = ["1-9", "10-49", "50-149", "150-499", "500+"];
const solutions = [
  "Wave",
  "Price Engine",
  "GPS Tracker",
  "DMS(Driver Monitoring System",
  "2CH(ADAS+DMS)",
  "3CH(ADAS+DMS+External",
  "4CH/5CH(ADAS+DMS+External)",
];

const IndustrySelector = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    industry: "",
    vehicles: "",
    solutions: [],
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    message: "",
  });
  console.log(formData);

  let solutions = [
    "Wave-Price Engine",
    "GPS Tracker",
    "DMS(Driver Monitoring System",
    "2CH(ADAS+DMS)",
    "3CH(ADAS+DMS+External",
    "4CH/5CH(ADAS+DMS+External)",
  ];

  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
    setPage(4);
  };
  const handleNext = () => {
    if (page === 0 && formData.industry !== "") {
      setPage((prev) => prev + 1);
    }
    if (page === 1 && formData.vehicles !== "") {
      setPage((prev) => prev + 1);
    }
    if (page === 2 && formData.solutions.length !== 0) {
      setPage((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "solutions") {
      setFormData((prev) => {
        const newSolutions = checked
          ? [...prev.solutions, value] // add to array
          : prev.solutions.filter((item) => item !== value); // remove from array

        return { ...prev, solutions: newSolutions };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const renderFormFields = () => {
    switch (page) {
      case 0:
        return (
          <>
            <header className="header">
              <nav className="navbar">
                <img src={Diirf} alt="Driif Logo" className="logo" />
                <GiHamburgerMenu className="hamburger-menu" />
              </nav>
            </header>

            <div className="industry-container">
              <div className="left-section">
                <img className="web-logo" src={Diirf} />
                <h1 className="description">
                  This isn’t just innovation
                  <br />
                  It’s Technology That Cares.
                </h1>
                <h2 className="top-description">Choose your industry :</h2>
                <div className="top-dots-container">
                  <LuDot size={27} color="#E7FF25" />
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={26} color="#3B4519" />
                </div>

                <h1 className="footer-text">
                  Momentum Redefined<span className="dot">.</span>
                </h1>
              </div>

              <div className="right-section">
                <h2
                  className="right-description"
                  style={{
                    size: "30px",
                    fontWeight: "600",
                    textAlign: "initial",
                  }}
                >
                  Choose your industry :
                </h2>

                <div className="options">
                  {industries.map((item, index) => (
                    <label
                      key={index}
                      className={`option ${
                        formData.industry === item ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="industry"
                        value={item}
                        checked={formData.industry === item}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <img
                        src={icons[index]}
                        alt={`icon-${index}`}
                        style={{
                          width: "21px",
                          height: "17px",
                          marginRight: "8px",
                          verticalAlign: "middle",
                        }}
                      />
                      <span style={{ fontSize: "14px", fontWeight: "500" }}>
                        {item}
                      </span>
                      {/* <span className="radio" /> */}
                      <img className="radio unchecked" src={Radio} />
                      <img className="radio checked" src={RadioChecked} />
                    </label>
                  ))}
                </div>

                <label className="next" onClick={handleNext}>
                  Next
                  <img className="right" src={right} />
                </label>
                <footer className="right-footer">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <MdCopyright color="#555a59" />
                    <p className="footer-description">Driif Ai 2025</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LuDot size={28} color="#E7FF25" />
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={26} color="#3B4519" />
                  </div>
                  <div className="right">
                    <MdOutlineMail
                      style={{ marginRight: "5px" }}
                      color="#555a59"
                    />
                    <p className="footer-description">Contact@driif.ai</p>
                  </div>
                </footer>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <header className="header">
              <nav className="navbar">
                <img src={Diirf} alt="Driif Logo" className="logo" />
                <GiHamburgerMenu className="hamburger-menu" />
              </nav>
            </header>

            <div className="industry-container">
              <div className="left-section">
                <img className="web-logo" src={Diirf} />

                <h1 className="description">
                  This isn’t just innovation
                  <br />
                  It’s Technology That Cares.
                </h1>
                <h2
                  className="top-description"
                  style={{ fontFamily: "sans-serif" }}
                >
                  How many vehicles or assets do you manage:
                </h2>
                <div className="top-dots-container">
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={28} color="#E7FF25" />
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={26} color="#3B4519" />
                </div>
                <h1 className="footer-text">
                  Momentum Redefined<span className="dot">.</span>
                </h1>
              </div>

              <div className="right-section">
                <h2 className="right-description">
                  How many vehicles or assets do you manage?
                </h2>
                <div className="options">
                  {vehiclesCount.map((item, index) => (
                    <label
                      key={index}
                      className={`option ${
                        formData.vehicles === item ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="vehicles"
                        value={item}
                        checked={formData.vehicles === item}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />

                      {item}
                      {/* <span className="radio" /> */}
                      <img className="radio unchecked" src={Radio} />
                      <img className="radio checked" src={RadioChecked} />
                    </label>
                  ))}
                </div>
                <div className="navigation-container">
                  <label className=" next navigate-next" onClick={handleBack}>
                    <img className="left" src={left} />
                    Back
                  </label>

                  <label className="next navigate-back" onClick={handleNext}>
                    Next
                    <img className="right" src={right} />
                  </label>
                </div>
                <footer className="right-footer">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <MdCopyright color="#555a59" />
                    <p className="footer-description">Driif Ai 2025</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={28} color="#E7FF25" />
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={26} color="#3B4519" />
                  </div>
                  <div class="right">
                    <MdOutlineMail
                      style={{ marginRight: "5px" }}
                      color="#555a59"
                    />
                    <p className="footer-description">Contact@driif.ai</p>
                  </div>
                </footer>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <header className="header">
              <nav className="navbar">
                <img src={Diirf} alt="Driif Logo" className="logo" />
                <GiHamburgerMenu className="hamburger-menu" />
              </nav>
            </header>

            <div className="industry-container">
              <div className="left-section">
                <img className="web-logo" src={Diirf} />

                <h1 className="description">
                  This isn’t just innovation
                  <br />
                  It’s Technology That Cares.
                </h1>
                <h2
                  className="top-description"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Recommended Solutions for your Fleet:
                </h2>
                <div className="top-dots-container">
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={28} color="#E7FF25" />
                  <LuDot size={26} color="#3B4519" />
                </div>
                <h1 className="footer-text">
                  Momentum Redefined<span className="dot">.</span>
                </h1>
              </div>

              <div className="right-section">
                <h2 className="right-description">
                  Recommended Solutions for your Fleet:
                </h2>
                <div className="options">
                  {solutions.map((item, index) => (
                    <label
                      key={index}
                      className={`option ${
                        formData.solutions.includes(item) ? "active" : ""
                      }`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={solutionsIcons[index]}
                          alt={`icon-${index}`}
                          style={{
                            width: "25px",
                            marginRight: "8px",
                            verticalAlign: "middle",
                          }}
                        />
                        {item}
                      </div>
                      {/* <input
                        type="checkbox"
                        name="solutions"
                        style={{
                          backgroundColor: formData.solutions.includes(item)
                            ? "#e7ff25"
                            : "transparent",
                          border: "1.5px solid #aaa",
                          width: "16px",
                          height: "16px",
                          borderRadius: "3px",
                          cursor: "pointer",
                          color: "blue",
                          userSelect: "none",
                        }}
                        value={item}
                        checked={formData.solutions.includes(item)}
                        onChange={handleChange}
                      /> */}
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <input
                          type="checkbox"
                          name="solutions"
                          style={{
                            appearance: "none",
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                            backgroundColor: formData.solutions.includes(item)
                              ? "#e7ff25"
                              : "transparent",
                            border: "1.5px solid #aaa",
                            width: "16px",
                            height: "16px",
                            borderRadius: "3px",
                            cursor: "pointer",
                            userSelect: "none",
                            display: "inline-block",
                          }}
                          value={item}
                          checked={formData.solutions.includes(item)}
                          onChange={handleChange}
                        />
                        {formData.solutions.includes(item) && (
                          <span
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -60%)",

                              color: "blue",
                              pointerEvents: "none",
                              lineHeight: "1",
                            }}
                          >
                            <img
                              src={check}
                              style={{ height: "12px", width: "12px" }}
                            />
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>

                <div className="navigation-container">
                  <label className=" next navigate-next" onClick={handleBack}>
                    <IoChevronBackOutline />
                    Back
                  </label>

                  <label className="next navigate-back" onClick={handleNext}>
                    Next
                    <img className="right" src={right} />
                  </label>
                </div>
                <footer className="right-footer">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <MdCopyright color="#555a59" />
                    <p className="footer-description">Driif Ai 2025</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={28} color="#E7FF25" />
                    <LuDot size={26} color="#3B4519" />
                  </div>
                  <div class="right">
                    <MdOutlineMail
                      style={{ marginRight: "5px" }}
                      color="#555a59"
                    />
                    <p className="footer-description">Contact@driif.ai</p>
                  </div>
                </footer>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <header className="header">
              <nav className="navbar">
                <img src={Diirf} alt="Driif Logo" className="logo" />
                <GiHamburgerMenu className="hamburger-menu" />
              </nav>
            </header>

            <div className="industry-container">
              <div className="left-section">
                <img className="web-logo" src={Diirf} />

                <h1 className="description">
                  This isn’t just innovation
                  <br />
                  It’s Technology That Cares.
                </h1>
                <h2 className="top-description">Let's Connect</h2>
                <div className="top-dots-container">
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={26} color="#3B4519" />
                  <LuDot size={28} color="#E7FF25" />
                </div>

                <h1 className="footer-text">
                  Momentum Redefined<span className="dot">.</span>
                </h1>
              </div>

              <div className="right-section">
                <h2 className="right-description">Let's Connect</h2>
                <div className="form-container">
                  <form className="form" onSubmit={submitData}>
                    <div className="form-group">
                      <label className="form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={formData.fullName}
                        name="fullName"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Business Email <span className="required">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="Hello@email"
                        required
                        value={formData.businessEmail}
                        name="businessEmail"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        placeholder="+91 000 000 0000"
                        required
                        value={formData.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-textarea"
                        placeholder="Type your message here"
                        value={formData.message}
                        name="message"
                        onChange={handleChange}
                      />
                    </div>

                    <div
                      className="privacy"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {/* <span
                        className="checkmark"
                        style={{ marginRight: "8px" }}
                      >
                        <RiShieldCheckLine
                          style={{
                            backgroundColor: "#56c423",
                            padding: "4px",
                            borderRadius: "4px",
                            color: "white",
                          }}
                        />
                      </span> */}
                      <img src={finalCheck} />
                      <p className="privacy-text" style={{ margin: 0 }}>
                        Your privacy is our priority. We use your data solely to
                        provide personalised and relevant solutions tailored to
                        your needs.
                      </p>
                    </div>

                    <div className="button-row">
                      <button
                        type="button"
                        className="btn back-btn final-back"
                        onClick={handleBack}
                      >
                        <img className="left" src={left} />
                        Back
                      </button>
                      <button type="submit" className="btn submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <footer className="right-footer">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <MdCopyright color="#555a59" />
                    <p className="footer-description">Driif Ai 2025</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={26} color="#3B4519" />
                    <LuDot size={28} color="#E7FF25" />
                  </div>
                  <div class="right">
                    <MdOutlineMail
                      style={{ marginRight: "5px" }}
                      color="#555a59"
                    />
                    <p className="footer-description">Contact@driif.ai</p>
                  </div>
                </footer>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <header className="header">
              <nav className="navbar">
                <img src={Diirf} alt="Driif Logo" className="logo" />
                <GiHamburgerMenu className="hamburger-menu" />
              </nav>
            </header>
            <div className="success-container">
              <div className="success-circle">
                <span className="success-check">
                  <img src={checkCircle} />
                </span>
              </div>
              <h2 className="success-heading">You’re all set!</h2>
              <p className="success-subtext">Our team will be in touch soon.</p>

              <div className="success-buttons">
                <button className="btn btn-primary final-btn">
                  View Products
                </button>
                <button className="btn btn-secondary final-btn">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="success-container-web">
              <div className="left-section-web">
                <img className="web-logo" src={Diirf} />

                <h1 className="description-web" style={{ color: "#ffffff" }}>
                  This isn’t just innovation
                  <br />
                  It’s Technology That Cares.
                </h1>
                <h1 className="footer-text" style={{ color: "#ffffff" }}>
                  Momentum Redefined<span className="dot">.</span>
                </h1>
              </div>
              <div className="success-container-right">
                <div className="right-content-wrapper">
                  <div className="success-circle">
                    <span className="success-check">
                      <img src={checkCircle} />
                    </span>
                  </div>
                  <h2 className="success-heading">You’re all set!</h2>
                  <p className="success-subtext">
                    Our team will be in touch soon.
                  </p>

                  <div className="success-buttons-web">
                    <button
                      className="btn btn-secondary final-btn"
                      style={{ marginRight: "16px" }}
                    >
                      Download Brochure
                    </button>
                    <button className="btn btn-primary final-btn">
                      View Products
                    </button>
                  </div>
                </div>
                <footer className="right-footer-web">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <MdCopyright color="#555a59" />
                    <p className="footer-description">Driif Ai 2025</p>
                  </div>
                  <div className="right">
                    <MdOutlineMail
                      style={{ marginRight: "5px" }}
                      color="#555a59"
                    />
                    <p className="footer-description">Contact@driif.ai</p>
                  </div>
                </footer>
              </div>
            </div>
          </>
        );
    }
  };

  return renderFormFields();
};

export default IndustrySelector;
