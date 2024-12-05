import Card from "../components/Card";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png"

export default function SignUp(){
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
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none" type="text" placeholder="Username" />
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none my-2" type="text" placeholder="Password" />
            <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none" type="text" placeholder="Email" />
            <button className="border mt-1 bg-blue-700 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#97314b]">SignUp!!</button>
          </div>
        </div>
      </Card>
    </>
  )
}