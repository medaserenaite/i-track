import { Component } from '@angular/core';

@Component({
  selector: 'app-procedure-schedule',
  templateUrl: './procedure-schedule.component.html',
  styleUrls: ['./procedure-schedule.component.scss']
})
export class ProcedureScheduleComponent {
  procedures: any[] = [
    {
      name: "Canine Craniotomy"
    },
    {
      name: "Canine foreign body"
    },
    {
      name: "Feline femur fracture"
    }
  ]
}
