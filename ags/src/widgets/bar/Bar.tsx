import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import Arch from "../power-menu/Arch"
import Workspaces from "../workspaces/Workspaces"
import Apps from "../apps/Apps"
import Clock from "../clock/Clock"
import Audio from "../audio/Audio"
import Network from "../network/Network"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
  const monitorConnector = gdkmonitor.connector;

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
          <Arch monitorConnector={monitorConnector}/>
          <Apps/>
        </box>
        <Workspaces $type="center" monitor={gdkmonitor}/>
        <box $type="end">
          <box>
            <Network/>
            <Audio monitorConnector={monitorConnector}/>
          </box>
          <box>
            <Clock monitorConnector={monitorConnector}/>
          </box>
        </box>
      </centerbox>
    </window>
  )
}
