import { Gtk } from "ags/gtk4"
import { execAsync } from "ags/process"
import Pointer from "../util/Pointer"

export default function Apps() {
  const apps = [
    {icon: "", app: "dolphin"},
    {icon: "", app: "ghostty"},
    {icon: "", app: "chromium"},
    {icon: "", app: "spotify-launcher"},
    {icon: "", app: "steam"},
    {icon: "", app: "discord"},
  ]

  const onClick = (app: string) => {
    execAsync([app])
  }

  return (
    <box name="apps-container" orientation={Gtk.Orientation.HORIZONTAL}>
      {apps.map(({icon, app}) => (
        <button class="app-button" onClicked={() => onClick(app)} cursor={Pointer}>{icon}</button>
      ))}
    </box>
  )
}
