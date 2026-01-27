import { Astal, Gdk, Gtk } from "ags/gtk4";
import FloatingWindow from "../common/FloatingWindow";
import Pointer from "../../utils/Pointer";

export const getCalendarWindowName = (monitorConnector: string) => `calendar-window-${monitorConnector}`;

export default function CalendarWindow(gdkmonitor: Gdk.Monitor) {
  const { TOP, RIGHT } = Astal.WindowAnchor

  return (
    <FloatingWindow
      name={getCalendarWindowName(gdkmonitor.connector)}
      gdkmonitor={gdkmonitor}
      anchor={TOP | RIGHT}
      margin_top={5}
      margin_right={5}
    >
      <Gtk.Calendar name="calendar" cursor={Pointer}/>
    </FloatingWindow>
  )
}
