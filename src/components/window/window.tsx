import { motion } from 'motion/react';

import Close from '../../assets/window/close.svg'

import './window.scss';

interface windowProps {
    windowName: string;
    windowContent: React.ReactElement;
    width: number | string;
    height: number | string;
    top: number | string;
    left: number | string;
    close: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Window({windowName, windowContent, width, height, top, left, close}: windowProps){



    const widthWindow: React.CSSProperties = {
        width,
        height,
        top: top,
        left: left
    }

    return (
        <motion.main className='window'  style={widthWindow}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity: 0, scale: 0}}
        >
            <header className='window-tab'>
                <h4 className='window-tab-name'>{windowName}</h4>
                <div onClick={() => close(false)}>
                    <img className='window-tab-close' src={Close} alt="" />
                </div>
            </header>
            <div className="window-border">
                <main className='window-content'>
                    {windowContent}
                </main>
            </div>
        </motion.main>
    )
}