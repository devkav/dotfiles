import Pointer from "../../utils/Pointer"

export default function Network() {

  return (
    <button name="network-button" cursor={Pointer}>
      <box>
        <image iconName="wifi" pixelSize={20}/>
      </box>
    </button>
  )
}
