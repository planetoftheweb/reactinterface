var React = require('react');

var AptList = React.createClass ({
  getDefaultProps: function() {
  },

  handleDelete: function(e) {
    this.props.onDelete(this.props.whichItem)
  },

  getFormattedDate: function formatDate(dateString) {
    var myDate = new Date(dateString),
        month = myDate.getMonth()+1,
        day = myDate.getDate(),
        year = myDate.getFullYear(),
        hours = myDate.getHours(),
        minutes = myDate.getMinutes(),
        meridien;

    if (hours >= 12) { meridien = 'PM' } else { meridien = 'AM' };
    hours = hours % 12;
    if (hours===0) { hours = 12 }
    if ( minutes < 10 ) { minutes = '0' + minutes };

    return  month + "/" + day + "/" + year + " " + hours + ':' + minutes + ' ' + meridien;
  },

  render: function() {
    return(
      <li className="pet-item media">
        <div className="media-left">
          <button className="pet-delete btn btn-xs btn-danger" onClick={ this.handleDelete }><span className="glyphicon glyphicon-remove"></span></button>
        </div>
        <div className="pet-info media-body">
          <div className="pet-head">
            <span className="pet-name">{ this.props.singleItem.petName }</span>
            <span className="apt-date pull-right">{ this.getFormattedDate(this.props.singleItem.aptDate) }</span>

          </div>
          <div className="owner-name"><span className="label-item">Owner:</span> { this.props.singleItem.ownerName }</div>
          <div className="apt-notes">{ this.props.singleItem.aptNotes }</div>
        </div>
      </li>
    )
  }
});

module.exports = AptList;
