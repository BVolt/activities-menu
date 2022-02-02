import {useState, useEffect} from 'react'
import ActMenu from './ActMenu'
import './index.css';

const URL = "https://johnson-activities-api.herokuapp.com/api/activities/"

function App() {
  const [category, setCategory] = useState('')
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)


  //runs on change of category and on initial render
  useEffect(()=>{

    //Fetches from the acitivities api
    const fetchActs = async() =>{
      setLoading(true)
      try{
        const acts = await fetch(`${URL+category}`).then(res=>res.json()).then(acts=>acts.activities)
        setActivities(acts)
        setLoading(false)
      }catch(err){
        console.log(err)
        setLoading(false)
      }
    } 

    fetchActs()

  }, [category])
  
  return (
    <div className="App">
      <div className="title">
        <h1 style={{fontSize: "45px"}}>Island Resort Activities</h1>
        <h3>Call the front office to schedule:</h3>
        <h4>202-555-0154</h4>
      </div>
      <div className="category-btn">
        <button className="btn" onClick={()=>setCategory('')}>All</button>
        <button className="btn" onClick={()=>setCategory('tour')}>Tours</button>
        <button className="btn" onClick={()=>setCategory('leisure')}>Leisure Activity</button>
        <button className="btn" onClick={()=>setCategory('sport')}>Sporting Activities</button>
      </div>
      <ActMenu activities={activities} category={category} loading={loading}/>
    </div>
  );
}

export default App;
