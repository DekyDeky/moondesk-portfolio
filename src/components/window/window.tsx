import Close from '../../assets/window/close.svg'

import './window.scss';

interface windowProps {
    windowName: string;
    windowContent: React.ReactElement;
    width: number | string;
    height: number | string;
}

export default function Window({windowName, windowContent, width, height}: windowProps){



    const widthWindow: React.CSSProperties = {
        width,
        height,
    }

    return (
        <main className='window'  style={widthWindow}>
            <header className='window-tab'>
                <h4 className='window-tab-name'>{windowName}</h4>
                <img className='window-tab-close' src={Close} alt="" />
            </header>
            <div className="window-border">
                <main className='window-content'>
                    {windowContent}
                </main>
            </div>
        </main>
    )
}