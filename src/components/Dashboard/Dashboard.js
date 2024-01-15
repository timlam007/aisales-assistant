import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import logo from "../../assets/app_logo.png";
import product1 from "../../assets/product1.jpeg";
import product2 from "../../assets/product2.jpeg";
import product3 from "../../assets/product3.jpeg";
const Result = ({ onHomeButtonClick }) => {
  const products = [
    {
      name: "ManuGuard Medical Plan/Benefit",
      image: product1,
    },
    {
      name: "Manulife First VHIS Flexi Plan",
      image: product2,
    },
    {
      name: "Take Care Personal Accident Plan/Benefit 2",
      image: product3,
    },
  ];

  const handleHomeButtonClick = () => {
    if (onHomeButtonClick) {
      onHomeButtonClick(); // Call the onHomeButtonClick prop
    }
  };

  return (
    <>
      <button
        onClick={handleHomeButtonClick}
        className="bg-green-900 rounded-md text-white px-4 py-2"
      >
        Home
      </button>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex flex-col items-center justify-between"
          >
            <img
              className="w-full h-40 mb-1"
              src={product.image} // Use the image from the product object
              alt={`Placeholder image for insurance plan ${index + 1}`}
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mb-4">
                Ext ${Math.floor(Math.random(0, 1) * 1000)}+ per/y
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Dashboard = () => {
  const [showForm, setShowForm] = useState(true);
  const [selectedAgeRange, setSelectedAgeRange] = useState(""); // Add state for selected age range

  const ageRanges = [
    "0-10",
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
  ];

  const [selectedCivilStatus, setSelectedCivilStatus] = useState(""); // Add state for selected civil status
  const civilStatusOptions = ["Single", "Married"];

  const handleSubmit = () => {
    // Perform any necessary logic here
    // For now, just toggle the visibility of the form and Result component
    setShowForm(!showForm);
  };

  const [selectedSpecialHealthConcern, setSelectedSpecialHealthConcern] =
    useState("");
  const [otherHealthConcern, setOtherHealthConcern] = useState("");

  const healthConcernsOptions = [
    "High Cholesterol",
    "Diabetes",
    "Hypertension",
    "Chronic Illnesses",
    "Allergies",
    "Disabilities",
    "Other",
  ];

  const [allowSocialMediaSearch, setAllowSocialMediaSearch] = useState(false);

  const handleHomeButtonClick = () => {
    setShowForm(true); // Set showForm to true to render the form component
  };

  return (
    <div className="md:flex min-h-screen">
      <div className="w-full md:w-1/3 bg-blue-900 p-10 text-white flex flex-col justify-center">
        <img className="w-60 h-24 mb-16" src={logo} />

        <h1 className="text-3xl mb-12">
          Let AI Recommend You The Product You Need
        </h1>
        <p className="flex items-center text-lg mb-2">
          <i className="fas fa-phone-alt mr-3"></i>
          +852 68251808
        </p>
        <p className="flex items-center text-lg mb-2">
          <i className="fas fa-envelope mr-3"></i>
          tinlam@redhat.com
        </p>
        <p className="flex items-center text-lg">
          <i className="fas fa-building mr-3"></i>
          Strategic Business Development Director
        </p>
      </div>
      <div className="w-full md:w-2/3 bg-white p-10">
        {showForm ? (
          <form className="w-full max-w-3xl">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="occupation"
                >
                  Occupation
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="occupation"
                  type="text"
                  placeholder="Software Engineer"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="janedoe@gmail.com"
                />
              </div>
              <div className="flex items-center gap-2 w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold "
                  htmlFor="allowSocialMediaSearch"
                >
                  Allow to search social media
                </label>
                <input
                  className="py-3 px-4"
                  id="allowSocialMediaSearch"
                  type="checkbox"
                  checked={allowSocialMediaSearch}
                  onChange={() =>
                    setAllowSocialMediaSearch(!allowSocialMediaSearch)
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="health-status"
                >
                  Health Status (Optional)
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="health-status"
                  type="text"
                  placeholder="Good"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="age"
                >
                  Age
                </label>
                <select
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="age"
                  value={selectedAgeRange}
                  onChange={(e) => setSelectedAgeRange(e.target.value)}
                >
                  <option value="">Select</option>
                  {ageRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="special-health-concerns"
                >
                  Special Health Concerns{" "}
                </label>
                <div className="relative">
                  <select
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="special-health-concerns"
                    value={selectedSpecialHealthConcern}
                    onChange={(e) => {
                      setSelectedSpecialHealthConcern(e.target.value);
                      // Reset otherHealthConcern when a new option is selected
                      setOtherHealthConcern("");
                    }}
                  >
                    <option value="">Select</option>
                    {healthConcernsOptions.map((concern) => (
                      <option key={concern} value={concern}>
                        {concern}
                      </option>
                    ))}
                  </select>
                  {selectedSpecialHealthConcern === "Other" && (
                    <input
                      type="text"
                      placeholder="Specify other health concern"
                      className="block w-full mt-2 p-2 border border-gray-200 rounded focus:outline-none focus:border-gray-500"
                      value={otherHealthConcern}
                      onChange={(e) => setOtherHealthConcern(e.target.value)}
                    />
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="civil-status"
                >
                  Civil Status
                </label>
                <select
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="civil-status"
                  value={selectedCivilStatus}
                  onChange={(e) => setSelectedCivilStatus(e.target.value)}
                >
                  <option value="">Select</option>
                  {civilStatusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Gender
                </label>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="male"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="female"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="hobby"
                >
                  Hobby
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="hobby"
                  type="text"
                  placeholder="Reading"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="additional-note"
                >
                  Additional Note?
                </label>
                <input
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="additional-note"
                  type="text"
                  placeholder="Enter any additional details"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-900 rounded-md text-white px-4 py-2"
            >
              Submit
            </button>
          </form>
        ) : (
          <Result onHomeButtonClick={handleHomeButtonClick}/>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
