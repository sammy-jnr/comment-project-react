import React,{createContext, useState} from 'react'

const Handlecomments = createContext()

export function Commentsprovider({children}){
    const [comments, setcomments] = useState("")
    // setcomments(updatecomments)
    // const updatecomments = (e) => {
    //     setcomments(e.target.value)
    //     
    // }
    console.log(comments)
    return(            
        <Handlecomments.Provider value={{setcomments}}>
            {children}
        </Handlecomments.Provider>
    )
}



export default  Handlecomments;
