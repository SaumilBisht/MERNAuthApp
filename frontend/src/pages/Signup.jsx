import Card from "../components/Card";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function SignUp(){
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [error, setError] = useState(null); // For error messages
  const navigate = useNavigate();

  return(
    <>
      <Card>
        <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Sign Up</h1>
        </div>
        <div className="py-1">
          <div className="profile flex justify-center py-4">
            <img className="border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200" src={avatar} alt="avatar" />
          </div>

          <div className="textbox flex flex-col items-center">
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none" type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-2" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none" type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            <button className="border mt-1 bg-blue-700 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#97314b]" 
            onClick={async()=>{
              try {
                const response = await axios.post("http://localhost:3000/basic/signup", {
                  username,
                  password,
                  email,
                });
                alert(response.data.message); // Notify the user kya hua
                navigate("/signin"); // Redirect to the sign-in page
              } catch (error) {
                console.error(error);
                setError(
                  error.response?.data?.message || "An unexpected error occurred"
                );
              }
            }}>SignUp!!</button>

            {error && ( // Display error message if it exists
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}

          </div>
        </div>
      </Card>
    </>
  )
}