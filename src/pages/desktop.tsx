import { AnimatePresence } from "motion/react";

import TaskBar from "../components/taskbar/taskbar"
import DesktopIcon from "../components/desktop-icon/desktop-icon";
import Menu from "../components/menu/menu";
import Window from "../components/window/window";

import ThisPC from "../components/windows/ThisPc/ThisPC";
import Projects from "../components/windows/projects/Projects";
import UnderConstruct from "../components/underConstruction/UnderConstruct";
import Friend from "../components/windows/friend/friend";

import Computer from '../assets/desktop/computer.svg'
import Folder from '../assets/desktop/folder.svg'
import Blog from '../assets/desktop/blog.svg'
import Rocket from '../assets/desktop/rocket.svg'
import Special from '../assets/special.svg';

import '../styles/desktop/desktop.scss';
import { useState } from "react";

export default function Desktop(){
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showThisPC, setShowThisPC] = useState<boolean>(false);
    const [showWarn, setShowWarn] = useState<boolean>(false);    
    const [showProjects, setShowProjects] = useState<boolean>(false);
    const [showFriend, setShowFriend] = useState<boolean>(false);

    return(
            <main className="desktop">

                {/*Mostra o menu*/}
                <AnimatePresence>
                    {showMenu && <Menu/>}
                </AnimatePresence>   

                {/*Mostra aviso de "Em construção*/}
                <AnimatePresence>
                    {showWarn && 
                        <Window
                            windowName="Em Construção..."
                            width={"500px"}
                            height={"fit-content"}
                            windowContent={<UnderConstruct/>}
                            top={'25%'}
                            left={'30%'}
                            close={setShowWarn}
                        />
                    }
                </AnimatePresence>

                {/*Mostra o programa "Este PC"*/}    
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

                {/*Mostra a pasta de projetos*/}        
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
    
                <AnimatePresence>
                    {showFriend && <Window
                        windowName="Fábio - Amigo"
                        width={'100%'}
                        height={'calc(100% - 8rem'}
                        windowContent={<Friend/>}
                        top={0}
                        left={0}
                        close={setShowFriend}
                    />}
                </AnimatePresence>

                

                {/*Mostra os ícones no desktop*/}        
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
                            <DesktopIcon icon={Folder} name="Projetos" alt="Ícone da pasta de Projetos"/>
                        </div>
                        <div onClick={() => {setShowWarn(true)}}>
                            <DesktopIcon icon={Folder} name="Jogos" alt="Ícone da pasta de Jogos"/>
                        </div>
                    </div>
                    <div className="column">    
                        <div onClick={() => setShowWarn(true)}>
                            <DesktopIcon icon={Rocket} name="Spacier" alt="Ícone de foguete"/>
                        </div>
                        <div onClick={() => setShowWarn(true)}>
                            <DesktopIcon icon={Blog} name="Blog" alt="Ícone de uma página web"/>
                        </div>
                        <div onClick={() => setShowFriend(true)}>
                            <DesktopIcon icon={Special} name="Fábio" alt="Ícone de brilhos, para um amigo especial"/>
                        </div>
                    </div>
                </section>
                <TaskBar showMenu={showMenu} setShowMenu={setShowMenu}/>
            </main>
    )
}