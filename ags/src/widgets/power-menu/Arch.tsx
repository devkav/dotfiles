import Pointer from "../../utils/Pointer";
import { openPopup } from "../../utils/Popups";
import { getPowerMenuWindowName } from "./PowerMenuWindow";

export default function Arch({monitorConnector} : { monitorConnector: string}) {
  const onClick = () => openPopup(getPowerMenuWindowName(monitorConnector));

  return (
    <button name="arch-icon" cursor={Pointer} onClicked={onClick}>
      <label label=""/>
    </button>
  )
}
