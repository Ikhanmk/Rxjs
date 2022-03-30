import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrls: ['./learn-rxjs.component.css']
})
export class LearnRxjsComponent implements OnInit {

  @ViewChild('validate')
  validateData!: ElementRef;

  studentList = ['mark','jhon','mohammed']
  students: Observable<string[]> = of(this.studentList)

  studentName: Observable<string> = of('Mohammed')

  studentObj = {
    id:10,
    name: 'Ram'
  }
 
  student$: Observable<any> = of(this.studentObj)

  employeeList = ['Mohammed','Abu bakr','Umar']
  employee$: Observable<string> = from(this.employeeList)

  constructor() { }

  ngOnInit(): void {

    this.students.subscribe(data =>{
      const seqNum$ = interval(2500);
      seqNum$.subscribe(num =>{
        console.log(data,num);

      })
      
    })

      this.studentName.subscribe(data =>{
        console.log(data);
        
      })

      this.student$.subscribe(data =>{
        console.log(data);
        
      })
      
      this.employee$.subscribe(data =>{
        console.log(data);
        
      })

     
   
  }

  rxjsEventObservable(){
    const btnObservable$ = fromEvent(this.validateData?.nativeElement,'click');

    btnObservable$.subscribe(data =>{
      console.log(data);
      
    })
        
  }

}
