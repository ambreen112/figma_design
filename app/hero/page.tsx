import style from "/style/global.module.css";
import Image from "next/image";


export default function Hero(){
    return(
        <div className={style.hero}>
        <div className={style.contain}>
         <section className={style.heroContainer}>
           <div className={style.textContainer}>
            <h1 className={style.head1}>Hi, I am John,<br/> Creative Tecnologist</h1>
            
            
            <p className={style.para}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/> 
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br/> 
            consequat sunt nostrud amet.</p>
            <button className={style.button}> Download Resume</button>
     </div>
     
     <div className={style.image}>
             <Image src={"/hero.png"} alt="man" height={200} width={200}/>
            </div>
     </section>
     </div>
     </div>
    )
}