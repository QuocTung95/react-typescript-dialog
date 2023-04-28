import Discover from '../../components/Discover/Discover'
import SearchBox from '../../components/SearchBox/SearchBox'
import Dialog from '../../components/Dialog/Dialog'
import { useState } from 'react';

const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const onClick = () => {
        setisOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={()=>onClick()} style={{marginTop: 20}}>Open Dialog</button>
            <Dialog isOpen={isOpen} handleCancel={()=>onClick()}>
                
                <SearchBox />
                <Discover />
            </Dialog>

        </div>
    );
};

export default Home;