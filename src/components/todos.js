import { List } from 'immutable';
import uuid from 'node-uuid';

export default List.of(
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
});
