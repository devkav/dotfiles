import { Accessor } from "ags";
import AstalHyprland from "gi://AstalHyprland";
import Pointer from "../util/Pointer";

const hyprland = AstalHyprland.get_default();

export default function WorkspaceButton({id, prevId, activeId}: {id: number, prevId: number, activeId: number}) {
  let classNames = ["workspace-dot"]

  if (id == activeId) {
    classNames.push("focused")

    if (id != prevId) {
      classNames.push("gaining-focus")
    }
  } else if (id== prevId) {
    classNames.push("losing-focus")
  }

  const onClick = () => {
    hyprland.message_async(`dispatch workspace ${id}`, () => {})
  }

  return (
    <button $type="center" class="workspace-dot-container" onClicked={onClick} cursor={Pointer}>
      <box class={classNames.join(" ")}>
      </box>
    </button>
  )
}
