
import { register } from "swiper/element/bundle";
import Router from './Router'
import { Suspense } from 'react'
import Founder from './pages/Founder'
import "swiper/css";

// register Swiper custom elements
register();

function App() {
  return (
    <div className='text-white'>
      <Suspense fallback={<Founder loading />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
