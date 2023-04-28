import React, { useEffect, useState } from 'react';

import { Resizable, ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import 'react-resizable/css/styles.css';
import {DialogStyle} from './DialogStyle'


interface Props {
    isOpen: boolean;
    handleOk?: Function;
    handleCancel?: Function;
    children?: React.ReactNode;
    initialWidth?: number;
    initialHeight?: number;
}

const Dialog: React.FC<Props> = ({ 
    isOpen,
    handleOk = () => null,
    handleCancel = () => null,
    children = '',
    initialWidth = 500,
    initialHeight = 500
}) => {

    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const [width, setWidth] = React.useState(initialWidth);
    const [height, setHeight] = React.useState(initialHeight);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsModalOpen(isOpen)
    }, [isOpen])
    

    const handleDrag = (e: any, { x, y }: any ) => {
        setPosition({ x, y });
      };
    
    const onResize = (event: any, {size}: any) => {
        setWidth(size.width);
        setHeight(size.height);
    };

    const onHandleOk = () => {
        setIsModalOpen(false);
        handleOk && handleOk()
    };

    const onHandleCancel = () => {
        setIsModalOpen(false);
        handleCancel && handleCancel()
    };

    return (
<Draggable handle=".handle" onDrag={handleDrag}>
<DialogStyle
                open={isModalOpen}
                onOk={onHandleOk}
                onCancel={onHandleCancel}
                footer={null}
            >
                <ResizableBox className="box" onResize={onResize} width={width} height={height} draggableOpts={{ enableUserSelectHack: false }}>
                {children}
                </ResizableBox>
                
            </DialogStyle>
</Draggable>



    );
};

export default Dialog;