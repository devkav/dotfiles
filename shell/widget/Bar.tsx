import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import Arch from "./modules/Arch"
import Workspaces from "./modules/Workspaces"
import Apps from "./modules/Apps"
import Clock from "./modules/Clock"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar"
      namespace="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
      <centerbox cssName="centerbox">
        <box $type="start">
          <Arch/>
          <Apps/>
        </box>
        <Workspaces $type="center" monitor={gdkmonitor}/>
        <box $type="end">
          <Clock/>
        </box>
      </centerbox>
    </window>
  )
}
