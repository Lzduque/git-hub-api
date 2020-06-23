import React, {
  useState,
  useEffect
} from 'react';
import './styles/index.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rates, setRates] = useState(null);
  const [usd, setUSD] = useState(0);

  useEffect(() => {
    fetch("https://t")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setRates(result.rates);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div>
      <div className="header">
        <h1> Header </h1>
        <p> Resize the browser window to see the responsive effect.
        </p>
      </div>  `
      <div className="row">
        <div className="column">
          <h2> Column </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sit amet pretium urna.Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit.Praesent scelerisque tortor sed accumsan convallis.</p>
        </div>
      <div className = "column">
        <h2> Column </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sit amet pretium urna.Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit.Praesent scelerisque tortor sed accumsan convallis.</p>
      </div>

    </div>
  </div>
  );
}


export default App;