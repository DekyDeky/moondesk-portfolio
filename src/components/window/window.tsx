import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';

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

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable-window',
    })

    const windowStyle: React.CSSProperties = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        position: 'absolute',
    }

    return (
        <DndContext>
            <main className='window' 
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={{...widthWindow, ...windowStyle}}>
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
        </DndContext>
    )
}