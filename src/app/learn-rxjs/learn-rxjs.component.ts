import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrls: ['./learn-rxjs.component.css']
})
export class LearnRxjsComponent implements OnInit {

  studentList = ['mark','jhon','mohammed']
  students: Observable<string[]> = of(this.studentList)

  studentName: Observable<string> = of('Mohammed')

  studentObj = {
    id:10,
    name: 'Ram'
  }
 
  student$: Observable<any> = of(this.studentObj)

  constructor() { }

  ngOnInit(): void {

    this.students.subscribe(data =>{
      console.log(data);
    })

      this.studentName.subscribe(data =>{
        console.log(data);
        
      })

      this.student$.subscribe(data =>{
        console.log(data);
        
      })
      
   
  }

}
