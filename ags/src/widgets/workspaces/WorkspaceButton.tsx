import { Accessor, createComputed, createState } from "ags";
import AstalHyprland from "gi://AstalHyprland";
import Pointer from "../../utils/Pointer";
import { timeout } from "ags/time";

const hyprland = AstalHyprland.get_default();
const ANIMATION_TIME_MILLISECONDS = 200 // Should agree with animation length in _workspaces.scss

export default function WorkspaceButton({id, prevId, activeId}: {id: number, prevId: number, activeId: number}) {
  const [classNames, setClassNames] = createState("workspace-dot")
  const classNamesVal = createComputed(() => classNames().toString());

  let classNamesArr = ["workspace-dot"]

  if (id == activeId) {
    classNamesArr.push("focused")

    if (id != prevId) {
      classNamesArr.push("gaining-focus")
    }
  } else if (id== prevId) {
    classNamesArr.push("losing-focus")
  }

  const newClassNames = classNamesArr.join(" ")
  
  if (newClassNames != classNamesVal.peek()) {
    setClassNames(newClassNames);

    if (classNamesArr.includes("losing-focus")) {
      timeout(ANIMATION_TIME_MILLISECONDS, () => {
        const index = classNamesArr.indexOf("losing-focus");
        classNamesArr.splice(index, 1);
        setClassNames(classNamesArr.join(" "))
      })
    }
  }

  const onClick = () => {
    hyprland.message_async(`dispatch workspace ${id}`, () => {})
  }

  return (
    <button $type="center" class="workspace-dot-container" onClicked={onClick} cursor={Pointer}>
      <box class={classNames}>
      </box>
    </button>
  )
}
