import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"

interface FloatingWindowProps {
  children?: any;
  name: string;
  anchor: number;
  gdkmonitor: Gdk.Monitor;
  margin_top?: number;
  margin_bottom?: number;
  margin_left?: number;
  margin_right?: number;
}

export default function FloatingWindow({
  children,
  name,
  anchor,
  gdkmonitor,
  margin_top = 0,
  margin_bottom = 0,
  margin_left = 0,
  margin_right = 0
}: FloatingWindowProps) {
  return (
    <window
      visible={false}
      name={name}
      namespace="floating-window-blur"
      layer={Astal.Layer.TOP}
      class="floating-window"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={anchor}
      application={app}
      margin_top={margin_top}
      margin_bottom={margin_bottom}
      margin_left={margin_left}
      margin_right={margin_right}
      focusable={true}
    >
      {children}
    </window>
  )
}
