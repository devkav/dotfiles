import Pointer from "../util/Pointer";

export default function Arch() {
  return (
    <menubutton name="arch-icon" cursor={Pointer}>
      <label label=""/>
      <popover>
        <box>
          <label label={"Hello"}/>
        </box>
      </popover>
    </menubutton>
  )
}
