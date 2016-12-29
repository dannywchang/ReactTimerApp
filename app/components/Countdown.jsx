var React = require('react');
var Clock = require('Clock');
var Countdown = ()=> {
  return (
    <div>
      <Clock totalSeconds={120}/>
    </div>
  );
};

module.exports = Countdown;
