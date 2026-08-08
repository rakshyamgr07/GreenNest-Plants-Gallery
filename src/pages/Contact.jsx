import React, { useState } from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTiktok } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { toast } from 'react-toastify'


function Contact() {
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      message: ""
    })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", form.name)
    localStorage.setItem("email", form.email)
    localStorage.setItem("message", form.message)

    toast.success("Message sent successfully")
    setForm({
      name: "",
      email: "",
      message: ""
    })
  }
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">

      <div className="flex flex-col  justify-center items-center md:flex-row gap-8">


        <div className="w-full md:w-1/2">

          <h1 className="text-4xl font-bold">Contact Us</h1>

          <p className="mt-2">We'd love to hear from you!</p>

          <div className="mt-8 flex flex-col gap-5">

            <div className="flex items-center gap-3">
              <FaLocationDot className="text-green-700" />
              <span>Kathmandu, Nepal</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-700" />
              <span>info@greennest.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-green-700" />
              <span>+977 9763631696</span>
            </div>

          </div>

          <div className="flex gap-5 text-green-700 text-xl mt-8">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
          </div>

        </div>

        <div className="w-full md:w-1/2">

          <form
            onSubmit={handleSubmit}
            className="border border-gray-300 shadow-xl flex flex-col gap-4 p-6 rounded-lg w-full"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-400 p-2 w-full rounded-sm"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-400 p-2 w-full rounded-sm"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="border border-gray-400 p-2 w-full rounded-sm"
            />

            <button
              type="submit"
              className="bg-green-900 text-white p-2 rounded-sm hover:bg-green-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Contact
