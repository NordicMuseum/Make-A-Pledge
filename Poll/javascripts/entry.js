import { PieChart, Pie, Cell } from 'recharts'
import TransitionGroup from 'react-addons-transition-group'
import { TweenMax } from 'gsap'

import './index.css'
import secret from './secrets.js'
import identity from './identity.js'
import { lang, settings } from './utils.js'

import AWSMqttClient from 'aws-mqtt'
import 'aws-sdk/dist/aws-sdk'
const AWS = window.AWS
AWS.config.region = 'us-east-1'
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: identity
})

const React = require('react')
const ReactDOM = require('react-dom')

const data = [
  { name: 'Food', value: 1, color: '#cedb29' },
  { name: 'Clothing', value: 1, color: '#5cb7b3' },
  { name: 'Travels', value: 1, color: '#146170' },
  { name: 'Purchases', value: 1, color: '#a65a95' },
  { name: 'Living', value: 1, color: '#cb7d31' }
]

class Entry extends React.Component {
  GETInitialVotes () {
    const that = this
    return fetch('https://58u3ew20yd.execute-api.us-east-1.amazonaws.com/dev/pledge', {
      method: 'GET',
      headers: new Headers({
        'X-Api-Key': secret
      }),
      mode: 'cors'
    })
      .then(function (res) {
        if (res.ok) {
          return res.json()
        } else {
          throw new TypeError('GETVotes error')
        }
      })
      .then(function (resJSON) {
        let total = 0

        const { currentVotes, iotProperties } = resJSON

        data.map((category, i) => {
          let key = category.name
          let votes = currentVotes[key]
          category.value = votes
          total += votes
          return category
        })

        const client = new AWSMqttClient({
          region: AWS.config.region,
          credentials: AWS.config.credentials,
          endpoint: iotProperties.endpoint,
          clientId: 'nordic-museum-poll-client'
        })

        client.on('connect', () => {
          console.log('websocket connect')
          client.subscribe(iotProperties.topic)
        })
        client.on('message', (topic, message) => {
          const { category, computerLocation } = JSON.parse(message)
          that.animateVote(computerLocation, category)
        })
        client.on('close', () => {
          console.log('websocket close')
        })
        client.on('offline', () => {
          console.log('offline')
        })

        // Setup a websocket to listen to new votes
        // IoT.create(
        //   iotProperties.topic,
        //   iotProperties.endpoint,
        //   iotProperties.region,
        //   iotProperties.accessKey,
        //   iotProperties.secretKey,
        //   () => {
        //     console.log('websocket connect')
        //   },
        //   (topic, message) => {
        //     const { category, computerLocation } = JSON.parse(message)
        //     that.animateVote(computerLocation, category)
        //   },
        //   (response) => {
        //     console.log(response)
        //     console.log('websocket close')
        //   })

        return { data, total }
      }).catch(function (err) {
        console.log(err)
      })
  }

  componentWillMount () {
    this.renderLabel = this.renderLabel.bind(this)
    this.GETInitialVotes = this.GETInitialVotes.bind(this)

    this.setState({
      total: 5,
      data: data,
      showLabels: true,
      voteEnteringFromLeft: false,
      categoryEnteringFromLeft: null,
      voteEnteringFromRight: false,
      categoryEnteringFromRight: null
    })

    this.GETInitialVotes().then(votes => {
      this.setState({
        total: votes.total,
        data: votes.data
      })
    })
  }

  renderLabel (props) {
    return (
      <text
        x={props.x > props.cx ? props.x + 25 : props.x - 25}
        y={props.y > props.cy ? props.y + 25 : props.y - 25}
        textAnchor={props.x > props.cx ? 'start' : 'end'}
        fill={'#fefaeb'}
        style={{
          color: '#fefaeb',
          fontSize: 35,
          fontFamily: 'BrandonBody',
          flexDirection: 'column',
          textAlign: 'center',
          lineHeight: 1.5
        }}
      >
        {this.state.showLabels && props.value > 0 ? this.translate(props.name) : ''}
      </text>)
  }

  translate (name) {
    return lang.categories[name] || ''
  }

  animateVote (direction, category) {
    if (direction === 'Left') {
      this.setState({
        voteEnteringFromLeft: true,
        categoryEnteringFromLeft: category,
        showLabels: false,
      })
    } else {
      this.setState({
        voteEnteringFromRight: true,
        categoryEnteringFromRight: category,
        showLabels: false,
      })
    }
  }

  addVote (direction, category) {
    let updatedData = this.state.data.map((entry, index) => {
      if (entry.name === category) {
        entry.value = entry.value + 1
      }
      return entry
    })

    if (direction === 'Left') {
      this.setState({
        total: this.state.total + 1,
        data: updatedData,
        categoryEnteringFromLeft: null,
        voteEnteringFromLeft: false
      })
    } else {
      this.setState({
        total: this.state.total + 1,
        data: updatedData,
        categoryEnteringFromRight: null,
        voteEnteringFromRight: false
      })
    }
  }

  render () {
    return (
      <div className='container'>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1920,
            height: 1080,
            background: '#000',
            opacity: 0.3
          }}
        />

