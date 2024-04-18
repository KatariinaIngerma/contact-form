import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TextField from "./components/TextField";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
const ReactFlagsSelect = React.lazy(() => import("react-flags-select"));

function App() {

  const [selected, setSelected] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="max-w-screen-xl px-4 md:px-20 md:mx-auto">
      <div className="flex flex-wrap">
        {/* Contact Information */}
        <div className="w-full lg:w-1/3 pb-7 text-center sm:text-left px-4 md:px-0 md:my-14">
          <div className="flex items-center sm:justify-between">
            <div className="w-[32px] sm:hidden"></div>
            <Heading
              title="Media enquiries:"
              className="font-denim md:font-reckless text-xl md:text-[36px] my-2 mx-auto sm:mx-0"
            />
            <img src="https://tuum.com/wp-content/themes/tuum-new/assets/img/icon--close.svg" alt="Close icon" className=" ml-2 lg:hidden md:w-[40px]" />
          </div>
          <p className="font-denim big-text-color decoration-1 underline underline-offset-4 text-[18px] hover:no-underline ">
            press@tuum.com
          </p>
          <div>
            <Heading
              title="Career questions:"
              className="font-denim md:font-reckless text-xl md:text-[36px] mb-2 mt-10"
            />
            <p className="font-denim big-text-color decoration-1  underline underline-offset-4 text-[18px] hover:no-underline">
              careers@tuum.com
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full lg:w-2/3 max-w-2xl pt-10 pb-4 px-8 sm:px-16 lg:my-16 bg-white rounded-[50px] mx-auto">
          <div className="flex justify-between">
            <Heading title="Contact us" className="px-4 sm:px-0 text-5xl pb-5" />
            <img src="/icon--close.svg" alt="Close icon" className="hidden lg:block md:w-[40px]" />
          </div>
          <form onSubmit={handleSubmit} className="px-4 md:px-0">
            <div className="grid grid-cols-2 gap-5 md:gap-4 mt-2 mb-4">
              <TextField
                name="firstName"
                placeholder="First Name"
              />
              <TextField
                name="lastName"
                placeholder="Last Name"
              />
              <TextField
                name="email"
                placeholder="Email"
              />
              <TextField
                name="jobTitle"
                placeholder="Job Title"
              />
              <ReactFlagsSelect
                placeholder={"Country"}
                id={"country"}
                selected={selected}
                onSelect={(code) => setSelected(code)} 
                />
              <TextField
                name="companyName"
                placeholder={"Company Name"}
                className={"my-0.5"}
              />
            </div>
            <textarea
              name="question"
              rows={5}
              className="w-full font-denim bg-white border border-gray-300 rounded-lg py-4 px-4 focus:outline-none focus:border-blue-500"
              placeholder="What would you like to talk about?"
            ></textarea>
            <div className="mt-2 flex items-center font-denim">
              <Checkbox
                id="checkbox1"
                label={<>By submitting this form I accept <a className="link-text-blue underline" href="link_to_cookie_policy">privacy policy</a> and <a className="link-text-blue underline" href="link_to_cookie_policy">cookie policy</a>. *</>}
              />
            </div>
            <div className="mt-2 flex items-center font-denim">
              <Checkbox
                id="checkbox2"
                label="I would like to receive your newsletter."
              />
            </div>
            <Button type="submit" name="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
