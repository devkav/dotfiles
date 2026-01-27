import Pointer from "../../utils/Pointer";
import { getAudioWindowName } from "./AudioWindow";
import VolumeIcon from "./VolumeIcon";
import { openPopup } from "../../utils/Popups";

export default function Audio({monitorConnector} : {monitorConnector: string}) {
  const onClick = () => openPopup(getAudioWindowName(monitorConnector));

  return (
    <button name="volume-button" cursor={Pointer} onClicked={onClick}>
      <VolumeIcon/>
    </button>
  )
}
