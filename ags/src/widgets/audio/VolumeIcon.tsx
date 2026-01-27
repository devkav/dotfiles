import Wp from "gi://AstalWp";
import { createBinding, createComputed, createState } from "gnim";

export default function VolumeIcon() {
  const [volumeIcon, setVolumeIcon] = createState("volume-high");

  const wp = Wp.get_default();
	const speaker = wp?.audio.defaultSpeaker;
  const volume = createBinding(speaker, "volume");
  const muted = createBinding(speaker, "mute");

  const getVolumeIcon = (isMuted: boolean, volumeLevel: number) => {
    if (isMuted) {
      return "volume-muted";
    } else if (volumeLevel == 0) {
      return "volume-off";
    } else if (volumeLevel >= 0.66) {
      return "volume-high";
    } else if (volumeLevel >= 0.33) {
      return "volume-med";
    } else {
      return "volume-low";
    }
  }

  volume.subscribe(() => {
    setVolumeIcon(getVolumeIcon(muted(), volume()));
  })
  muted.subscribe(() => {
    setVolumeIcon(getVolumeIcon(muted(), volume()));
  })

  const volumeButtonIcon = createComputed(() => `${volumeIcon().toString()}-white`);

  return (
    <image iconName={volumeButtonIcon} name="volume-icon" pixelSize={20}/>
  )
}
