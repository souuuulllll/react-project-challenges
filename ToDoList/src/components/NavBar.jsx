import { Moon, Sun } from "lucide-react"


function NavBar() {
  return (
    <div className="flex justify-between p-4">
        <div className="">
            <h2>My Tasks</h2>
            <p>active tasks</p>
        </div>

        <button className='border w-10 h-10 grid place-items-center rounded-3xl'><Moon /></button>
        {/* <button><Sun /></button> */}
    </div>
  )
}

export default NavBar