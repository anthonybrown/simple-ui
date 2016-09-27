var React    = require('react');
var ReactDOM = require('react-dom');
var _        = require('lodash');

var AptList            = require('./AptList');
var AddAppointment     = require('./AddAppointment');
var SearchAppointments = require('./SearchAppointments');

var MainInterface = React.createClass({
  getInitialState: function () {
    return {
      aptBodyVisible: false,
      orderBy: 'petName',
      orderDir: 'asc',
      myAppointments: [] // end of data object
    } // return getInitialState
  }, // getInitialState

  componentDidMount: function () {
    this.serverRequest = $.get('./js/data.json', function (result) {
      var tempApts = result;
      this.setState({
        myAppointments: tempApts
      }); //setState
    }.bind(this));
  }, // componentDidMount method

  componentWillUnmount: function () {
    this.serverRequest.abort();
  }, // componentWillUnmout method

  deleteMessage: function (item) {
    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    }); // setState
  }, // deleteMessage method

  toggleAddDisplay: function() {
    var tempVisibility = !this.state.aptBodyVisible;
    this.setState({
      aptBodyVisible: tempVisibility
    }); // setState
  }, // toggleAddDisplay

  addItem: function (tempItem) {
    var tempApts = this.state.myAppointments;
    tempApts.push(tempItem);
    this.setState({
      myAppointments: tempApts
    });
  },

  render: function () {
    var filteredApts = this.state.myAppointments;
    var orderBy      = this.state.orderBy;
    var orderDir     = this.state.orderDir;

    filteredApts = _.orderBy(filteredApts, function (item) {
      return item[orderBy].toLowerCase();
    }, orderDir); //orderBy

    filteredApts = filteredApts.map(function (item, index) {
      return (
        <AptList key = {index}
          singleItem = {item}
          whichItem  = {item}
          onDelete   = {this.deleteMessage}  />
      )
    }.bind(this))// filteredApts.map

    return (
      <div className='interface'>
        <AddAppointment
          bodyVisible = { this.state.aptBodyVisible }
          handleToggle = { this.toggleAddDisplay }
          addApt = { this.addItem }
        />
        <SearchAppointments
          orderBy = { this.state.orderBy }
          orderDir = { this.state.orderDir }
        />
        <ul className='item-list media-list'>{ filteredApts }</ul>
      </div>
    ) // return
  } // render
}); // MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
); // render
