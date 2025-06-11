import { useEffect } from "react";
import home1 from "../home2.png"

export default function Blogpage(){
    useEffect(() => {
    const img = new Image();
    img.src = home1;
  }, []);
    return(
        <div className="blogpage">
      <h1>Welcome to the New Page</h1>
      <p>This looks like a clean new screen 😎</p>
    </div>
    )
}