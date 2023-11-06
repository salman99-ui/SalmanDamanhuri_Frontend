import React, { useEffect, useState } from 'react';

function Msw() {
  const [x, setX] = useState(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((result) => setX(true));
  }, []);
  return <div>{x && <h1>Success</h1>}</div>;
}

export default Msw;
