import React from "react";
import moment from "moment-timezone";
function Date(){
const [fromdate, setFromDate] = React.useState("");
const [todate, setToDate] = React.useState("");
    return (
      <div>
        <div>
          <text className="text-date">from Date</text>
          <input
            className="input-date"
            onChange={(e) => {
              setFromDate(e.target.value);
            }}
            value={fromdate}
            type="datetime-local"
          ></input>
        </div>
        <text className="text-date">Duration(Hours)</text>
        <input
          className="input-date"
          type="number"
          onChange={(e) => {
            let duration = e.target.value;
            var status = moment(fromdate)
              .add(duration, "hours")
              .format("YYYY-MM-DD hh:mm");
            setToDate(moment(status).format("YYYY-MM-DDThh:mm"));
          }}
        ></input>
        <div>
          <text className="text-date">toDate</text>
          <input
            className="input-date"
            value={todate}
            type="datetime-local"
          ></input>
        </div>
      </div>
    );
}
export default Date;