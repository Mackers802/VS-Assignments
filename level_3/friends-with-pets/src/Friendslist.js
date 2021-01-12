import React from "react"

import Friend from "./Friend"
import Data from "./Data"

function Friendslist(){

    const friendData = Data.map(friendlist => <Friend friendData={friendlist}/>)

    return(
        <div>
            {friendData}
        </div>
    )
}

export default Friendslist