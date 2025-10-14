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
    close: React.Dispatch<React.SetStateAction<boolean>>;
    nav?: boolean;
}

export default function Window({windowName, windowContent, width, height, close, nav = false}: windowProps){



    const widthWindow: React.CSSProperties = {
        width,
        height,
    }

    const centralizeWindow: React.CSSProperties = {
        left: 0, 
        right: 0, 
        top: 0,
        bottom: 0,
        margin: 'auto',
    }

    const finalStyle: React.CSSProperties = {
        ...widthWindow,
        ...(width !== '100%' ? centralizeWindow : {}),
    };

    return (
        <motion.main className='window' style={finalStyle}
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
                        <img className='window-tab-nav-arrow right-arrow' src={ArrowRight} alt="" />
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