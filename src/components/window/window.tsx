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
        <main className='window'  style={widthWindow}>
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
        </main>
    )
}