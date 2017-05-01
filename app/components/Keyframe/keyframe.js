import React from 'react'

export default function Keyframe(props) {
  return (
    <li className="Keyframe">
      <label className="stop"><span>stop:</span>
        <input type="number" step="0.01"
          value={props.stop}
          onChange={props.onChangeStop}/>
      </label>
      <label className="color"><span>color:</span>
        <input type="color"
          value={props.color}
          onChange={props.onChangeColor} />
      </label>
      <button className="delete"
        onClick={props.onDeleteKeyframe}>
        x
      </button>
    </li>
  )
}
