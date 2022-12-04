import './main.scss'
import { render } from './utils/render'
import { ScoreTable } from './components/scoreTable'
import { ToolSelect } from './components/tool-selector'

const root = document.getElementById("root")

const app = [ScoreTable(), ToolSelect()]

render(app, root)
