
import {stickyUp, stickyDown ,stickyLeft, stickyRight} from '../styles/base'
import BasePanel from './BasePanel'


export default class StickyPanel extends BasePanel {
    constructor(props) {
        super(props)
        this.containerStyle = { ...(props.position === 'up' ? stickyUp: stickyDown)}
    }

} 