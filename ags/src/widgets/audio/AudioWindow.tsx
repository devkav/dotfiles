import { Astal, Gdk, Gtk } from "ags/gtk4"
import Pointer from "../../utils/Pointer";
import Wp from "gi://AstalWp";
import { createBinding } from "gnim";
import VolumeIcon from "./VolumeIcon";
import FloatingWindow from "../common/FloatingWindow";

export const getAudioWindowName = (monitorConnector: string) => `audio-window-${monitorConnector}`;

export default function AudioWindow(gdkmonitor: Gdk.Monitor) {
  const wp = Wp.get_default();
	const speaker = wp?.audio.defaultSpeaker;
  const volume = createBinding(speaker, "volume");
  const muted = createBinding(speaker, "mute");

  const { TOP, RIGHT } = Astal.WindowAnchor
  const toggleMute = () => {speaker.mute = !muted()};

  const onSliderChange = ({ value }: { value: number }) => {
    speaker.volume = value
    speaker.mute = false;
  };

  return (
    <FloatingWindow
      name={getAudioWindowName(gdkmonitor.connector)}
      gdkmonitor={gdkmonitor}
      anchor={TOP | RIGHT}
      margin_top={5}
      margin_right={60}
    >
      <box name="volume-window" orientation={Gtk.Orientation.VERTICAL} halign={Gtk.Align.START}>
        <box orientation={Gtk.Orientation.HORIZONTAL}>
          <box>
            <button name="mute-button" cursor={Pointer} onClicked={toggleMute}>
            <VolumeIcon/>
            </button>
          </box>
          <slider value={volume} min={0} max={1} name="volume-slider" onChangeValue={onSliderChange}/>
        </box>
      </box>
    </FloatingWindow>
  )
}
