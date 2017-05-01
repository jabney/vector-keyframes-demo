import React from 'react'
import ReactDom from 'react-dom'
import KeyframeInterpolation
  from './components/KeyframeInterpolation/keyframe-interpolation'
import './styles.scss'

let keyframes = [
  {stop: 0.0, value: [0, 0, 255]},
  {stop: 0.0, value: [0, 255, 0]},
  {stop: 0.0, value: [255, 0, 0]}
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {keyframes}
    this.onChangeKeyframes = this.onChangeKeyframes.bind(this)
  }

  onChangeKeyframes(keyframes) {
    this.setState({keyframes})
  }

  render() {
    return (
      <div>
        <h1>Keyframe Interpolation</h1>
        <KeyframeInterpolation
          keyframes={this.state.keyframes}
          onChangeKeyframes={this.onChangeKeyframes} />
        <pre className="json">{JSON.stringify(this.state.keyframes, null, 2)}</pre>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)
