import { execAsync } from "ags/process"
import Pointer from "../../utils/Pointer"

interface MenuButtonProps {
  iconName: string,
  label: string,
  command: string
}

export default function MenuButton({ iconName, label, command }: MenuButtonProps) {
  const onClicked = () => {
    execAsync(command);
  }

  return (
    <button cursor={Pointer} onClicked={onClicked} class="menu-button">
      <box>
        <image iconName={iconName} class="menu-button-icon"/>
        <label label={label}/>
      </box>
    </button>
  )
}
