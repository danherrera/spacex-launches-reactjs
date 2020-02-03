import React, { useState, useEffect } from 'react'
import LaunchHeader from './LaunchHeader'
import LaunchList from './LaunchList'
import LaunchOptions from './LaunchOptions'
import launchesApi from './api/launches.js'

export default function MainPage (props) {
  const [launches, setLaunches] = useState([])
  const [options, setOptions] = useState({
    isLandChecked: false,
    isReusedChecked: false,
    isWithRedditChecked: false
  })
  const [error, setError] = useState('')

  async function refresh () {
    try {
      const response = await launchesApi.get('/launches')
      if (response.status === 200) {
        setError('')
        setLaunches(response.data)
      } else {
        setError('Something went wrong :(')
      }
    } catch (err) {
      setError('Something went wrong :(')
    }
  }

  function onLandChange (value) {
    setOptions({
      isLandChecked: value,
      isReusedChecked: options.isReusedChecked,
      isWithRedditChecked: options.isWithRedditChecked
    })
  }

  function onReusedChange (value) {
    setOptions({
      isLandChecked: options.isLandChecked,
      isReusedChecked: value,
      isWithRedditChecked: options.isWithRedditChecked
    })
  }

  function onRedditChange (value) {
    setOptions({
      isLandChecked: options.isLandChecked,
      isReusedChecked: options.isReusedChecked,
      isWithRedditChecked: value
    })
  }

  useEffect(() => { refresh() }, [])

  if (error === '') {
    const filteredLaunches = launches
      .filter(launch => options.isLandChecked ? launch.launch_success : true)
      .filter(launch => options.isReusedChecked ? launch.any_parts_reused : true)
      .filter(launch => options.isWithRedditChecked ? launch.reddit_launch_link : true)
      .map(launch => options.isWithRedditChecked ? Object.assign(launch, { article_link: launch.reddit_launch_link }) : launch)
    return (
      <div className='container main-page'>
        <LaunchOptions
          onClickRefresh={refresh}
          handleLandChecked={onLandChange}
          handleReusedChecked={onReusedChange}
          handleRedditChecked={onRedditChange}
        />
        <LaunchHeader />
        <LaunchList launches={filteredLaunches} />
      </div>
    )
  } else {
    return (
      <div className='container main-page'>
        <LaunchOptions
          onClickRefresh={refresh}
          handleLandChecked={onLandChange}
          handleReusedChecked={onReusedChange}
          handleRedditChecked={onRedditChange}
        />
        <LaunchHeader />
        <div>{error}</div>
      </div>
    )
  }
}
