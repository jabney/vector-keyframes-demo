import React from 'react'
import { util } from 'vector-keyframes'

export default function ColorControl(props) {
  const style = { backgroundColor: props.color }

  return (
    <div className="ColorControl">
      <div className="color-chip" style={style} />
      <input type="range" min="0" max="1" step="0.001"
        value={props.value}
        onChange={props.onChangeSlider} />
      <div className="color-text">
        {props.color},&nbsp;
        {`rgb(${util.hexToVector3d(props.color).toString()})`}
      </div>
      <div className="timing">
        <label>Smooth
          <input type="radio" value="smooth"
            onChange={props.onChangeTiming}
            checked={props.selected === 'smooth'} />
        </label>
        <label>Linear
          <input type="radio" value="linear"
            onChange={props.onChangeTiming}
            checked={props.selected === 'linear'} />
        </label>
      </div>
    </div>
  )
}
