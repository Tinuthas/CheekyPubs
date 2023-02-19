import logoImage from '../assets/logo.svg'
import { Button } from './Button'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SubNavBar } from './SubNavbar'
import { AlertConfirm } from './AlertConfirm'
import { updateToken } from '../lib/axios'

export function NavBar() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || "")
  );

  let Links = [
    { name: "HOME", path: '/', },
    { name: "ABOUT", path: 'About', },
    { name: "DAYCARE", 
      links: [
      {
        name: "Attendance", path: "Attendance",
      },
      {
        name: "Dogs", path: "Dogs",
      }]
    }
  ]

  function handleLoginLogout() {
    localStorage.setItem("authenticated", "");
    updateToken()
    setauthenticated("")
    navigate("/login");
  }

  return(
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white h-[68px] py-4 md:px-10 px-7">
        <div className="text-pinkBackground font-bold flex items-center text-3xl drop-shadow-md cursor-pointer py-2">         
          <img src={logoImage} alt="Cheeky Pubs Logo" className='h-9'/>
          Cheeky Pups
        </div>
        <div className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden transition-all duration-500' onClick={()=>setOpen(!open)}>
          {
            open ? <X className='text-neutral-700'/> : <List className='text-neutral-700'/>
          }
        </div>
        <div className={`transition-all duration-300 ease-in ${open ? 'opacity-100':'top-[-500px] opacity-0'} md:opacity-100`}>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-auto left-0 w-full md:w-auto md:pl-0 pl-9`}>
            {
              Links.map((link) => (  
                <li key={link.name}  className='md:ml-8 text-xl md:my-0 my-7' >
                  {link.links ? 
                    <>
                      <SubNavBar name={link.name} list={link.links} dismissClick={()=>setOpen(false)}/>
                    </>
                  :
                    <Link to={link.path} onClick={()=>setOpen(false)} className='z-[1] text-neutral-600 hover:text-neutral-400 duration-300 font-medium'>{link.name}</Link>
                  }
                </li>
              ))
            }
            <Button text={authenticated != "" ? "LOGOUT" : "LOGIN"}  onClick={handleLoginLogout}/>
           
          </ul>
        </div>
        
      </div>
     
    </div>
  )
}