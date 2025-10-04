import TaskBar from "../components/taskbar/taskbar"
import DesktopIcon from "../components/desktop/desktop-icon";

import Computer from '../assets/desktop/computer.svg'
import Folder from '../assets/desktop/folder.svg'
import Blog from '../assets/desktop/blog.svg'
import Rocket from '../assets/desktop/rocket.svg'

import '../styles/desktop/desktop.scss';

export default function Desktop(){
    return(
        <main className="desktop">
            <section className="desktop-icons">
                <div className="column">
                    <DesktopIcon icon={Computer} name="Este PC" alt="Ícone de um computador"/>
                    <DesktopIcon icon={Folder} name="Projetos" alt="Ícone de uma pasta"/>
                    <DesktopIcon icon={Blog} name="Blog" alt="Ícone de uma página web"/>
                </div>
                <div className="column">    
                    <DesktopIcon icon={Rocket} name="Spacier" alt="Ícone de foguete"/>
                </div>
            </section>
            <TaskBar/>
        </main>
    )
}