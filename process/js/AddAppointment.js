var React = require('react');

var AddAppointment = React.createClass({
  render: function () {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading apt-addheading">
          <span className="glyphicon glyphicon-plus"></span>
            Add Appointment
        </div>
        <div className="panel-body">
          <htmlForm className="add-appointment htmlForm-horizontal">
            <div className="htmlForm-group">
              <label className="col-sm-2 control-label" htmlFor="petName">Pet Name</label>
              <div className="col-sm-10">
                <input type="text" className="htmlForm-control"
                  id="petName" ref="inputPetName" placeholder="Pet's Name" />
              </div>
            </div>
            <div className="htmlForm-group">
              <label className="col-sm-2 control-label" htmlFor="petOwner">Pet Owner</label>
              <div className="col-sm-10">
                <input type="text" className="htmlForm-control"
                  id="petOwner" ref="inputOwnerName" placeholder="Owner's Name" />
              </div>
            </div>
            <div className="htmlForm-group">
              <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
              <div className="col-sm-4">
                <input type="date" className="htmlForm-control"
                  id="aptDate" ref="inputAptDate" />
              </div>
              <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
              <div className="col-sm-4">
                <input type="time" className="htmlForm-control"
                  id="aptTime" ref="inputAptTime" />
              </div>
            </div>
            <div className="htmlForm-group">
              <label className="col-sm-2 control-label" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-sm-10">
                <textarea className="htmlForm-control" rows="4" cols="50"
                  id="aptNotes" ref="inputAptNotes" placeholder="Appointment Notes">
                </textarea>
              </div>
            </div>
            <div className="htmlForm-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">
                  Add Appointment
                </button>
              </div>
            </div>
          </htmlForm>
        </div>
      </div>
    )
  }
});

module.exports = AddAppointment;
