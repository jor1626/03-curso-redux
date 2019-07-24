import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

//NGRX

import { StoreModule  } from "@ngrx/store";
import { StoreDevtoolsModule  } from "@ngrx/store-devtools";
import { todoReducers } from './todo/todo.reducers';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';


@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      TodoComponent,
      TodoAddComponent,
      TodosListComponent,
      TodoItemComponent,
      TodoFooterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      StoreModule.forRoot({todos: todoReducers}),
      StoreDevtoolsModule.instrument({
         maxAge: 25,
         logOnly: environment.production
      }),
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
