import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = (props) => {
    const [date, setDate] = useState(null);

    // function changeDate(date) {
        props.dateHandler(date);
    // }
    // useEffect(() => {
        // setDate(date);
    // }, [date]);

    return (
        <DatePicker
            className='filter date-filtrer'
            selected={date}
            onChange={setDate}
            placeholderText="Click to select a date"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="dd.MM.yyyy hh:mm"
        />
    )
}

export default CustomDatePicker;