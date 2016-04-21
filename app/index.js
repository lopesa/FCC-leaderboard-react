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
			students: '',
			list: {
				active: 'recent',
				recent: {
					url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
					data: '',
				},
				allTime: {
					url: 'https://fcctop100.herokuapp.com/api/fccusers/top/allTime',
					data: ''
				}
			}
    }
  },

  fetchStudents: function(list) {
  	this.serverRequest = fetch(list.url)
  	
  	.then(function(response) {
			return response.json()
		})
		
		.then(function(json) {
			list.data = json;
			this.setState({
				students: this.state.list.recent.data
			});
		}
		.bind(this));

  },

  componentDidMount: function() {
		this.fetchStudents(this.state.list.recent);
		this.fetchStudents(this.state.list.allTime);
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  toggleList: function toggleList(elem) {

  	if (elem.target.getAttribute('id') === 'recent') {
			// this.setState({students: this.state.list.recent.data});
			// wtf why doesn't this work?! I think the above replaces key and value
			// while below only replaces value. So how to trigger.
			// well 'fixed' it, but still confusing
			this.setState(function() {
				this.state.list.active = 'recent';
				return {students: this.state.list.recent.data}
			})
  	}

  	else if (elem.target.getAttribute('id') === 'allTime') {
  		this.setState(function(){
				this.state.list.active = 'allTime';
				return {students: this.state.list.allTime.data};
			});
  	}
	},

	render: function() {
		return (
			<div className='main-container'>
				<Header activeList={this.state.list.active} toggleList={this.toggleList}/>
				<Fetchbar />
				<Renderer students={this.state.students} />
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));