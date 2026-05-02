import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(function() {
    const timer = setInterval(function() {
      setTime(new Date());
    }, 1000);

    return function() {
      clearInterval(timer);
    };
  }, []);

  const hours   = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  const dateStr = time.toLocaleDateString('ro-RO', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
  });

  return (
    <div className="clock-wrap">
      <div className="clock-display">
        <span className="clock-hm">{hours}:{minutes}</span>
        <span className="clock-sec">{seconds}</span>
      </div>
      <p className="clock-date">{dateStr}</p>
    </div>
  );
}

export default Clock;
