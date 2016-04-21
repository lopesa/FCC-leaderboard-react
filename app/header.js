var React = require('react');

var Header = React.createClass({
  render: function(){
  	return (
      <div className='header'>
      	<h1>Free Code Camp Brownie Points Leaderboard</h1>
	      <div className='buttons'>
	        <button className='active'>Recent</button>
	        <button>All Time</button>
	      </div>
      </div>
    ) 
	}
});


module.exports = Header;