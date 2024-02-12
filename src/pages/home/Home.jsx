import { useState } from "react";
import "./home.css";
function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [agreeError, setAgreeError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!name) {
      setNameError("Please enter name");
    } else {
      setNameError("");
    }
    if (!gender) {
      setGenderError("Please select a gender");
    } else {
      setGenderError("");
    }
    if (!country) {
      setCountryError("Please select a country");
    } else {
      setCountryError("");
    }
    if (!agree) {
      setAgreeError("Please check the box");
    } else {
      setAgreeError("");
    }
  }

  return (
    <>
      <form>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <span className="error">{nameError}</span>
        <div>
          <label>
            Male
            <input
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              type="radio"
              value="male"
            />
          </label>
          <label>
            Female
            <input
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              type="radio"
              value="female"
            />
          </label>
        </div>
        <span className="error">{genderError}</span>
        <div>
          <select
            value={country}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="">Select...</option>
            <option value="nep">Nepal</option>
            <option value="ind">India</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <span className="error">{countryError}</span>
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              setAgree(e.target.checked);
            }}
            value="hello"
          />
          Please agree
        </label>
        <span className="error">{agreeError}</span>
        <br />
        <button
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          submit
        </button>
      </form>
    </>
  );
}

export default Home;
