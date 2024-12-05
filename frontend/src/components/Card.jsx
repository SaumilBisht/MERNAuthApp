
import styles from "../styles/Username.module.css"

export default function Card({children})
{
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={`${styles.glass} flex flex-col justify-center h-full`}>
          {children}
        </div>
      </div>
    </div>
  )
}