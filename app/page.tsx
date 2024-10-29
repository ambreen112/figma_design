

import style from "/style/global.module.css";
import Hero from "./hero/page";
import Blogs from "./blog/page";
import Featured from "./work/page";
import Footer from "./contact/page";


export default function Home() {
  
  return (
    <div >
      
      <Hero/>
      <Blogs/>
      <Featured/>
      <Footer/>

  
    
</div>
  )
}