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

  return (
    <>
        <Header />
        <div className='content'>
        	Content!
        </div>
        <Footer />
    </>
  );
}

export default Component;
