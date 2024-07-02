"use client";
import * as React from 'react'
import Controller from './controller.js'

export default function Home() {
  const [rendered,set_rendered] = React.useState(false)
  const robotNameList = ["KINOVA Gen2"]
  const [robotName,set_robotName] = React.useState(robotNameList[0])
  const [j1_rotate,set_j1_rotate] = React.useState(0)
  const [j2_rotate,set_j2_rotate] = React.useState(0)
  const [j3_rotate,set_j3_rotate] = React.useState(0)
  const [j4_rotate,set_j4_rotate] = React.useState(0)
  const [j5_rotate,set_j5_rotate] = React.useState(0)
  const [j6_rotate,set_j6_rotate] = React.useState(0)
  const [c_pos_x,set_c_pos_x] = React.useState(0)
  const [c_pos_y,set_c_pos_y] = React.useState(0.5)
  const [c_pos_z,set_c_pos_z] = React.useState(1.2)
  const [c_deg_x,set_c_deg_x] = React.useState(0)
  const [c_deg_y,set_c_deg_y] = React.useState(0)
  const [c_deg_z,set_c_deg_z] = React.useState(0)
  let registered = false

  const robotChange = ()=>{
    const get = (robotName)=>{
      let changeIdx = robotNameList.findIndex((e)=>e===robotName) + 1
      if(changeIdx >= robotNameList.length){
        changeIdx = 0
      }
      return robotNameList[changeIdx]
    }
    set_robotName(get)
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
      setTimeout(set_rendered(true),1000)
      console.log('set_rendered')

      if(!registered){
        registered = true
        AFRAME.registerComponent('robot-click', {
          init: function () {
            this.el.addEventListener('click', (evt)=>{
              robotChange()
              console.log('robot-click')
            });
          }
        });
      }
    }
  }, [typeof window])

  const controllerProps = {
    robotName, robotNameList, set_robotName,
    j1_rotate,set_j1_rotate,j2_rotate,set_j2_rotate,j3_rotate,set_j3_rotate,
    j4_rotate,set_j4_rotate,j5_rotate,set_j5_rotate,j6_rotate,set_j6_rotate,
  }

  const robotProps = {
    robotNameList, robotName, j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate
  }

  if(rendered){
    return (
    <>
      <a-scene>
        <a-plane position="0 0 0" rotation="-90 0 0" width="10" height="10" color="#7BC8A4" shadow></a-plane>
        <Assets/>
        <Select_Robot {...robotProps}/>
        <a-entity id="rig" position={`${c_pos_x} ${c_pos_y} ${c_pos_z}`} rotation={`${c_deg_x} ${c_deg_y} ${c_deg_z}`}>
          <a-camera id="camera" cursor="rayOrigin: mouse;" position="0 0 0"></a-camera>
        </a-entity>
      </a-scene>
      <Controller {...controllerProps}/>
    </>
    );
  }else{
    return(
      <a-scene>
        <Assets/>
      </a-scene>
    )
  }
}

const Assets = ()=>{
  return (
    <a-assets>
      {/*KINOVA Gen2*/}
      <a-asset-items id="KINOVA_BASE" src="KINOVA_Gen2_base.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_J1" src="KINOVA_Gen2_j1.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_J2" src="KINOVA_Gen2_j2.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_J3" src="KINOVA_Gen2_j3.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_J4" src="KINOVA_Gen2_j4.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_J5" src="KINOVA_Gen2_j5.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_J6" src="KINOVA_Gen2_j6.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_finger1" src="KINOVA_Gen2_finger.gltf" ></a-asset-items>
      <a-asset-items id="KINOVA_finger2" src="KINOVA_Gen2_finger2.gltf" ></a-asset-items>
    </a-assets>
  )
}

const KINOVA_Gen2 = (props)=>{
  const {visible, j1_rotate, j2_rotate, j3_rotate, j4_rotate, j5_rotate, j6_rotate} = props
  return (<>{visible?
    <a-entity robot-click gltf-model="#KINOVA_BASE" position="0 0 0" rotation="0 0 0" visible={visible}>
      <a-entity gltf-model="#KINOVA_J1" position="0 0 0" rotation={`0 ${j1_rotate} 0`}>
        <a-entity gltf-model="#KINOVA_J2" position="0 0.2755 0" rotation={`${-j2_rotate} 0 0`}>
          <a-entity gltf-model="#KINOVA_J3" position="0 0.41 0" rotation={`${-j3_rotate} 0 0`}>
            <a-entity gltf-model="#KINOVA_J4" position="0.00974 0.2075 0" rotation={`0 ${j4_rotate} 0`}>
              <a-entity gltf-model="#KINOVA_J5" position="0.00026 0.1035 0" rotation={`${-j5_rotate} 0 0`}>
                <a-entity gltf-model="#KINOVA_J6" position="-0.00025 0.104 0" rotation={`0 ${j6_rotate} 0`}>
                  <a-entity gltf-model="#KINOVA_finger1" position="-0.03 0.1145 0.003" rotation="8 -10 0" animation="property: rotation; from: 8 -10 0; to: 8 -10 -40; loop: true; dur:1000; easing:linear"></a-entity>
                  <a-entity gltf-model="#KINOVA_finger2" position="0.025 0.1145 -0.023" rotation="-1 7 0" animation="property: rotation; from: -1 7 0; to: -1 7 40; loop: true; dur:1000; easing:linear"></a-entity>
                  <a-entity gltf-model="#KINOVA_finger2" position="0.025 0.1145 0.022" rotation="2 -15 0" animation="property: rotation; from: 2 -15 0; to: 2 -15 40; loop: true; dur:1000; easing:linear"></a-entity>
                </a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-entity>:null}</>
  )
}

const Select_Robot = (props)=>{
  const {robotNameList, robotName, ...rotateProps} = props
  const visibletable = robotNameList.map(()=>false)
  // const robotNameList = ["DOBOT Nova 2","Cobotta PRO 900","JAKA Zu 5"]
  const findindex = robotNameList.findIndex((e)=>e===robotName)
  if(findindex >= 0){
    visibletable[findindex] = true
  }
  return (<>
    <KINOVA_Gen2 visible={visibletable[0]} {...rotateProps}/>
  </>)
}









