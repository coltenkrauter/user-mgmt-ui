import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './index.css';
import Footer from '../widgets/footer';
import Header from '../widgets/header';
import { updateSettings } from '../../redux/settings';

const Component = () => {
  const dispatch = useDispatch();
  const showVideo = true;
  const youtubelink = 'https://www.youtube.com/embed/et98j5MniGI';

  useEffect(()=>{
    dispatch(updateSettings());
  }, [dispatch]);

  return (
    <>
        <Header />
        <div className='content'>
          {!showVideo && 
            <img src="/static/wedding.jpg" alt="Micah and Lynne" className="photo effect6" />
          }
          {showVideo && 
            <iframe className='vid' src={youtubelink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          }
        </div>
        <Footer />
    </>
  );
}

export default Component;
