import React from 'react';
import todos from '../todos';
import TodoList from './TodoList';
import { List } from 'immutable';
import TodoForm from './TodoForm';
import { addTodo } from '../actions/todo-actions';

export default class TodoApp extends React.Component {

    render() {
        const { todos, addTodo } = this.props;
        return (
            <div>
                <TodoList
                    onToggle={this.toggleTodo.bind(this)}
                    onRemove={this.removeTodo.bind(this)}
                    todos={todos.sortBy(todo => todo.text).sortBy(todo => todo.done)}
                />
                <TodoForm onAdd={addTodo} />
            </div>
        );
    }

//    removeTodo(id) {
//        const { todos } = this.state;
//        this.setState({ todos: todos.remove( todos.findIndex(t => t.id == id)) });
//    }

    toggleTodo(id) {
        const { todos } = this.state;
        this.setState({
            todos: todos.update(
                todos.findIndex(t => t.id === id),
                todo => {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
            )
        });
    }
}
