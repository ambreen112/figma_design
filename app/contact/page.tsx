import style from "/style/global.module.css";
import Image from "next/image";



export default function Footer(){
    return(
      <footer className={style.footer}>
        <div className={style.container4}>
            <div className={style.footer_social_list}> 
                <Image src={"/icons.png"} alt="icons" width={300} height={200}/>
        </div>
            <div className={style.footer_social}>Copyright ©2020 All rights reserved</div>
        </div>
      </footer>
    )
}