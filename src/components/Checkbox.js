import React, { Component } from 'react'
import './Checkbox.css'
import createReactClass from 'create-react-class'

export default class Checkbox extends Component {

    constructor(props) {
        super(props)
        this.state = { checked: false }
        this.toggleCheck = this.toggleCheck.bind(this)
    }

    toggleCheck() {
        console.log(`toggleCheck`)
        const newCheckedState = !this.state.checked
        try {
            this.setState({ checked: newCheckedState })
            this.props.handleCheckChange(newCheckedState)
        } catch (err) {
            console.log(`Error toggling check\n${err.message}`)
        }
    }

    render() {
        const { label } = this.props
        const { isChecked } = this.state
        return (
            <label className="launch-options-checkbox">
                <input className="checkbox-input" type="checkbox" checked={isChecked} onChange={this.toggleCheck} />
                <span>{label}</span>
            </label>
        )
    }
}
