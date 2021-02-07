import './App.css';
import React, { useState }from 'react'
import { getOneTodo } from './api'

function useRepos(id) {
	const [repos, setRepos] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		setLoading(true)
		getOneTodo(id).then(response => response.json())
 		 .then(json => { setRepos(json); setLoading(false) })
	}, [id])

	return [loading, repos, setRepos]
}

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