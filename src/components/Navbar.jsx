import { useNavigate } from "react-router-dom"

export default function Navbar(){

    const navigate = useNavigate();

     
    return(
        <>
        <h1 className="h1">Rahul's Land</h1>
        <nav className="Nav0">
            <ul className="Nav1">
                <li>Home</li>
                <li>CLI Play</li>
                <li onClick={()=> {
                    if(window.location.pathname.endsWith("/Blogpage")){
                        navigate("/");
                    }else{
                        navigate("/Blogpage");
                    }}
                }>Rahul Blogs</li>
                <li>Edits</li>
            </ul>
        </nav>
        </>
    )
}