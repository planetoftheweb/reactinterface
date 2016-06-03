var React = require('react');
var ReactDOM = require('react-dom');

var _ = require('lodash');

var AptList = require('./AptList');
var AddAppointment = require('./AddAppointment');
var SearchAppointments = require('./SearchAppointments');

var MainInterface = React.createClass({

  getInitialState: function() {
    var orderBy = 'petName';
    var orderDir = 'asc';
    var queryText = '';
    var data = '';

    data = _.orderBy(data, orderBy, orderDir)

    return {
      aptBodyVisible : false,
      orderBy: orderBy,
      orderDir: orderDir,
      queryText: queryText,
      myAppointments: data
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function (result) {
      var tempApts = result;
      this.setState({
        myAppointments: tempApts
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  addItem: function(tempItem) {
    var tempApts = this.state.myAppointments;
    tempApts.push(tempItem);
    this.setState({
      myAppointments: tempApts
    });
  },

  deleteMessage: function(item) {
    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    });
  },

  toggleAddDisplay: function() {
    var tempVisibility = !this.state.aptBodyVisible;
    this.setState({
      aptBodyVisible: tempVisibility
    });
  },

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });
  },

  searchApts: function(q) {
    this.setState({
      queryText: q
    });
  },

  render: function() {
    var aptBodyVisible = this.state.aptBodyVisible;
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var myAppointments = this.state.myAppointments;
    var queryText = this.state.queryText;
    var filteredApts = [];

    myAppointments.forEach(function(item){
      if(item.petName.toLowerCase().indexOf(queryText)!=-1)
      filteredApts.push(item);
    });

    filteredApts = _.orderBy(filteredApts,
      function (item) {
        return item[orderBy].toLowerCase();
      }, orderDir)

    filteredApts = filteredApts.map(function(item, index) {
      return (
          <AptList key = { index }
            whichItem = { item }
            singleItem = { item }
            onDelete = { this.deleteMessage } />
      )
    }.bind(this));


    return (
      <div className="interface">
        <AddAppointment
          bodyVisible={ this.state.aptBodyVisible }
          handleToggle={ this.toggleAddDisplay }
          addApt={ this.addItem }
          />
        <SearchAppointments
          orderBy = { this.state.orderBy }
          orderDir = { this.state.orderDir }
          onReOrder = { this.reOrder }
          onSearch = { this.searchApts }
           />
        <ul className="item-list thing media-list">{ filteredApts }</ul>
      </div>
    )
  }
});

ReactDOM.render(
  <MainInterface/>,
  document.getElementById('petAppointments')
);
