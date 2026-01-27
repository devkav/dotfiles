import { Astal, Gdk, Gtk } from "ags/gtk4";
import FloatingWindow from "../common/FloatingWindow";
import MenuButton from "./MenuButton";

export const getPowerMenuWindowName = (monitorConnector: string) => `power-menu-window-${monitorConnector}`;

export default function PowerMenuWindow(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT } = Astal.WindowAnchor

  return (
    <FloatingWindow
      name={getPowerMenuWindowName(gdkmonitor.connector)}
      gdkmonitor={gdkmonitor}
      anchor={TOP | LEFT}
      margin_top={5}
      margin_left={5}
    >
      <box orientation={Gtk.Orientation.VERTICAL}>
        <MenuButton iconName="power" label="Power Off" command="shutdown now"/>
        <MenuButton iconName="restart" label="Restart" command="reboot"/>
        <MenuButton iconName="lock" label="Lock" command="hyprlock"/>
      </box>
    </FloatingWindow>
  )
}
