import Card from "../components/Card";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Signin()
{
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return(
    <>
      <Card>
        <div className="title flex flex-col items-center">
              <h1 className="text-5xl font-bold">Sign In</h1>
              <span className="text-xl py-4 w-2/3 text-center text-gray-500">It's been so long!</span>
        </div>

        <div className="py-1">
          <div className="profile flex justify-center py-4">
            <img className="border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200" src={avatar} alt="avatar" />
          </div>

          <div className="textbox flex flex-col items-center">
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none" type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} />
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-2" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />

            <button className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]"
            onClick={async()=>{
              try {
                const response = await axios.post("http://localhost:3000/basic/signin", {
                  username,
                  password,
                });
                alert(response.data.message); // Notify the user kya hua
                localStorage.setItem("token",response.data.token)//token
                navigate("/profile"); // Redirect to the sign-in page
              } catch (error) {
                console.error(error);
                setError(
                  error.response?.data?.message || "An unexpected error occurred"
                );
              }
            }}
            >Let's Go!!</button>
          </div>

          <div className="text-center py-4"> 
            <span className="text-gray-500">Not a Member? <Link className="text-red-500" to="/signup">SignUp Now</Link></span>
          </div>

          <div className="text-right py-2 text-sm underline text-red-700 pr-20">
            <Link to="/reset">Forgot Password?</Link>
          </div>
          {error && ( // Display error message if it exists
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}

        </div>
      </Card>
    </>
  )
  
}