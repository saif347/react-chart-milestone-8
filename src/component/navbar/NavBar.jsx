// import PropTypes from 'prop-types';
import { useState } from "react";
import {  AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "../link/Link";

const NavBar = () => {
    const [open, setOpen]= useState(false)
     const routes =[
        {"name": "Home", "path": "/home", "id": 1},
        {"name": "About Us", "path": "/about", "id": 2},
        {"name": "Contact", "path": "/contact", "id": 3},
        {"name": "Products", "path": "/products", "id": 4},
        {"name": "Blog", "path": "/blog", "id": 5}
    ]
    return (
     <nav className="p-4 bg-amber-400 rounded-lg">
        <div onClick={()=> setOpen(!open)} className="lg:hidden">
            {
                open?<AiOutlineClose></AiOutlineClose>
                : <AiOutlineMenu></AiOutlineMenu>

            }
        </div>
        <ul className={`lg:flex gap-3 duration-1000 bg-amber-500 p-3 rounded-lg absolute lg:static
         ${open? 'top-16': '-top-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>

     </nav>  
    )
};

export default NavBar;