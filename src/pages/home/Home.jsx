import { useState } from "react";
import "./home.css";
function Home() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    agree: false,
  });
  const [formError, setFormError] = useState({
    nameError: "",
    genderError: "",
    countryError: "",
    agreeError: "",
  });
  function onSubmit(e) {
    e.preventDefault();
    setFormError({
      nameError: "",
      genderError: "",
      countryError: "",
      agreeError: "",
    });
    if (!formData.name) {
      setFormError((state) => {
        return { ...state, nameError: "Please enter name" };
      });
    }
    if (!formData.gender) {
      setFormError((state) => {
        return { ...state, genderError: "Please select a gender" };
      });
    }
    if (!formData.country) {
      setFormError((state) => {
        return { ...state, countryError: "Please select a country" };
      });
    }
    if (!formData.agree) {
      setFormError((state) => {
        return { ...state, agreeError: "Please select the checkbox" };
      });
    }
  }
  return (
    <>
      <form>
        <input
          value={formData.name}
          placeholder="Name"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          type="text"
        />
        <span className="error">{formError.nameError}</span>
        <div>
          <label>
            Male
            <input
              name="gender"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
              type="radio"
              value="male"
              checked={formData.gender === "male" ? true : false}
            />
          </label>
          <label>
            Female
            <input
              name="gender"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
              type="radio"
              value="female"
              checked={formData.gender === "female" ? true : false}
            />
          </label>
        </div>
        <span className="error">{formError?.genderError}</span>
        <div>
          <select
            value={formData.country}
            name="country"
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
            }}
          >
            <option value="">Select...</option>
            <option value="nep">Nepal</option>
            <option value="ind">India</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <span className="error">{formError?.countryError}</span>
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              setFormData({ ...formData, agree: e.target.checked });
            }}
            checked={formData.agree}
          />
          Please agree
        </label>
        <span className="error">{formError.agreeError}</span>
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
