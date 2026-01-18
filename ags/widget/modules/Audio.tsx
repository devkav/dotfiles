import Wp from "gi://AstalWp";
import { createBinding, createState } from "gnim";
import Pointer from "../util/Pointer";
import { Gtk } from "ags/gtk4";

export default function Audio() {
  const [volumeIcon, setVolumeIcon] = createState("volume-high");
  const [open, setOpen] = createState(false);

  const wp = Wp.get_default();
	const speaker = wp?.audio.defaultSpeaker;
  const volume = createBinding(speaker, "volume");
  const muted = createBinding(speaker, "mute");

  const getVolumeIcon = () => {
    const isMuted = muted();
    const volumeLevel = volume();

    if (isMuted) {
      return "volume-muted";
    } else if (volumeLevel == 0) {
      return "volume-off"
    } else {
      return volumeLevel > 0.5 ? "volume-high" : "volume-low";
    }
  }

  const onSliderChange = ({ value }: { value: number }) => {speaker.volume = value};
  const onSwitchToggle = ({ active }: { active: boolean }) => {speaker.mute = active};
  const onClick = () => setOpen((prevState) => !prevState);
  const onHide = () => setOpen(false);

  volume.subscribe(() => setVolumeIcon(getVolumeIcon()));
  muted.subscribe(() => setVolumeIcon(getVolumeIcon()));

  return (
    <button name="volume-button" cursor={Pointer} onClicked={onClick}>
      <box>
        <popover visible={open} onHide={onHide}>
          <box name="volume-window" orientation={Gtk.Orientation.VERTICAL} halign={Gtk.Align.START}>
            <box name="muted-container">
              <label label="Muted" name="muted-label"/>
              <switch active={muted} onNotifyActive={onSwitchToggle}/>
            </box>
            <box orientation={Gtk.Orientation.VERTICAL}>
              <box>
                <label label="Volume"/>
              </box>
              <slider value={volume} min={0} max={1} name="volume-slider" onChangeValue={onSliderChange}/>
            </box>
          </box>
        </popover>
        <image iconName={volumeIcon} name="volume-icon" pixelSize={20}/>
      </box>
    </button>
  )
}
