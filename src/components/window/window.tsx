import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import Close from '../../assets/window/close.svg'

import './window.scss';

import type { PositionProp } from '../../interfaces/positionProp';

interface windowProps {
    windowName: string;
    windowContent: React.ReactElement;
    width: number | string;
    height: number | string;
    position: PositionProp;
}

export default function Window({windowName, windowContent, width, height, position}: windowProps){

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'unique-id',
    });

    const widthWindow: React.CSSProperties = {
        width,
        height,
    }

    const draggableStyle = transform ? {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  } : undefined;

    return (
        <main className='window' ref={setNodeRef} style={{...widthWindow, ...draggableStyle}} {...listeners} {...attributes}>
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