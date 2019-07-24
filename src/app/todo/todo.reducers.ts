import * as  AccionesTodo from './todo.actions';
import { TodoClass } from './models/todo';

const todo1 =  new TodoClass('salvar a tanos');
const todo2 =  new TodoClass('Tomar el traje de iroman');

todo2.completed = true;

const stateInitial: TodoClass[] = [todo1, todo2];


export function todoReducers(state = stateInitial, actions: AccionesTodo.Actions): TodoClass[] {

    switch (actions.type) {
        case AccionesTodo.CREARTODO:

            const newTodo = new TodoClass(actions.nombre);
            return [ ...state, newTodo];

        case AccionesTodo.TOGGLETODO:
            
            return state.map( todoEdit => {
                if(todoEdit.id === actions.id){
                    return  {
                        ...todoEdit,
                        completed:  !todoEdit.completed
                    }
                }else{
                    return todoEdit;
                }
            });

        // case AccionesTodo.ToggleAllTodoAction:
            
        //     return state.map( todoEdit => {
        //         return {
        //             ...todoEdit,
        //             completed: actions.completed
        //         }
        //     });

        case AccionesTodo.EDITARTODO: 

            return state.map( todoEdit => {
                if( todoEdit.id === actions.id){
                    return {
                        ...todoEdit,
                        nombre: actions.nombre
                    }
                }else{
                    return todoEdit;
                }
            });

        case AccionesTodo.BORRARTODO:

            return state.filter(todoEdit => todoEdit.id !== actions.id);

        default: 
            return state;
    }

}