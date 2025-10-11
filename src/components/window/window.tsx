import { motion } from 'motion/react';

import Close from '../../assets/window/close.svg'
import ArrowRight from '../../assets/window/arrow-right.svg'
import ArrowLeft from '../../assets/window/arrow-left.svg'
import MagGlass from '../../assets/window/mag-glass.svg'

import './window.scss';

interface windowProps {
    windowName: string;
    windowContent: React.ReactElement;
    width: number | string;
    height: number | string;
    top: number | string;
    left: number | string;
    close: React.Dispatch<React.SetStateAction<boolean>>;
    nav?: boolean;
}

export default function Window({windowName, windowContent, width, height, top, left, close, nav = false}: windowProps){



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
            transition={{ type: "spring", bounce: 0 }}
            exit={{opacity: 0, scale: 0}}
        >
            <header className='window-tab'>
                <div className='window-tab-title'>
                    <h4 className='window-tab-name'>{windowName}</h4>
                    <div onClick={() => close(false)}>
                        <img className='window-tab-close' src={Close} alt="" />
                    </div>
                </div>
                {nav && (
                    <div className='window-tab-nav'>
                        <img className='window-tab-nav-arrow' src={ArrowLeft} alt="" />
                        <img className='window-tab-nav-arrow' src={ArrowRight} alt="" />
                        <div className='window-tab-nav-search'>
                            <h4>
                                :3\desktop\{windowName}
                            </h4>
                        </div>
                        <img className='window-tab-nav-searchbtn' src={MagGlass} alt="" />
                    </div>
                )}
            </header>
            <div className="window-border">
                <main className='window-content'>
                    {windowContent}
                </main>
            </div>
        </motion.main>
    )
}