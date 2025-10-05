import { AnimatePresence } from "motion/react";

import TaskBar from "../components/taskbar/taskbar"
import DesktopIcon from "../components/desktop-icon/desktop-icon";
import Menu from "../components/menu/menu";
import Window from "../components/window/window";

import ThisPC from "../components/windows/ThisPc/ThisPC";

import Computer from '../assets/desktop/computer.svg'
import Folder from '../assets/desktop/folder.svg'
import Blog from '../assets/desktop/blog.svg'
import Rocket from '../assets/desktop/rocket.svg'

import '../styles/desktop/desktop.scss';
import { useState } from "react";

export default function Desktop(){
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showThisPC, setShowThisPC] = useState<boolean>(false);

    return(
            <main className="desktop">
                <AnimatePresence>
                    {showMenu && <Menu/>}
                </AnimatePresence>
                
                    {showThisPC && <Window 
                        windowName="Este PC" 
                        width={"750px"} 
                        height={"600px"}
                        windowContent={<ThisPC/>} 
                        top={'10%'}
                        left={'30%'}
                        close={setShowThisPC}
                    />   }
                    

                


                <section className="desktop-icons" onClick={() =>{
                    if(showMenu){
                        setShowMenu(!showMenu)
                    }
                }} >

                    <div className="column">
                        <div onClick={() => {setShowThisPC(true)}}>
                            <DesktopIcon icon={Computer} name="Este PC" alt="Ícone de um computador"/>
                        </div>
                        <DesktopIcon icon={Folder} name="Projetos" alt="Ícone de uma pasta"/>
                        <DesktopIcon icon={Blog} name="Blog" alt="Ícone de uma página web"/>
                    </div>
                    <div className="column">    
                        <DesktopIcon icon={Rocket} name="Spacier" alt="Ícone de foguete"/>
                    </div>
                </section>
                <TaskBar showMenu={showMenu} setShowMenu={setShowMenu}/>
            </main>
    )
}