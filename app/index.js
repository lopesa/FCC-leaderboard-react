var React = require('react');
var ReactDOM = require('react-dom');
// var Styles = require('./scss/main.scss'); // es5
import './scss/main.scss'; // es6
import Header from './header.js';
import Renderer from './renderer.js';
import Fetchbar from './fetchbar.js';



var Main = React.createClass({
	getInitialState: function(){
		return {
			students: ''
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
				students: json
			});
		}.bind(this));


  },
  
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

	render: function() {

			// console.log(this.state.students)
		
		return (
			<div className='main-container'>
				<Header />
				<Fetchbar />
				<Renderer students={this.state.students} />
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));