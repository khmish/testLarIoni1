import { Component, OnInit } from '@angular/core';
import { Todo, FirebaseServiceService } from '../service/firebase-service.service';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})
export class TestPagePage implements OnInit {

  todos: Todo[];

  testTodo: Todo={
    task: "I love you fatom",
    priority: 0,
    createdAt : new Date().getTime()
  }
  constructor(private firbase :FirebaseServiceService) { }

  ngOnInit() {
    // this.addTodo();
    this.firbase.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  addTodo()
  {
    
    this.firbase.addTodo(this.testTodo);
  }

  remove(item) {
    this.firbase.removeTodo(item.id);
  }

}
