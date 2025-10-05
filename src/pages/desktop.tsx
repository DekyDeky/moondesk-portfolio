import { DndContext, useDroppable, DragOverlay } from "@dnd-kit/core";
import { AnimatePresence } from "motion/react";

import TaskBar from "../components/taskbar/taskbar"
import DesktopIcon from "../components/desktop-icon/desktop-icon";
import Menu from "../components/menu/menu";
import Window from "../components/window/window";

import Computer from '../assets/desktop/computer.svg'
import Folder from '../assets/desktop/folder.svg'
import Blog from '../assets/desktop/blog.svg'
import Rocket from '../assets/desktop/rocket.svg'

import '../styles/desktop/desktop.scss';
import { useState } from "react";

import type { PositionProp } from "../interfaces/positionProp";

export default function Desktop(){
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [position, setPosition] = useState<PositionProp>({x: 0, y: 0});

    const handlePosition = (e:any) => {
        const {x, y} = e.delta;
        setPosition( prevPosition => {
            return {
                x: prevPosition.x + x,
                y: prevPosition.y + y
            }
        })
    }

    const {setNodeRef} = useDroppable({
        id: 'thisPC',
    })

    return(
            <DndContext onDragEnd={handlePosition} onDragMove={handlePosition}>
                <main className="desktop" ref={setNodeRef}>
                    <AnimatePresence>
                        {showMenu && <Menu/>}
                    </AnimatePresence>
                    

                        <Window 
                            windowName="Este PC" 
                            width={"25vw"} 
                            height={"50vh"}
                            windowContent={<p>Conteúdo da janela</p>} 
                            position={position}
                        />   

                    


                    <section className="desktop-icons" onClick={() =>{
                        if(showMenu){
                            setShowMenu(!showMenu)
                        }
                    }} >

                        <div className="column">
                            <DesktopIcon icon={Computer} name="Este PC" alt="Ícone de um computador"/>
                            <DesktopIcon icon={Folder} name="Projetos" alt="Ícone de uma pasta"/>
                            <DesktopIcon icon={Blog} name="Blog" alt="Ícone de uma página web"/>
                        </div>
                        <div className="column">    
                            <DesktopIcon icon={Rocket} name="Spacier" alt="Ícone de foguete"/>
                        </div>
                    </section>
                    <TaskBar showMenu={showMenu} setShowMenu={setShowMenu}/>
                </main>
            </DndContext>
    )
}