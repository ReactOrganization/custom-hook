import React from 'react'
import { getOneTodo } from './../api'

export function useRepos(id) {
	const [repos, setRepos] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		setLoading(true)
		getOneTodo(id).then(response => response.json())
 		 .then(json => { setRepos(json); setLoading(false) })
	}, [id])

	return [loading, repos, setRepos]
}