        <text
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            color: '#fefaeb',
            fontSize: 70,
            fontFamily: 'BrandonTitle'
          }}
        >
          {lang.heading}
        </text>

        <text
          className='pledgeCount'
          textAnchor='middle'
          fill='#82ca9d'
          style={{
            color: '#fefaeb',
            fontSize: 90,
            fontFamily: 'BrandonBody',
            flexDirection: 'column',
            textAlign: 'center',
            lineHeight: 1,
            position: 'absolute',
            top: 1080 / 2 - 20
          }}>
          {this.state.total + '\n'}
          <text style={{ fontSize: 60, display: 'block', lineHeight: 1.3 }}>
            {lang.pledges}
          </text>
        </text>

        <PieChart
          className='chart'
          width={1920}
          height={1080}
          style={{
            position: 'relative',
            top: 50
          }}
        >
          <Pie
            data={this.state.data}
            cx={'50%'}
            cy={'50%'}
            innerRadius={225}
            outerRadius={375}
            fill='#82ca9d'
            labelLine={false}
            label={this.renderLabel}
          >
            {
              this.state.data.map((entry, index) =>
                <Cell
                  key={index}
                  fill={entry.color}
                  stroke={'transparent'}
                />
              )
            }
          </Pie>
        </PieChart>

        <TransitionGroup>
          { this.state.voteEnteringFromLeft &&
            <Vote
              direction={'Left'}
              enterCallback={() => {
                this.addVote('Left', this.state.categoryEnteringFromLeft)
              }}
              category={this.state.categoryEnteringFromLeft}
              exitCallback={() => {
                // console.log('show those labels')
                this.setState({ showLabels: true })
              }}
            />
          }
        </TransitionGroup>

        <TransitionGroup>
          { this.state.voteEnteringFromRight &&
            <Vote
              direction={'Right'}
              enterCallback={() => {
                this.addVote('Right', this.state.categoryEnteringFromRight)
              }}
              category={this.state.categoryEnteringFromRight}
              exitCallback={() => { this.setState({ showLabels: true }) }}
            />
          }
        </TransitionGroup>

      </div>
    )
  }
}

class Vote extends React.Component {
  constructor (props) {
    super(props)
    this.enterAnimationComplete = this.enterAnimationComplete.bind(this)
    this.exitAnimationComplete = this.exitAnimationComplete.bind(this)
  }

  enterAnimationComplete (props) {
    this.props.enterCallback()
  }

  exitAnimationComplete (props) {
    this.props.exitCallback()
  }

  componentWillEnter (callback) {
    const el = this.container
    const im = this.image
    TweenMax.fromTo(im, 1, { opacity: 1 }, { opacity: 0 })
    TweenMax.fromTo(el, 1, { y: 500, opacity: 1 }, {
      y: 0,
      opacity: 1,
      onComplete: () => {
        this.enterAnimationComplete()
        callback()
      }
    })
  }

  componentWillLeave (callback) {
    const el = this.container
    if (this.props.direction === 'Left') {
      TweenMax.fromTo(el, 2, { x: 0, opacity: 1, scale: 1 }, {
        x: 700,
        opacity: 1,
        scale: 0,
        onComplete: () => {
          this.exitAnimationComplete()
          callback()
        }
      })
    } else {
      TweenMax.fromTo(el, 2, { x: 0, opacity: 1, scale: 1 }, {
        x: -700,
        opacity: 1,
        scale: 0,
        onComplete: () => {
          this.exitAnimationComplete()
          callback()
        }
      })
    }
  }

  render () {
    return (
      <div
        ref={c => this.container = c}
        style={
          this.props.direction === 'Left' ? {
            position: 'absolute',
            top: 500,
            width: 150,
            height: 150,
            left: 200,
            borderRadius: 75
          } : {
            position: 'absolute',
            top: 500,
            width: 150,
            height: 150,
            right: 200,
            borderRadius: 75
          }
        }>
        {this.props.category === 'Purchases' &&
          <div style={{ backgroundColor: settings['Purchases'].color, borderRadius: 75 }}>
            <img ref={c => this.image = c} style={{ flex: 1 }} src={require(`./assets/${settings['Purchases'].icon}`)} />
          </div>
        }
        {this.props.category === 'Travels' &&
          <div style={{ backgroundColor: settings['Travels'].color, borderRadius: 75 }}>
            <img ref={c => this.image = c} style={{ flex: 1 }} src={require(`./assets/${settings['Travels'].icon}`)} />
          </div>
        }
        {this.props.category === 'Clothing' &&
          <div style={{ backgroundColor: settings['Clothing'].color, borderRadius: 75 }}>
            <img ref={c => this.image = c} style={{ flex: 1 }} src={require(`./assets/${settings['Clothing'].icon}`)} />
          </div>
        }
        {this.props.category === 'Living' &&
          <div style={{ backgroundColor: settings['Living'].color, borderRadius: 75 }}>
            <img ref={c => this.image = c} style={{ flex: 1 }} src={require(`./assets/${settings['Living'].icon}`)} />
          </div>
        }
        {this.props.category === 'Food' &&
          <div style={{ backgroundColor: settings['Food'].color, borderRadius: 75 }}>
            <img ref={c => this.image = c} style={{ flex: 1 }} src={require(`./assets/${settings['Food'].icon}`)} />
          </div>
        }
      </div>
    )
  }
}

ReactDOM.render(<Entry />, document.getElementById('piechart'))
