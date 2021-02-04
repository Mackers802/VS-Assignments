import './App.css';
import Bounty from "./Bounty"
import AddTarget from "./AddTarget"
import axios from "axios"
import React, {useState, useEffect} from "react"


function App() {
  const [bountys, setBountys] = useState([])
  
  function getBountys(){
    axios.get("/bountys")
    .then(res => setBountys(res.data))
    .catch(err => console.log("get error"))
  
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
    .catch(err => console.log("post error"))
  } 

  function deleteBounty(bountyId){
    axios.delete(`/bountys/${bountyId}`)
    .then(res => {
      setBountys(prevBountys => prevBountys.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log("delete error"))
  }

function editBounty(updates, bountyId){
  axios.put(`/bountys/${bountyId}`, updates)
  .then(res => {
    setBountys(prevBountys => prevBountys.map(bounty => bounty._id !== bountyId ? bounty : res.data))
  })
  .catch(err => console.log("edit error"))
}

function handleFilter(e){
  if(e.target.value === "all"){
      axios.get(`/bountys`)
      .then(res => setBountys(res.data))
      .catch(err => console.log(err))
  } else {
      axios.get(`/bountys/search/type?type=${e.target.value}`)
      .then(res => setBountys(res.data))
      .catch(err => console.log(err))
  }
  return axios.get(`/bountys`)
}

  return (
    <div>
      <div className="header">
      <img src="https://emojis.slackmojis.com/emojis/images/1493910217/2175/death-star.png?1493910217" alt="Death Star" width="100" height="100"></img>
        <h1>Death Star and Grill </h1>
      <img src="https://emojis.slackmojis.com/emojis/images/1550147082/5314/starwars_rebel.png?1550147082" alt="Rebel Seal" width="100" height="100"></img>
        <img src="https://emojis.slackmojis.com/emojis/images/1450319450/114/empire.png?1450319450" alt="Empire Seal" width="100" height="100"></img>
        <img src="https://emojis.slackmojis.com/emojis/images/1550147149/5315/starwars_jediorder.png?1550147149" alt="Jedi Seal" width="100" height="100"></img>
      </div>
      <br></br>
    <div className="addTarget">
    Please order bounty here: 
      <AddTarget 
        submit={addBounty}
        btnText="Add Bounty"
      />
    </div>
    <h1 style={{textAlign: "center"}}>Active Targets</h1>
    <h3>Filter Bountys</h3>
            <select onChange={handleFilter} className="filter">
                <option value= "all">All Bountys</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>

            </select>
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
