import React, { Component } from 'react'
import LaunchHeader from './LaunchHeader'
import LaunchList from './LaunchList'
import LaunchOptions from './LaunchOptions'
import launchesApi from './api/launches.js'

export default class MainPage extends Component {

    state = {
        launches: []
    };

    async componentDidMount() {
        this.refresh()
    }

    refresh = async () => {
        const response = await launchesApi.get('/launches')
        this.setState({launches: response.data})
    }

    render() {
        return (
            <div className="container main-page">
                <LaunchOptions onClick={this.refresh} />
                <LaunchHeader />
                <LaunchList launches={this.state.launches} />
            </div>
        )
    }
}