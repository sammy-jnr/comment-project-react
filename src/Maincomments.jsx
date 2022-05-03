import React, { useState } from 'react'


function Maincomments() {
  const [votes, setvotes] = useState(0)
  const Increasevotes = ()=>{
    setvotes(prev =>prev += 1)
  }
  const Decreasevotes = ()=>{
    setvotes(prev =>prev -= 1)
  }
  return (
    <div className='Maincomments_div'> 
        <div className="commentfirstline">
            <img src={require("./images\\avatars\\image-amyrobson.png").default} alt="" className="profilepicture" />
            <div className='username'>username</div> <div className="dateposted">3 days ago</div>
        </div> 
        <div className="usercomment">Impressive! Though it seems the drag feature could be improved.
         But overall it looks incredible. You've nailed the design and the responsiveness at
         various breakpoints works really well.
        </div>
        <div className="commentlastline">
          <div className="vote">
              <img src={require("./images\\icon_plus.svg").default}
                 className="upvote" onClick={Increasevotes} alt=''/>
              <div className="voteresults">{votes}</div>
              <img src={require("./images\\icon-minus.svg").default} 
              className="downvote" onClick={Decreasevotes} alt=''/>
          </div>
          <div className="replybutton">
              <img src={require("./images\\icon-reply.svg").default} alt="" className="replyicon" />
              <div className="replybutton_text">Reply</div> 
          </div>
        </div>
    </div>
  )
}

export default Maincomments