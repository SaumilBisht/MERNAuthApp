import Card from "../components/Card";
import avatar from "../assets/profile.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
export default function Profile()
{

  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [address,setAddress]=useState("")
  const [mobileno,setMobileno]=useState("")
  const [email,setEmail]=useState("")
  const [error,setError]=useState(null)
  const navigate=useNavigate();


  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(localStorage.getItem("token"));
      
      const response = await axios.put(
        "http://localhost:3000/basic/profile",
        {firstname,lastname,email,mobileno,address},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setError(null); // Clear errors
      navigate("/signin");
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  };

  return(
    <>
      <Card>
        <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">User Profile</h1>
        </div>

        <div className="py-1">
          <div className="profile flex justify-center py-4">
            <img className="border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200" src={avatar} alt="avatar" />
          </div>

          <div className="grid grid-cols-2">
            <div>
              <div className="text-md pl-4">First Name</div>
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none mb-2" type="text" placeholder="first name" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} />
            </div>
            <div>
              <div className="text-md pl-4">Last Name</div>
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none mb-2" type="text" placeholder="last name" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
            </div>
            <div>
              <div className="text-md pl-4">Mobile Number</div>
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none " type="text" placeholder="mobile no." value={mobileno} onChange={(e)=>{setMobileno(e.target.value)}} />
            </div>
            <div>
              <div className="text-md pl-4">Email</div>
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none" type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
          </div>
          
          <div className="mt-2">
            <div className="pl-4">Address</div>
            <input className="border-0 px-5 py-4 rounded-xl w-5/6 shadow-sm text-lg focus:outline-none" type="text" placeholder="address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
          </div>
          
          <div className="flex justify-between mt-1">
            <button className="ml-2 border mt-1 bg-indigo-500 w-2/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#4338ca]"
            onClick={handleUpdate}>Update</button>
            <button className="border mt-3 bg-[#be123c] h-10 w-1/5  rounded-lg text-gray-50 text-md shadow-sm text-center hover:bg-[#ff6a6a] mr-4" onClick={() => {
                localStorage.removeItem("token");
                navigate("/signin"); // Redirect user to sign-in after logout
              }}
              >Log Out</button>
          </div>
          {error && ( // Display error message if it exists
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}

        </div>
      </Card>
    </>
  )
}