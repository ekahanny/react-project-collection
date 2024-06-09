import React from 'react';
import bgImage from './assets/bg-cafe.jpg';
import ProductPages from './pages/products';

function App() {

  const background = () => {
    return {
      backgroundImage: `url(${bgImage})`,
      height: '280px',
      width: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
  };

  return (
    <>
      <div style={background()}>
      </div>
        <ProductPages/>
    </>
  );
}

export default App;
