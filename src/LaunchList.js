import React, { Component } from 'react'
import LaunchRow from './LaunchRow'

export default class LaunchList extends Component {
  render () {
    return this.props.launches.map((launch) =>
      <div key={launch.id}>
        <LaunchRow launchId={launch.id} rocketName={launch.rocket_name} rocketType={launch.rocket_type} launchDate={new Date(launch.launch_date).toLocaleDateString('en-US')} launchDetails={launch.details} badge='https://cdn2.vectorstock.com/i/1000x1000/85/16/rocket-logo-vector-21288516.jpg' launchArticle={launch.article_link} />
      </div>
    )
  }
}
