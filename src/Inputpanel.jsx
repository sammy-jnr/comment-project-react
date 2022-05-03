import React, { useContext } from 'react'
import Handlecomments from './Commentscontext'

function Inputpanel() {
  const {setcomments} = useContext(Handlecomments) 
  return (
    <div className='inputpanel_container'>
        <textarea placeholder='Add a comment...' className='inputtext'
          onChange={(e) =>{setcomments(e.target.value)}}
        />
        <div className="inputdiv_lastline">
          <img src={require("./images\\avatars\\image-juliusomo.png").default} alt="" className="profilepicture"/>
          <div className='commentbtn'>SEND</div>
        </div>
    </div>
  )
}

export default Inputpanel