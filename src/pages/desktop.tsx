import { AnimatePresence } from "motion/react";

import TaskBar from "../components/taskbar/taskbar"
import DesktopIcon from "../components/desktop-icon/desktop-icon";
import Menu from "../components/menu/menu";
import Window from "../components/window/window";

import ThisPC from "../components/windows/ThisPc/ThisPC";
import Projects from "../components/windows/projects/Projects";

import Computer from '../assets/desktop/computer.svg'
import Folder from '../assets/desktop/folder.svg'
import Blog from '../assets/desktop/blog.svg'
import Rocket from '../assets/desktop/rocket.svg'

import '../styles/desktop/desktop.scss';
import { useState } from "react";

export default function Desktop(){
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showThisPC, setShowThisPC] = useState<boolean>(false);
    const [showProjects, setShowProjects] = useState<boolean>(false);

    return(
            <main className="desktop">
                
 
                <AnimatePresence>
                    {showMenu && <Menu/>}
                </AnimatePresence>   

                <AnimatePresence>
                    {showThisPC && <Window 
                        windowName="Este PC" 
                        width={"725px"} 
                        height={'fit-content'}
                        windowContent={<ThisPC/>} 
                        top={'10%'}
                        left={'30%'}
                        close={setShowThisPC}
                    />   }
                </AnimatePresence>

                <AnimatePresence>          
                    {showProjects && <Window
                        windowName="Projetos"
                        width={'100%'}
                        height={'calc(100% - 8.5rem - 45px)'}
                        windowContent={<Projects/>}
                        top={0}
                        left={0}
                        close={setShowProjects}
                        nav={true}
                    />}
                </AnimatePresence>  
                


                <section className="desktop-icons" onClick={() =>{
                    if(showMenu){
                        setShowMenu(!showMenu)
                    }
                }} >



                    <div className="column">
                        <div onClick={() => {setShowThisPC(true)}}>
                            <DesktopIcon icon={Computer} name="Este PC" alt="Ícone de um computador"/>
                        </div>
                        <div onClick={() => {setShowProjects(true)}}>
                            <DesktopIcon icon={Folder} name="Projetos" alt="Ícone de uma pasta"/>
                        </div>
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