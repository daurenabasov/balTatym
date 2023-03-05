import React, { Suspense, useEffect, useState } from 'react';
import RoutesApp from '../Routes/RoutesApp';
import Loader from '../Components/UI/Loader/Loader';

const App = () => {

  const [loader, setLoader] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2000);
  }, []);

  return (
    <div>

      {loader ? (
        <RoutesApp />
      ) : (<Loader />)}
    </div>
  );
};

export default App;