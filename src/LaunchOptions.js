import React, { Component } from 'react'
import './LaunchOptions.css'
import { ReactComponent as RefreshIcon } from './assets/images/refresh.svg'
import Checkbox from './components/Checkbox'
import createReactClass from 'create-react-class'

export default class LaunchOptions extends Component {

    constructor(props) {
        super(props)
        this.handleLandChecked = this.handleLandChecked.bind(this)
        this.handleReusedChecked = this.handleReusedChecked.bind(this)
        this.handleRedditChecked = this.handleRedditChecked.bind(this)
    }

    handleLandChecked(value) {
        console.log(`Launch Options - handleLandChecked <=> ${value}`)
        return this.props.handleLandChecked(value)
    }

    handleReusedChecked(value) {
        console.log(`Launch Options - handleReusedChecked <=> ${value}`)
        return this.props.handleReusedChecked(value)
    }

    handleRedditChecked(value) {
        console.log(`Launch Options - handleRedditChecked <=> ${value}`)
        return this.props.handleRedditChecked(value)
    }

    render() {
        return (
            <div className="container launch-options">
                <RefreshIcon className="launch-options-refresh" onClick={this.props.onClick} />
                <div className="launch-options-space" />
                <Checkbox label="LAND" handleCheckChange={this.handleLandChecked} />
                <Checkbox label="REUSED" handleCheckChange={this.handleReusedChecked} />
                <Checkbox label="WITH REDDIT" handleCheckChange={this.handleRedditChecked} />
            </div>
        )
    }
}