import React, { useState } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import "./Style.css";

const DatePicker = () => {

  const [date, setdate] = useState(new Date(2022, 9, 15));
  console.log("The Date is", date);

  return (

    <>

      <div className="dateCon">
        <DatePickerComponent
          value={date}
          onChange={(e) => {
            setdate(e.value);
          }}
          placeholder="Enter Date"
        />
      </div>

    </>

  );

};

export default DatePicker;
