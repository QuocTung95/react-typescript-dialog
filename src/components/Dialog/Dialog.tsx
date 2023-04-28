import React, { useEffect, useState } from 'react';

import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { DialogStyle } from './DialogStyle'


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
    initialWidth = 900,
    initialHeight = 700
}) => {

    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const [width, setWidth] = React.useState(initialWidth);
    const [height, setHeight] = React.useState(initialHeight);

    useEffect(() => {
        setIsModalOpen(isOpen)
    }, [isOpen])



    const onResize = (event: any, { size }: any) => {
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
        <>

                <DialogStyle
                    open={isModalOpen}
                    onOk={onHandleOk}
                    onCancel={onHandleCancel}
                    footer={null}
                    width={width}
                >
                    <ResizableBox className="box" onResize={onResize} width={width} height={height} draggableOpts={{ enableUserSelectHack: false }}>
                        {children}
                    </ResizableBox>

                </DialogStyle>
        </>




    );
};

export default Dialog;