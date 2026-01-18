import app from "ags/gtk4/app"
import style from "./scss/style.scss"
import Bar from "./widget/Bar"

app.start({
  css: style,
  icons: `${SRC}/widget/svg`,
  main() {
    app.get_monitors().map(Bar)
  },
})
