import './index.scss'
import imageUrl from '../../assets/images/logo-p.png'
import Loader from 'react-loaders';

const Project = () => {
    return (
        <>
            <div className='project-section'>
                    <h1 className='heading'> Projects </h1>
                    <div className="project-card">
                        <div className="card-image">
                            <img src={imageUrl} alt='image' />
                        </div>
                        <div className="card-content">
                            <h3>Image Processing Software</h3>
                            <p>lorem ipsum asbasoidbasdhfb alsdasdfasdfasdfasdac  afasv asfa vavas fa sdfasdf asdfa sdfdsa gbdfgbsth s sh htafgafgasdfasd ysgdfyas fgasyfgfas faysdgf asdfiu asdifugasdiu fasdhufha sfiuasgfa sjdfba uihrvasjfnva aiusfha dsvnasdjv hasui agusahfusdh ufha sdufh asudfiha fasahf ausdhf au</p>
                            <a href='#' target="_blank" rel="noopener noreferrer">
                                Github Link
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="card-image">
                            <img src={imageUrl} alt='image' />
                        </div>
                        <div className="card-content">
                            <h3>Image Processing Software</h3>
                            <p>lorem ipsum asbasoidbasdhfb alsdasdfasdfasdfasdac  afasv asfa vavas fa sdfasdf asdfa sdfdsa gbdfgbsth s sh htafgafgasdfasd ysgdfyas fgasyfgfas faysdgf asdfiu asdifugasdiu fasdhufha sfiuasgfa sjdfba uihrvasjfnva aiusfha dsvnasdjv hasui agusahfusdh ufha sdufh asudfiha fasahf ausdhf au</p>
                            <a href='#' target="_blank" rel="noopener noreferrer">
                                Github Link
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="card-image">
                            <img src={imageUrl} alt='image' />
                        </div>
                        <div className="card-content">
                            <h3>Image Processing Software</h3>
                            <p>lorem ipsum asbasoidbasdhfb alsdasdfasdfasdfasdac  afasv asfa vavas fa sdfasdf asdfa sdfdsa gbdfgbsth s sh htafgafgasdfasd ysgdfyas fgasyfgfas faysdgf asdfiu asdifugasdiu fasdhufha sfiuasgfa sjdfba uihrvasjfnva aiusfha dsvnasdjv hasui agusahfusdh ufha sdufh asudfiha fasahf ausdhf au</p>
                            <a href='#' target="_blank" rel="noopener noreferrer">
                                Github Link
                            </a>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="card-image">
                            <img src={imageUrl} alt='image' />
                        </div>
                        <div className="card-content">
                            <h3>Image Processing Software</h3>
                            <p>lorem ipsum asbasoidbasdhfb alsdasdfasdfasdfasdac  afasv asfa vavas fa sdfasdf asdfa sdfdsa gbdfgbsth s sh htafgafgasdfasd ysgdfyas fgasyfgfas faysdgf asdfiu asdifugasdiu fasdhufha sfiuasgfa sjdfba uihrvasjfnva aiusfha dsvnasdjv hasui agusahfusdh ufha sdufh asudfiha fasahf ausdhf au</p>
                            <a href='#' target="_blank" rel="noopener noreferrer">
                                Github Link
                            </a>
                        </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>



    );
}

export default Project;