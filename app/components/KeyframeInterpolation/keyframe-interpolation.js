import React from 'react'
import KeyframesList from '../KeyframesList/keyframes-list'
import ColorControl from '../ColorControl/color-control'
import { util, vector3d } from 'vector-keyframes'
import './keyframe-interpolation.scss'


function spaceKeysEvenly(keyframes) {
  let len = keyframes.length

  if (len === 1) {
    keyframes[0].stop = 0
  } else if (len > 1) {
    for (let i = 0; i < len; ++i) {
      keyframes[i].stop = +(i / (len-1)).toFixed(3)
    }
  }
  return keyframes
}

function performInterpolation(keyframes, t, timing) {
  const vector = vector3d.keyframeInterpolate(keyframes, t, timing)
  return util.vector3dToHex(vector)
}

export default class KeyframeInterpolation extends React.Component {
  constructor(props) {
    super(props)

    const timing = 'smooth'
    const sliderValue = 0.5
    const keyframes = spaceKeysEvenly(props.keyframes)
    const color = performInterpolation(keyframes, sliderValue, timing)

    this.state = {keyframes, sliderValue, color, timing}
  }

  addKeyframe() {
    const keyframes = this.state.keyframes.slice(0)
    const len = keyframes.length
    const vector = len && keyframes[len-1].vector || [127, 127, 127]

    keyframes.push({
      stop: 0.0,
      vector: vector
    })
    spaceKeysEvenly(keyframes)

    const color = performInterpolation(
      keyframes, this.state.sliderValue, this.state.timing)
    this.props.onChangeKeyframes(keyframes)
    this.setState({keyframes, color})
  }

  onDeleteKeyframe(index) {
    const keyframes = this.state.keyframes.slice(0)
    keyframes.splice(index, 1)
    spaceKeysEvenly(keyframes)
    const color = performInterpolation(
      keyframes, this.state.sliderValue, this.state.timing)
    this.props.onChangeKeyframes(keyframes)
    this.setState({keyframes, color})
  }

  onChangeStop(index, e) {
    const keyframes = this.state.keyframes.slice(0)
    const keyframe = keyframes[index]
    keyframe.stop = Math.min(Math.max(e.target.value, 0), 1)
    const color = performInterpolation(
      keyframes, this.state.sliderValue, this.state.timing)
    this.props.onChangeKeyframes(keyframes)
    this.setState({keyframes, color})
  }

  onChangeColor(index, e) {
    const keyframes = this.state.keyframes.slice(0)
    const keyframe = keyframes[index]
    keyframe.vector = util.hexToVector3d(e.target.value)
    const color = performInterpolation(
      keyframes, this.state.sliderValue, this.state.timing)
    this.props.onChangeKeyframes(keyframes)
    this.setState({keyframes, color})
  }

  onChangeSlider(e) {
    const sliderValue = e.target.value
    const color = performInterpolation(
      this.state.keyframes, sliderValue, this.state.timing)
    this.setState({sliderValue, color})
  }

  onChangeTiming(e) {
    const timing = e.target.value
    const color = performInterpolation(
      this.state.keyframes, this.state.sliderValue, timing)
    this.setState({timing, color})
  }

  render() {
    return (
      <div className="KeyframeInterpolation">
        <ColorControl
          color={this.state.color}
          value={this.state.sliderValue}
          selected={this.state.timing}
          onChangeTiming={this.onChangeTiming.bind(this)}
          onChangeSlider={this.onChangeSlider.bind(this)} />
        <h2>Keyframes</h2>
        <KeyframesList keyframes={this.state.keyframes}
          onChangeStop={this.onChangeStop.bind(this)}
          onChangeColor={this.onChangeColor.bind(this)}
          onDeleteKeyframe={this.onDeleteKeyframe.bind(this)} />
        <div className="button-wrapper">
          <button onClick={this.addKeyframe.bind(this)}>
            Add Keyframe
          </button>
        </div>
       </div>
    )
  }
}
