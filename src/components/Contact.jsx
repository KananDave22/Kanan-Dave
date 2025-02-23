import React from "react";
import Swal from 'sweetalert2'
import profileIcon from "../assets/Profile picture.png"



import resumeIcon from "../assets/resumeIcon.png";
const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74475785-4d93-4424-a79f-945d8e14aa9a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Success!",
            text: "Message Sent Successfully!",
            icon: "success"
          });
          form.reset();
      }
  };
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full max-w-xl flex justify-center lg:justify-start lg:w-1/4 ">
            <img
              src={profileIcon}
              width={270}
              height={200}
              alt="Kanan Resume"
              className="mb-6 rounded-full bg-transparent"
            />
        </div>

        <div className="w-full max-w-xl lg:w-3/4">
          <form onSubmit={onSubmit} className="w-full">
            <div className="mb-3">
              <label className="text-xl ">Full Name</label>
              <br />
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
                required
                className="border border-neutral-800 p-1 w-full"
              />
            </div>
            <div className="mb-3">
              <label className="text-xl ">Email Address</label>
              <br />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Enter your email"
                required
                className="border border-neutral-800 p-1 w-full"
              />
            </div>
            <div className="mb-3">
              <label className="text-xl ">Your Message</label>
              <br />
              <textarea
                name="message"
                id=""
                className="border border-neutral-800 p-1 w-full"
                placeholder="Enter your name"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-2 border-0 bg-blue-900 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
