import { Link } from "react-router-dom";
import avatar from "../assets/profile.png"
import styles from "../styles/Username.module.css"

export default function Username()
{
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Hello Again</h1>
            <span className="text-xl py-4 w-2/3 text-center text-gray-500">WHats good lorumepsum</span>
          </div>

          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img className="border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200" src={avatar} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center">
              <input className="border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg focus:outline-none" type="text" placeholder="Username" />
              <button className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-[#ff6a6a]" type="submit">Lets GO</button>
            </div>

            <div className="text-center py-4"> 
              <span className="text-gray-500">Not a Member? <Link className="text-red-500" to="/signup">Sign Up Now</Link></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}