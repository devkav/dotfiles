import app from "ags/gtk4/app"
import { getAudioWindowName } from "../widgets/audio/AudioWindow";
import { getCalendarWindowName } from "../widgets/clock/CalendarWindow";
import { getPowerMenuWindowName } from "../widgets/power-menu/PowerMenuWindow";

export function closeAllPopups() {
  app.get_monitors().forEach((monitor) => {
    const monitorConnector = monitor.connector;

    app.get_window(getAudioWindowName(monitorConnector))!.visible = false;
    app.get_window(getCalendarWindowName(monitorConnector))!.visible = false;
    app.get_window(getPowerMenuWindowName(monitorConnector))!.visible = false;
  })
}

export function openPopup(name: string) {
  const window = app.get_window(name);
  if (!window) {return;}
  const visible = window.visible;

  closeAllPopups();
  window.visible = !visible;
}
