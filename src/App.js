import './App.css';
import React, { useState }from 'react'
import { useRepos } from './custom-hooks/useRepos'

function App() {
	const [id, setId] = useState(1)
	const [loading, repos] = useRepos(id)
	return (
		<div>
		{loading ? <h1>Loaidng</h1> :
   		 <div className="App">
		   	<button onClick={() => setId(id+1)}>+ 1 id</button>
			<p>{JSON.stringify(repos)}</p>
   		 </div>}
		</div>)
}
	
export default App;