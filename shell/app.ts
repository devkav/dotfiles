import app from "ags/gtk4/app"
import style from "./scss/style.scss"
import Bar from "./widget/Bar"

app.connect("request", (_, event) => {
  console.log(event)
})

app.start({
  css: style,
  main() {
    app.get_monitors().map(Bar)
  },
})
