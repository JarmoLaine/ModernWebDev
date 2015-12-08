import { List, Map } from 'immutable';
import uuid from 'node-uuid';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/todo-actions';

const defaultState = Map({
    todos: List.of(
    {
        text: 'My first todo item',
        done: true
    },
    {
        text: 'My SECOND todo item',
        done: false
    },
    {
        text: 'The "third" todo item',
        done: false
    },
    {
        text: 'Last (4.) todo item',
        done: true
    }
    ).map(todo => {
        return {
            ...todo,
            id: uuid.v4()
        };
    })
});

export default function(state = defaultState, action) {
    console.log(action, 'Some action');
    switch (action.type) {
        case ADD_TODO:
            return state.update('todos', todos => todos.push(action.payload));
            break;
        case TOGGLE_TODO:
            const { todos } = this.state;
            this.setState({ todos: todos.remove( todos.findIndex(t => t.id == id)) });
        default:
            return state;
    }
};
