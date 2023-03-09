import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"

interface  Props {
  title: string
  to:string
}
const Header = ({ title , to}: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    console.log(e.target.id)
      navigate(`/${e.target.id}`,{replace:true});
  }
  

    return (
      <nav className="flex justify-between items-center p-5 px-8 bg-black text-white">
        <Link to="/" className="inline-flex items-center font-bold text-2xl">
          Quick<span className="text-blue-400 font-bold">Fund</span>
        </Link>
        <button
          id={to}
          className="rounded-md border border-red-500 p-2 bg-red-500 px-8 font-medium hover:opacity-90 active:bg-red-600"
          onClick={handleClick}
        >
          {title}
        </button>
      </nav>
    );
}   

export default Header;