import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from './../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      nombre: ['', Validators.required]
    })
  }

  agregarTodo(){
    if(this.todoForm.invalid){
      return
    }

    const action = new fromTodo.CrearTodoAtion(this.todoForm.get('nombre').value);

    this.store.dispatch(action);

    this.todoForm.get('nombre').setValue('');

  }

}
