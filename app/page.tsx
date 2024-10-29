//import style from "/style/global.module.css"
import Hero from "./hero/page";
import Blogs from "./blog/page";
import Featured from "./work/page";
import Footer from "./contact/page";
import Navbar from "./navbar/page";


export default function Home() {
  
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Blogs/>
      <Featured/>
      <Footer/>

  
    
</div>
  )
}