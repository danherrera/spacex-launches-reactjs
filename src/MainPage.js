import React, { Component } from 'react'
import LaunchHeader from './LaunchHeader'
import LaunchList from './LaunchList'
import LaunchOptions from './LaunchOptions'
import launchesApi from './api/launches.js'
import createReactClass from 'create-react-class'

export default class MainPage extends Component {

    state = {
        launches: [],
        options: {
            isLandChecked: true,
            isReusedChecked: false,
            isWithRedditChecked: false
        },
        error: ""
    };

    async componentDidMount() {
        this.refresh()
    }

    refresh = async () => {
        try {
            const response = await launchesApi.get('/launches')
            if (response.status === 200) {
                this.setState({
                    launches: response.data
                        .filter(launch => this.state.options.isLandChecked ? launch.launch_success : true) 
                        .filter(launch => this.state.options.isReusedChecked ? launch.any_parts_reused : true)
                        .filter(launch => this.state.options.isWithRedditChecked ? launch.reddit_launch_link !== "" : true),
                    options: this.state.options,
                    error: ""
                })
            } else {
                this.setErrorState()
            }
        } catch (err) {
            this.setErrorState()
        }
    }

    setErrorState() {
        this.setState({
            error: "Something went wrong. :(",
            options: this.state.options
        })
    }

    onLandChange = (value) => {
        console.log(`LAND CHANGE= ${value}`)
    }

    onReusedChange(value) {
        console.log(`REUSED CHANGE= ${value}`)
    }

    onRedditChange(value) {
        console.log(`REDDIT CHANGE= ${value}`)
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
                    <LaunchOptions onClick={this.refresh} handleLandChecked={this.onLandChange} handleReusedChecked={this.onReusedChange} handleRedditChecked={this.onRedditChange} />
                    <LaunchHeader />
                    <div>{this.state.error}</div>
                </div>
            )
        }
    }
}