import React from 'react'
import Keyframe from '../Keyframe/keyframe'
import { util } from 'vector-keyframes'


export default class KeyframesList extends React.Component {
  constructor(props) {
    super(props)
  }

  onChangeStop(index, event) {
    this.props.onChangeStop(index, event)
  }

  onChangeColor(index, event) {
    this.props.onChangeColor(index, event)
  }

  onDeleteKeyframe(index, event) {
    this.props.onDeleteKeyframe(index, event)
  }

  render() {
    return (
      <ul className="KeyframesList"> {
        this.props.keyframes.map((keyframe, index) => {
          return (
            <Keyframe key={index}
              stop={keyframe.stop}
              color={util.vector3dToHex(keyframe.value)}
              onChangeStop={this.onChangeStop.bind(this, index)}
              onChangeColor={this.onChangeColor.bind(this, index)}
              onDeleteKeyframe={this.onDeleteKeyframe.bind(this, index)} />
          )
        })
      }</ul>
    )
  }
}
