var React = require('react');

var Renderer = React.createClass({
  render: function(){

    var studentArray = []

    var onClick = function onClick(student) {
      // console.log('https://www.freecodecamp.com/' + student)
      window.location = 'https://www.freecodecamp.com/' + student;
    }

    var recentIcon = '<use xlink:href=#recent />';
    var allTimeIcon = '<use xlink:href=#allTime />';

    this.onClick = onClick;

    for (var student in this.props.students) {
      studentArray.push(
        <div className='card' key={student} onClick={this.onClick.bind(this, this.props.students[student].username)}>
          <img src={this.props.students[student].img} />
          <div className='info'>
            <div className='rank'>{Number(student) + 1}</div>
            <div className='info-block'>
              <div className='user-name'>{this.props.students[student].username}</div>
              <div className='stats'>
                <div className='recent'>
                  <svg className='icon' dangerouslySetInnerHTML={{__html: recentIcon }} />
                  {this.props.students[student].recent}
                </div>
                <div className='all-time'>
                  <svg className='icon' dangerouslySetInnerHTML={{__html: allTimeIcon }} />
                  {this.props.students[student].alltime}
                </div>
              </div>
            </div>
          </div>
        </div>
      )};
    
    return (
      <div className='card-container'>
        {studentArray}
      </div>
    )
  }
})

module.exports = Renderer;