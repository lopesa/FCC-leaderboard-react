var React = require('react');
var ReactDOM = require('react-dom');
// var Styles = require('./scss/main.scss'); // es5
import './scss/main.scss'; // es6

var Main = React.createClass({
	getInitialState: function(){
		return {
			data: 'farts over here'
    }
  },

  componentDidMount: function() {
  	// console.log('you can kick it like this?')
  	this.serverRequest = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  	.then(function(response) {
			return response.json()
		})
		.then(function(json) {
			// console.log(json);
			this.setState({
				data: json
			});
		}.bind(this));


  },
  
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

	render: function() {

			console.log(this.state.data)
		return (
			<div className="test">
				farts
				
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));