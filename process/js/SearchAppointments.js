var React = require('react');

var SearchAppointments = React.createClass({
  render: function() {
    return(
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchApts" placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
            <div className="input-group-btn">
              <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#" id="petName">Pet Name { (this.props.orderBy === 'petName') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li><a href="#" id="aptDate">Date { (this.props.orderBy === 'aptDate') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li><a href="#" id="ownerName">Owner { (this.props.orderBy === 'ownerName') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" id="asc">Asc { (this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                  <li><a href="#" id="desc">Desc { (this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    ) // return
  } // render
}); //SearchAppointments

module.exports = SearchAppointments;
