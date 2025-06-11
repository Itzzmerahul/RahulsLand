import home1 from "../home2.png"


export default function MainPage(){
    return(
        <>
        <h1 className="title">hey there folks! welcome to my land , handcrafted with creative interests and caffeine.</h1>
        <div className="homeimgcontainer">
        <img src={home1} alt="home" className="homeimg" />
        <p className="p1">A pastel hush drapes the gentle room, where morning seeps through softened blind , each ray a whisper, 
        <br /> golden and slow, kissing pale walls with time unlined.</p>
        </div>
        </> 
    )
}