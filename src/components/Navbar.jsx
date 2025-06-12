import { useNavigate } from "react-router-dom"

export default function Navbar(){

    const navigate = useNavigate();

     
    return(
        <>
        <h1 className="h1">Rahul's Land</h1>
        <nav className="Nav0">
            <ul className="Nav1">
                <li onClick={()=>{navigate("/")}}>Home</li>
                <li onClick={()=>{navigate("/Cli")}}>CLI Play</li>
                <li onClick={()=>{navigate("/Blogpage")}}>Rahul Blogs</li>
                <li onClick={()=>{navigate("/edits")}}>Edits</li>
            </ul>
        </nav>
        </>
    )
}