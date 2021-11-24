import React, {useEFfect, useContext, useEffect} from 'react'
import {useResource} from 'react-request-hook'

import {StateContext} from '../Contexts'
import {Link} from 'react-navi'
import Todo from '../main/Todo'

export default function TodoListPage({id}) {
    const {state} = useContext(StateContext);

    const [todo, getTodo] = useResource(() => ({
        url: `/todo/${id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }));

    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data) ? <Post {...todo.data}/> : 'Loading...'}
            <div><Link href="/">Back</Link></div>
        </div>
    )

}