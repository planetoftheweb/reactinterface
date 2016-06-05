var React = require('react');

var AptList = React.createClass({
  render: function() {
    return(
      <li className="pet-item media">
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{this.props.singleItem.petName}</span>
            <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
          </div>
          <div className="owner-name"><span className="label-item">Owner:</span>
          {this.props.singleItem.ownerName}</div>
          <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
        </div>
      </li>
    ) // return
  } // render
}); //AptList

module.exports=AptList;
