import Card from "../components/Card";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css"
export default function Reset(){
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className={`${styles.glass} h-full`}>
            
            <br />
            <br />
            <div className="title flex flex-col items-center">
              <h1 className="text-5xl font-bold">Reset Password</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="text-xl pl-2 mt-5 mb-1">Enter OTP</div>
            <input className="border-0 px-5 py-4 rounded-xl w-11/12 shadow-sm text-lg focus:outline-none mb-2" type="text" placeholder="OTP" />

            <div className="flex items-center justify-between">
              <button className="ml-2 border mt-1 bg-indigo-500 w-2/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#4338ca]">Update</button>
              <div className="text-xl mr-6 text-red-500 hover:">Resend?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}