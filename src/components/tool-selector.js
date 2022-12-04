import close from '../assets/img/icon-close.svg'
import paper from '../assets/img/icon-paper.svg'
import rock from '../assets/img/icon-rock.svg'
import scissors from '../assets/img/icon-scissors.svg'
import './tool-selector.scss'



export function ToolSelect(){
    return(`
            <div class="select-tool">
               <img src=${paper}>
               <img src=${scissors}><br>
               <img src=${rock}>
            </div>
            `)
}