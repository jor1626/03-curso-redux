import { Action } from '@ngrx/store';


export const CREARTODO      = '[TODO] Agregar todo';
export const TOGGLETODO     = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO  = '[TODO] Toggle_all todo';
export const EDITARTODO     = '[TODO] Editar todo';
export const BORRARTODO     = '[TODO] Borrar todo';


export class CrearTodoAtion implements Action {
    readonly type = CREARTODO;

    constructor(public nombre: any){}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLETODO;

    constructor(public id: number){}
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completed: boolean){}
}

export class EditarTodoAction implements Action {
    readonly type = EDITARTODO;

    constructor(public id: number, public nombre: string){}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRARTODO;

    constructor(public id: number){}
}


export type Actions = CrearTodoAtion | ToggleAllTodoAction | ToggleTodoAction  | EditarTodoAction | BorrarTodoAction;