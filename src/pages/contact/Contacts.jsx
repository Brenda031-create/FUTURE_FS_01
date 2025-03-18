import axios from "axios";
import React, { useState } from "react";
import gmail from "../../assets/icons/gmail.png";
import letter from "../../assets/icons/letter.png";
import linkedin from "../../assets/icons/linkedin.png";
import viber from "../../assets/icons/viber.png";
import Footer from "../../components/Footer.jsx";
import github from "../../assets/icons/github.png";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      console.log("Message sent successfully:", response.data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div id="contact">
      <div className="flex bg-gray-20 my-6 h-auto">
        <div className="flex-auto p-5 text-left border-2 border-black-500">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h1 className="font-semibold">Send a message</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-black-200 rounded-md shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-black-200 rounded-md shadow-sm"
            />
            <textarea
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              className="h-60 w-60 border-black-500 p-2"
            />
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 border-2 border-black-500 m-10 rounded-md hover:bg-red-400 transition-all"
            >
              Send a message
            </button>
          </form>
        </div>

        <div className="flex-auto p-5 text-left border-2 border-black-500">
          <h1 className="font-semibold">Get in touch</h1>
          <p>
            <img src={viber} alt="Icon" className="h-5 w-5 mr-3 float-left" />
            Phone
            <br />
            +254796931627
          </p>

          <p>
            <div className="flex">
              <div className="float-left">
                <img src={letter} alt="Icon" className="w-6 h-6 mt-2 mr-3 float-left" />
              </div>
              <div className="float-left">
                address
                <br />
                P.O Box 255-60200 Meru
              </div>
            </div>
          </p>
          <p>
            <img src={gmail} alt="Icon" className="h-5 w-5 mt-2 mr-3 float-left" />
            Email
            <br />
            <a href="mailto:brendathiaini31@gmail.com">brendathiaini31@gmail.com</a>
          </p>
          <div className="flex">
          <p>
            <a href="https://www.linkedin.com/in/brenda-karimi-872788288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
           <img src={linkedin} alt='Icon' className="h-5 w-5 m-2" /></a></p>
  <p><a href='https://github.com/Brendathiaini'>
   <img src={github} alt="icon" className="h-5 w-5 m-2" /> </a></p>
</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
