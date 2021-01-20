import './App.css';
import Bounty from "./Bounty"
import AddTarget from "./AddTarget"
import axios from "axios"
import React, {useState, useEffect} from "react"


function App() {
  const [bountys, setBountys] = useState([])
  
  function getBountys (){
    axios.get("/bountys")
    .then(res => setBountys(res.data))
    .catch(err => console.log("error"))
  
  }
  useEffect(() => {
    getBountys()
  }, []
  )

  function addBounty(newBounty){
    axios.post("/bountys", newBounty)
    .then(res => {
      setBountys(prevBountys => [...prevBountys, res.data])
    })
    .catch(err => console.log(err))
  } 

  function deleteBounty(bountyId){
    axios.delete(`/bountys/${bountyId}`)
    .then(res => {
      setBountys(prevBountys => prevBountys.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => (console.log(err)))
  }

function editBounty(updates, bountyId){
  axios.put(`/bountys/${bountyId}`, updates)
  .then(res => {
    setBountys(prevBountys => prevBountys.map(bounty => bounty._id !== bountyId ? bounty : res.data))
  })
  .catch (err => console.log(err))
}

  return (
    <div>

    <AddTarget 
      submit={addBounty}
      btnText="Add Bounty"
    />
      {bountys.map(bounty => 
        <Bounty 
        {...bounty} 
        key={bounty._id}
        deleteBounty={deleteBounty}
        editBounty={editBounty}
      />)}
    </div>
  );
}

export default App;
