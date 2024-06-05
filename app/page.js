"use client";
import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import CourseDetails from "./components/CourseDetails";
import "./globals.css";
import { calculateAge, validatePhone } from "./utils/validations";

export default function Home() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    dob: "",
  });
  const [message, setMessage] = useState({ msg: "", color: "" });
  const [timesUp, setTimesUp] = useState(false);
  const [error,setError] = useState("")
  const [dobError,setDOBError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(!validatePhone(formData.phone),formData.phone)
    if(!validatePhone(formData.phone)){
        setError("Invalid Phone number")
        return
    }
    setError("")
    if(calculateAge(formData.dob) < 18){
        setDOBError("Invalid Date: Must be 18 years or older.")
        return
    }

    setDOBError("")
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
   
    if (response.ok) {
      setMessage({ msg: "Registration successful!", color: "green" });
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        dob: "",
      });
    } else {
      setMessage({ msg: data.error || "Something went wrong", color: "red" });
    }
  };

  console.log(message)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center w-full bg-[url('../public/background.jpg')] ">
      <div className="bg-white rounded shadow-md block sm:flex w-full sm:w-3/4 gap-4 shadow-2xl shadow-cyan-500/50 ...">
        <div className="sm:p-10 p-6 ">
          <h1 className="text-4xl font-bold mb-4 text-center sm:text-left md:text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-indigo-600 ...">
            Digital Marketing Course
          </h1>
          <CourseDetails />
        </div>

        <div className="w-full p-10 bg-gradient-to-r from-blue-500 to-cyan-500">
          <CountdownTimer timesUp={timesUp} setTimesUp={setTimesUp} />
          <div className="flex justify-center mt-10">
            <form onSubmit={handleSubmit} className="space-y-4 w-11/12">
              <div>
                <label className="block text-sm ">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="w-full border p-2 rounded text-black"
                  value={formData.first_name}
                  onChange={handleChange}
                  disabled={timesUp}
                  pattern="[a-zA-Z]+"
                  title="Please enter only alphabetical characters"
                  required
                />
              </div>
              <div>
                <label className="block text-sm ">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="w-full border p-2 rounded text-black"
                  value={formData.last_name}
                  onChange={handleChange}
                  disabled={timesUp}
                  pattern="[a-zA-Z]+"
                  title="Please enter only alphabetical characters"
                  required
                />
              </div>
              <div>
                <label className="block text-sm ">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border p-2 rounded text-black"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={timesUp}
                  required
                />
              </div>
              <div>
                <label className="block text-sm ">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border p-2 rounded text-black"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={timesUp}
                  required
                />
                {error && <p className="text-red-800 text-sm">{error}</p>} 
              </div>
              <div>
                <label className="block text-sm ">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="w-full border p-2 rounded text-black"
                  value={formData.dob}
                  onChange={handleChange}
                  disabled={timesUp}
                  max={new Date().toISOString().split('T')[0]}
                  required
                />
                 {dobError && <p className="text-red-800 text-sm">{dobError}</p>} 
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white p-2 rounded"
                disabled={timesUp}
              >
                Register
              </button>
            </form>
          </div>
          {message.msg && (
            <p className={`mt-4 text-center text-${message.color}-900`}>
              {message.msg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
