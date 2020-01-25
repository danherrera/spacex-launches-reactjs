import React, { Component } from 'react'
import LaunchHeader from './LaunchHeader'
import LaunchList from './LaunchList'
import LaunchOptions from './LaunchOptions'
import launchesApi from './api/launches.js'

export default class MainPage extends Component {

    state = {
        launches: [],
        error: ""
    };

    async componentDidMount() {
        this.refresh()
    }

    refresh = async () => {
        try {
            const response = await launchesApi.get('/launches')
            if (response.status === 200) {
                this.setState({launches: response.data, error: ""})
            } else {
                this.setState({error: "Something went wrong. :("})
            }
        } catch (err) {
            this.setState({error: "Something went wrong. :("})
        }
    }

    render() {
        if (this.state.error === "") {
            return (
                <div className="container main-page">
                    <LaunchOptions onClick={this.refresh} />
                    <LaunchHeader />
                    <LaunchList launches={this.state.launches} />
                </div>
            )
        } else {
            return (
                <div className="container main-page">
                    <LaunchOptions onClick={this.refresh} />
                    <LaunchHeader />
                    <div>{this.state.error}</div>
                </div>
            )
        }
    }
}