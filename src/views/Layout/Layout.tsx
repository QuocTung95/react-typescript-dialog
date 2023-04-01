import React, {ReactNode} from 'react';
import Header from '../../components/Header/Header';
import {LayoutStyle} from './LayoutStyle'

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <LayoutStyle>
            <Header></Header>
                {children}
        </LayoutStyle>
    );
};

export default Layout;