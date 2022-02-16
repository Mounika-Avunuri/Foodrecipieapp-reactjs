import React,{useState} from 'react'
import Products from './Products';

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "aa092f46";
  const YOUR_APP_KEY ="6c74d4a12650b544ca5eb09f264b95b7";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className='foodrecipie'>
      <center>
        <h3 style={{color:"red"}}>Food Recipe App</h3><br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/><br/>
          <input type="submit" className="btn btn-primary" value="Search"/><br/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}

export default App