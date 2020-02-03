import React, { Component } from 'react'
import './LaunchRow.css'
import { ReactComponent as LinkIcon } from './assets/images/link.svg'

export default class LaunchRow extends Component {
  render () {
    return (
      <div className='container launch-row'>
        <div className='launch-row-item badge'>
          <img className='badge-image' src={this.props.badge} />
        </div>
        <div className='launch-row-item rocket-name'>{this.props.rocketName}</div>
        <div className='launch-row-item rocket-type'>{this.props.rocketType}</div>
        <div className='launch-row-item launch-date'>{this.props.launchDate}</div>
        <div className='launch-row-item launch-details'>{this.props.launchDetails}</div>
        <div className='launch-row-item launch-id'>{this.props.launchId}</div>
        <div className='launch-row-item launch-article'>
          <a href={this.props.launchArticle} target='_blank' rel='noopener noreferrer'>
            <LinkIcon className='launch-article-icon' />
          </a>
        </div>
      </div>
    )
  }
}
