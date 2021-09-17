import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './index.css';
import Footer from '../widgets/footer';
import Header from '../widgets/header';
import { updateSettings } from '../../redux/settings';

const Component = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(updateSettings());
  }, [dispatch]);
    let showVideo = false;
  return (
    <>
        <Header />
        <div className='content'>

          {showVideo && <iframe className='vid' src="https://www.youtube.com/embed/gbJx5NtQj6g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}

      </div>
        <Footer />
    </>
  );
}

export default Component;
