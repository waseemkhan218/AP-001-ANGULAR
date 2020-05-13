import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css']
})
export class DatabindingAssignmentComponent implements OnInit {
public username: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public onReset() {
    this.username = '';
  }

}
