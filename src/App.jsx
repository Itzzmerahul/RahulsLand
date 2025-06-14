import { BrowserRouter,Route,Routes } from "react-router-dom"
import MainPage from "./components/MainPage"
import Navbar from "./components/Navbar"
import Blogpage from "./components/Blogpage"
import Cli from "./components/Cli"



export default function App(){
  return(
    <BrowserRouter basename="/RahulsLand">
    <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/blogpage" element={<Blogpage />}/>
      <Route path="cli" element={<Cli />}/>
    </Routes>
    </BrowserRouter>
  )
}