"use client";
import * as React from 'react'
import "./controller.css";

export default function Controller(props) {
  const {robotNameList, robotName} = props
  const {rotate, target} = props

  const set_robotName = (e)=>{
    props.set_robotName(e.target.value)
  }

  const set_j1_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_rotate({...rotate, j1:value})
  }

  const set_j2_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_rotate({...rotate, j2:value})
  }

  const set_j3_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_rotate({...rotate, j3:value})
  }

  const set_j4_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_rotate({...rotate, j4:value})
  }

  const set_j5_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_rotate({...rotate, j5:value})
  }

  const set_j6_rotate = (e)=>{
    let value = e.target.value
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_rotate({...rotate, j6:value})
  }

  const set_target_x = (e)=>{
    let value = e.target.value
    props.set_target({...target,x:value})
  }
  const set_target_y = (e)=>{
    let value = e.target.value
    props.set_target({...target,y:value})
  }
  const set_target_z = (e)=>{
    let value = e.target.value
    props.set_target({...target,z:value})
  }

  return (
    <>
      <div className="controller" >
        {/*<div className="mb-2">
          <select className="form-select" onChange={set_robotName} value={robotName}>
            {robotNameList.map((name,idx)=><option key={idx} value={name}>{name}</option>)}
          </select>
        </div>*/}
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="j1_rotate_number" className="form-label"><span className="form-control-plaintext">J1 Deg</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="j1_rotate_number" value={rotate.j1} onChange={set_j1_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="j2_rotate_number" className="form-label"><span className="form-control-plaintext">J2 Deg</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="j2_rotate_number" value={rotate.j2} onChange={set_j2_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="j3_rotate_number" className="form-label"><span className="form-control-plaintext">J3 Deg</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="j3_rotate_number" value={rotate.j3} onChange={set_j3_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="j4_rotate_number" className="form-label"><span className="form-control-plaintext">J4 Deg</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="j4_rotate_number" value={rotate.j4} onChange={set_j4_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="j5_rotate_number" className="form-label"><span className="form-control-plaintext">J5 Deg</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="j5_rotate_number" value={rotate.j5} onChange={set_j5_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="j6_rotate_number" className="form-label"><span className="form-control-plaintext">J6 Deg</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="j6_rotate_number" value={rotate.j6} onChange={set_j6_rotate} min={-180} max={180}/></div>
        </div>
      </div>

      <div className="target-controller" >
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="target_x_number" className="form-label"><span className="form-control-plaintext">target x</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="target_x_number" value={target.x} onChange={set_target_x} step={0.01} min={-10} max={10}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="target_y_number" className="form-label"><span className="form-control-plaintext">target y</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="target_y_number" value={target.y} onChange={set_target_y} step={0.01} min={-10} max={10}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="target_z_number" className="form-label"><span className="form-control-plaintext">target z</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="target_z_number" value={target.z} onChange={set_target_z} step={0.01} min={-10} max={10}/></div>
        </div>
      </div>
    </>
    )
}
