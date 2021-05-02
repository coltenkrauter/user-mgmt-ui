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

      <iframe src="https://www.youtube.com/embed/j9mJkvJEE1k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br /><br />
Join a memorial service for Valerie Othus. 

Please share memories here: <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2JUeUZkWkRzMmIwWmdlRGJjWVF1RVB2Smp2d3xBQ3Jtc0tsckNHc0tGSExSN2VDYWlLVjVUUTB2bWJNRU54S1RrelZnWVRiT0MwSU9sOGd0VUF6SlVVbjZmUURsZUJDMEhna09RWVR0Z3ZnTTNvYUcxby1xZVdkbVNwQUgyb1lXQzhqLWt5TmR1OHliaWNrTmRDSQ&q=https%3A%2F%2Fobituaries.neptunesociety.com%2Fobituaries%2Ftacoma-wa%2Fvalerie-othus-10138907" target="_blank">https://obituaries.neptunesociety.com...</a>
      </div>
        <Footer />
    </>
  );
}

export default Component;
