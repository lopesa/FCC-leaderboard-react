var React = require('react');

var Renderer = React.createClass({
  render: function(){

    var studentArray = []

    var onClick = function onClick(student) {
      // console.log('https://www.freecodecamp.com/' + student)
      window.location = 'https://www.freecodecamp.com/' + student;
    }

    this.onClick = onClick;

    for (var student in this.props.students) {
      studentArray.push(
        <div className='card' key={student.id} onClick={this.onClick.bind(this, this.props.students[student].username)}>
          <img src={this.props.students[student].img} />
          <div className='info'>
            <div className='userName'>{this.props.students[student].username}</div>
            <div className='allTime'>{this.props.students[student].alltime}</div>
            <div className='recent'>{this.props.students[student].recent}</div>
          </div>
        </div>
        /*<a className='card' href={'https://www.freecodecamp.com/' + this.props.students[student].username}>
          <img src={this.props.students[student].img} />
          <div className='info'>
            <div className='userName'>{this.props.students[student].username}</div>
            <div className='allTime'>{this.props.students[student].alltime}</div>
            <div className='recent'>{this.props.students[student].recent}</div>
          </div>
        </a>*/
      )

    };
    
    return (
      <div className='main-container'>
        {studentArray}
      </div>
    )
  }
})

module.exports = Renderer;