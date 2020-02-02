import React from 'react'
import './LaunchOptions.css'
import { ReactComponent as RefreshIcon } from './assets/images/refresh.svg'
import Checkbox from './components/Checkbox'

export default function LaunchOptions(props) {
    const { onClickRefresh, handleLandChecked, handleReusedChecked, handleRedditChecked } = props

    return (
        <div className="container launch-options">
            <RefreshIcon className="launch-options-refresh" onClick={onClickRefresh} />
            <div className="launch-options-space" />
            <Checkbox label="LAND" handleCheckChange={handleLandChecked} />
            <Checkbox label="REUSED" handleCheckChange={handleReusedChecked} />
            <Checkbox label="WITH REDDIT" handleCheckChange={handleRedditChecked} />
        </div>
    )
}