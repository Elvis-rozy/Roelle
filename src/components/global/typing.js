import React, { useState, useEffect } from 'react';

function TypingAnimation({p}) {

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < p.length) {
        setText((prevText) => prevText + p[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else { clearInterval(intervalId); }
    }, 80); // adjust the speed of the typing animation

    return () => {
      clearInterval(intervalId);
    };
  }, [index, p]);

  return (
    <p>{text}</p>
  );
}
export default TypingAnimation;