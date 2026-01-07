import { Gtk, Gdk } from "ags/gtk4"
import { createBinding, With } from "ags";
import AstalHyprland from "gi://AstalHyprland";
import WorkspaceButton from "./WorkspaceButton";

const NUM_WORKSPACES: number = 5;

export default function Workspaces({monitor}: {monitor: Gdk.Monitor}) {
  const hyprland = AstalHyprland.get_default();
  const accessor = createBinding(hyprland, "focused-workspace")

  const focusedHistory: number[] = [];

  return (
    <box orientation={Gtk.Orientation.HORIZONTAL}>
      <With value={accessor}>
        {(accessor) => {
          const activeId = accessor.id
          focusedHistory.push(activeId);

          return (<box>
            {Array(NUM_WORKSPACES).fill(0).map((_, i) => {
              if (monitor.connector == "HDMI-A-2") {i += 5;}
              let prevId = focusedHistory[focusedHistory.length - 2];

              return (<WorkspaceButton id={i + 1} prevId={prevId} activeId={activeId}/>)
            })}
          </box>)
        }
      }
      </With>
    </box>
  )
}
