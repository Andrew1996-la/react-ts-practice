import { IControlPanel } from "../../types/props"
import s from './controlPanel.module.css'

const ControlPanel = ({children}: IControlPanel) => {
  return (
    <div className={s.controlPanel}>{children}</div>
  )
}

export default ControlPanel