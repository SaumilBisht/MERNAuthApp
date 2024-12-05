import Card from "../components/Card";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png"

export default function Profile()
{
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
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none mb-2" type="text" placeholder="first name" />
            </div>
            <div>
              <div className="text-md pl-4">Last Name</div>
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none mb-2" type="text" placeholder="last name" />
            </div>
            <div>
              <div className="text-md pl-4">Mobile Number</div>
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none " type="text" placeholder="mobile no." />
            </div>
            <div>
              <div className="text-md pl-4">Firstname</div>
              <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none" type="text" placeholder="firstname" />
            </div>
          </div>
          
          <div className="mt-2">
            <div className="pl-4">Address</div>
            <input className="border-0 px-5 py-4 rounded-xl w-5/6 shadow-sm text-lg focus:outline-none" type="text" placeholder="address"/>
          </div>
          
          <div className="flex justify-between mt-1">
            <button className="ml-2 border mt-1 bg-indigo-500 w-2/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#4338ca]">Update</button>
            <button className="border mt-3 bg-[#be123c] h-10 w-1/5  rounded-lg text-gray-50 text-md shadow-sm text-center hover:bg-[#ff6a6a] mr-4">Log Out</button>
          </div>

        </div>
      </Card>
    </>
  )
}