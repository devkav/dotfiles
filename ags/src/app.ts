import app from "ags/gtk4/app"
import style from "./scss/style.scss"
import Bar from "./widgets/bar/Bar"
import AudioWindow from "./widgets/audio/AudioWindow"
import CalendarWindow from "./widgets/clock/CalendarWindow"
import PowerMenuWindow from "./widgets/power-menu/PowerMenuWindow"

app.start({
  css: style,
  icons: `${SRC}/svg`,
  main() {
    app.get_monitors().map(Bar);
    app.get_monitors().map(AudioWindow);
    app.get_monitors().map(CalendarWindow);
    app.get_monitors().map(PowerMenuWindow);
  },
})
