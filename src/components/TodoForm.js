import React from 'react';
import uuid from 'node-uuid';

export default class TodoForm extends React.Component {
    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input ref="text" type="text" placeholder="What do you want to do?" />
                <button type="submit">Add todo!</button>
            </form>
        );
    }

    onSubmit(e) {
        e.preventDefault();
        const newTodo = { id: uuid.v4(), text: this.refs.text.value, done: false
        };
        this.refs.text.value = '';
        this.props.onAdd(newTodo);
    }
}
