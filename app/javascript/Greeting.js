import React, { useEffect, useState } from 'react';

function Greeting() {
  // const [randomGreeting, setRandomGreeting] = useState('');

  // useEffect(() => {
  //   fetch('/api/random_greeting')
  //     .then((response) => response.json())
  //     .then((data) => setRandomGreeting(data));
  // }, []);

  return (
    <div>
      <h1>Random Greeting:</h1>
      {/* <p>{randomGreeting}</p> */}
    </div>
  );
}

export default Greeting;