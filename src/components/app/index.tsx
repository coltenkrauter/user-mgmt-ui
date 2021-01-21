import './index.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';

const Component = () => {
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
