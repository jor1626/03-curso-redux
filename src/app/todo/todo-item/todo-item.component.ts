import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TodoClass } from '../models/todo';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from './../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @ViewChild('inputNombre') inputNombre: ElementRef;

  formNombre: FormControl;
  formChecked: FormControl;
  editando: boolean;

  @Input() todo: TodoClass;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.formNombre = new FormControl(this.todo.nombre, Validators.required);
    this.formChecked = new FormControl(this.todo.completed);

    this.formChecked.valueChanges.subscribe( valor => {

      const action = new fromTodo.ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);

    });
  }

  editar(){
    this.editando = true;

    setTimeout( () => {
      this.inputNombre.nativeElement.select(); 
    }, 1);
  }

  terminarEdicion(){

    if(this.formNombre.invalid){
      return;
    }

    if(this.formNombre.value === this.todo.nombre){
      return;
    }
    
    const id      = this.todo.id;
    const nombre  = this.formNombre.value;

    const action  = new fromTodo.EditarTodoAction(id, nombre);

    this.store.dispatch(action);

    this.editando = false;
  }

  borrarTodo(){
    const action = new fromTodo.BorrarTodoAction(this.todo.id);

    this.store.dispatch(action);
  }

}
