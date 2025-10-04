import type { Dispatch, SetStateAction } from 'react';

import './taskbar.scss';

import Logo from '../../assets/taskbar/taskbar-icon.svg';
import Internet from '../../assets/taskbar/internet-icon.svg'

interface menuProp {
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export default function TaskBar({showMenu, setShowMenu}: menuProp){
    return(
        <main className='taskbar'>
            <section className='taskbar-menu_btn' onClick={() => {
                setShowMenu(!showMenu);
            }}>
                <img className='taskbar-menu_btn-logo taskbar-icon' src={Logo} alt=""/>
            </section>
            <section className='taskbar-apps'>

            </section>
            <section className='taskbar-notification'>
                <img className='taksbar-notification-internet taskbar-icon' src={Internet} alt="" />
                <div className="taskbar-datetime">
                    <div className="taskbar-time">19:45 PM</div>
                    <div className='tasbar-date'>05/10/2025</div>
                </div>
            </section>
        </main>
    )
}
