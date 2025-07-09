import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/';
import './index.scss'
import { SectionProvider } from '../../SectionContext';

const Layout = () => {
    return (
        <SectionProvider>
            <div className='App'>
                <Sidebar />
                <div className='page'>
                    <span className='tags top-tags'>
                    </span>
                    <Outlet />
                    <span className='tags bottom-tags'> 
                        <br />
                        <span className='bottom-tag-html'></span>
                    </span>
                </div>
            </div>
        </SectionProvider>
    )
}

export default Layout;