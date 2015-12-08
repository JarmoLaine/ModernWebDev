import { connect } from 'react-redux';
import TodoApp from '../TodoApp';
import { addTodo } from '../../actions/todo-actions';

function mapStateToProps(state) {
    return {
        todos: state.get('todos')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
