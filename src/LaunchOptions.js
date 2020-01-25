import React, { Component } from 'react'
import './LaunchOptions.css'
import { ReactComponent as RefreshIcon } from './assets/images/refresh.svg'

export default class LaunchOptions extends Component {
    render() {
        return (
            <div className="container launch-options">
                <RefreshIcon className="launch-options-refresh" onClick={this.props.onClick} />
            </div>
        )
    }
}
