import React, {useEFfect, useContext, useEffect} from 'react'
import {useResource} from 'react-request-hook'

import {StateContext} from '../Contexts'
import {Link} from 'react-navi'
import Todo from '../main/Todo'

export default function TodoListPage({todoId}) {
    const {state} = useContext(StateContext);

    const [todo, getTodo] = useResource(() => ({
        url: `/todo/${todoId}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }));

    useEffect(getTodo, [todoId])

    return (
        <div>
            {(todo && todo.data) ? <Todo {...todo.data}/> : 'Loading...'}
            <div><Link href="/">Back</Link></div>
        </div>
    )

}