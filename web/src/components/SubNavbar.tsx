import { useState } from "react"
import { Link } from "react-router-dom"

interface SubNavBarProps {
  name: string,
  list: {
    name: string,
    path: string,
  }[],
  dismissClick: () => void
}

export function SubNavBar({name, list, dismissClick} : SubNavBarProps) {
  const [open, setOpen] = useState(false)

  function dismissAll(){
    setOpen(false)
    dismissClick()
  }
  
  return(
    <div onMouseLeave={() => dismissAll()}>
      <a className='text-neutral-600 hover:text-neutral-400 duration-300 font-medium focus:text-pinkBackground cursor-pointer' onClick={()=>setOpen(!open)}>{name}</a>
      <div className={`bg-white transition-all duration-300 ease-in md:absolute 
      md:top-19 md:items-center md:rounded-lg md:p-3 cursor-pointer 
      ${open ? 'opacity-100 visible':'top-[-500px] opacity-0 invisible hidden'}`} >
        <ul className={``}>
          {
            list.map((link) => (
              <li key={link.name} onClick={()=>dismissAll()} className='text-base md:my-0 my-3 md:p-2'>
              <Link to={link.path} className='text-neutral-600 hover:text-neutral-400 duration-300 font-medium'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      
    </div>
    
  )
}