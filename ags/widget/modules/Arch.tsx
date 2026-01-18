import { Gtk } from "ags/gtk4";
import Pointer from "../util/Pointer";
import MenuButton from "./MenuButton";
import { createState } from "gnim";


export default function Arch() {
  const [open, setOpen] = createState(false);

  const onClick = () => setOpen((prevState) => !prevState);
  const onHide = () => setOpen(false);

  return (
    <button name="arch-icon" cursor={Pointer} onClicked={onClick}>
      <box>
        <label label=""/>
        <popover visible={open} onHide={onHide}>
          <box orientation={Gtk.Orientation.VERTICAL}>
            <MenuButton iconName="power" label="Power Off" command="shutdown now"/>
            <MenuButton iconName="restart" label="Restart" command="reboot"/>
            <MenuButton iconName="lock" label="Lock" command="hyprlock"/>
          </box>
        </popover>
      </box>
    </button>
  )
}
