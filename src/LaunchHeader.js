import React, { Component } from 'react'
import './LaunchHeader.css'

export default class LaunchHeader extends Component {
    render() {
        return (
            <div className="container launch-row-header">
                <div className="launch-row-header-item badge">Badge</div>
                <div className="launch-row-header-item rocket-name">Rocket Name</div>
                <div className="launch-row-header-item rocket-type">Rocket Type</div>
                <div className="launch-row-header-item launch-date">Launch Date</div>
                <div className="launch-row-header-item launch-details">Details</div>
                <div className="launch-row-header-item launch-id">ID</div>
                <div className="launch-row-header-item launch-article">Article</div>
            </div>
        )
    }
}
