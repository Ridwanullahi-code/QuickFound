import React, {useState} from 'react'
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { DASHBOARD_SIDEBAR_LINKS} from '../lib/constant'
import { Link} from 'react-router-dom'

const linkClass ='link flex items-center font-light py-2  rounded-sm text-base text-sm text-gray-300 space-x-3'

const Sidebar = () => {
	const [open, setOpen] = useState(true);
	
    return (
		<div className={`${open ? "px-10" : "px-2"}  p-5 pt-8 duration-300 flex flex-col text-white h-screen bg-black`}>
			<button className={`w-8 h-8 text-white cursor-pointer ${open && "rotate-180"}`}
            onClick={() => setOpen(!open)}>
             <ArrowLeftCircleIcon />
            </button>
			
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<Link
						key={link.key}
						to={link.path}
						className={linkClass}>
						<span className="text-xl">{link.icon}</span>
						<span className={`${ open ? 'flex' : 'hidden' }`}>
							{link.label}
						</span>
				    </Link>
				))}
			</div>
		</div>
  )
}

export default Sidebar
