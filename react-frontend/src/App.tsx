import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TextField from "./components/TextField";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import CountrySelect from "./components/CountrySelect";

// Import country data from the package

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [question, setQuestion] = useState("");
  const [selected, setSelected] = useState("");

  const handleFirstNameChange = (newValue: string) => {
    setFirstName(newValue);
  };

  const handleLastNameChange = (newValue: string) => {
    setLastName(newValue);
  };

  const handleEmailChange = (newValue: string) => {
    setEmail(newValue);
  };

  const handleJobTitleChange = (newValue: string) => {
    setJobTitle(newValue);
  };

  const handleCountryChange = (newValue: string) => {
    setCountry(newValue);
  };

  const handleCompanyNameChange = (newValue: string) => {
    setCompanyName(newValue);
  };

  const handleQuestionChange = (newValue: string) => {
    setQuestion(newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  
  };

  return (
    <div className="flex justify-center flex-wrap">
      <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb my-12 mx-20">
        <div>
          <Heading
            title="Media enquiries:"
            className="text-xl md:text-5xl md:my-2"
          />
          <p className="font-denim big-text-color decoration-1 underline underline-offset-4 text-2xl hover:no-underline ">
            press@tuum.com
          </p>
        </div>
        <div>
          <Heading
            title="Career questions:"
            className="text-xl md:text-5xl md:my-2"
          />
          <p className="font-denim big-text-color decoration-1  underline underline-offset-4 text-2xl hover:no-underline">
            careers@tuum.com
          </p>
        </div>
      </div>

      <div className="max-w-4xl pt-10 px-8 md:px-20 pb-10 my-4 md:my-12 mx-4 w-full bg-white rounded-[50px] items-center">
        <Heading title="Contact us" className="text-5xl md:text-6xl pb-5" />
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 md:gap-4 my-6">
            <TextField
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name"
            />
            <TextField
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name"
            />
            <TextField
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <TextField
              name="jobTitle"
              value={jobTitle}
              onChange={handleJobTitleChange}
              placeholder="Job Title"
            />
            <CountrySelect />
            <TextField
              name="companyName"
              value={companyName}
              onChange={handleCompanyNameChange}
              placeholder="Company Name"
            />
          </div>

          <textarea
            name="question"
            value={question}
            onChange={handleQuestionChange}
            rows={5}
            className="w-full font-denim text-xl bg-white border border-gray-300 rounded-lg py-4 px-4 focus:outline-none focus:border-blue-500"
            placeholder="What would you like to talk about?"
          ></textarea>

          {/* Checkboxes */}
          <div className="mt-4 flex items-center font-denim text-xl">
            <Checkbox
              id="checkbox1"
              label="By submitting this form I accept privacy policy and cookie policy. *"
            />
          </div>
          <div className="mt-2 flex items-center font-denim text-xl">
            <Checkbox
              id="checkbox2"
              label="I would like to receive your newsletter."
            />
          </div>
          {/* Submit button */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
