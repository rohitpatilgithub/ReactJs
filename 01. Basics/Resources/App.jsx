import { useEffect, useState } from "react";

const Card = ({title}) => {

  const [count, setCount] = useState(0);
  const [hasLiked,setHasLiked] = useState(false);
  
  useEffect(() => {
    console.log(`Movie ${title} has been liked : ${hasLiked}`)
  },[hasLiked]);

  return (
    <div className="card" onClick={() => setCount((prevState) => prevState+1)}>
      <h2>{title} {count || null}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

function App() {

  return (
    <div className="card-container">
      <h2>Function Component</h2>
      <Card title="Star wars"/>
      <Card title="Batman"/>
      <Card title="Spiderman"/>
    </div>
  );
}

export default App;
