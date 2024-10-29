
import Link from "next/link";
import style from "/style/global.module.css";


export default function Navbar(){
    return(
      <div className={style.main_container}>
      
        <nav className={style.nav}>
      
      <ul className={style.container}>
        <li>
            <Link href="#work">Works</Link>
            </li>
      
    <li> 
        <Link href="#blog">Featured</Link>
        </li>
        <li>
      <Link href="#contact">Footer</Link>
      </li>
      </ul>
    </nav>
    
    </div>
    
    )
}