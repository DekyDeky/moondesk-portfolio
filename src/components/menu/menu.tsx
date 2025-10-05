import { motion } from "motion/react"

import UserPhoto from '../../assets/menu/user.jpg';
import Warn from '../../assets/warn.svg';
import Shutdown from '../../assets/menu/shutdown.svg';

import './menu.scss'

export default function Menu(){
    return (
        <motion.div className='menu'
            initial={{x: "-50vh"}}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 18 }}
            exit={{ x: "-60vh" }}
        >
            <header className='menu-header'>
                <img className='menu-user-photo' src={UserPhoto} alt="Primeira foto do planeta Terra, tirada em 1966" />
                <h4 className='menu-user-name'>ABINAR - 09</h4>
            </header>
            <main className='menu-main'>
                <img className='warn-icon' src={Warn} alt="Ícone de uma pessoa com uma placa de aviso, um triângulo com uma exclamação dentro." />
                <h2 className='menu-main-title'>Atenção!</h2>
                <h4 className='menu-main-text'>Seção em construção!</h4>
            </main>
            <footer className='menu-footer'>
                <img className='shutdown-icon' src={Shutdown} alt="Botão de desligar" />
            </footer>
        </motion.div>
    )
}