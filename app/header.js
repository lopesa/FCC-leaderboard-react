var React = require('react');

var Header = React.createClass({
  
  render: function(){
    return (
      <div className='header'>
      	<h1>Free Code Camp Brownie Points Leaderboard</h1>
	      <div className='buttons'>
	        <button id='recent'
            className={this.props.activeList === 'recent' ? 'active' : ''}
            onClick={this.props.toggleList}>
            Recent
          </button>
	        <button id='allTime'
            className={this.props.activeList === 'allTime' ? 'active' : ''}
            onClick={this.props.toggleList}>
            All Time
          </button>
	      </div>
      </div>
    ) 
	}
});


module.exports = Header;