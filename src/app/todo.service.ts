import { Injectable } from '@angular/core';
import { Dexie } from 'dexie';
import { v4 } from 'uuid';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Dexie {
  todos!:Dexie.Table<Todo, string>;

  constructor() { 
    super('TodoDB');

    this.version(1).stores({
      todos: 'id'
    });
  }

  getAll(){
    return this.todos.toArray();
  }

  add(title:string){
    this.todos.add({title, id: v4(), done: false});
  }
}
