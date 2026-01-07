import {  Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
console.log(MONTHS.length)

export default function Clock() {
  const dateStr = createPoll("", 1000, (_) => {
    const datetime = new Date();
    const day = DAYS[datetime.getDay()];
    const date = datetime.getDate();
    const month = MONTHS[datetime.getMonth()];
    const total_hour = datetime.getHours();
    const hour = total_hour % 12;
    const minute = datetime.getMinutes().toString().padStart(2, '0');
    const amPm = total_hour >= 13 ? "PM" : "AM";

    return `${day} ${month} ${date}  ${hour}:${minute} ${amPm}`
  })

  return (
    <menubutton name="clock">
      <label label={dateStr} />
      <popover name="calendar-popover">
        <Gtk.Calendar name="calendar"/>
      </popover>
    </menubutton>
  )
}
