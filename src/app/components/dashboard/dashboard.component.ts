import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Users {
  id: number;
  username: string;
  email: string;
  password: string;
  phone_number: number;
  role: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'username',
    'email',
    'password',
    'phone_number',
  ];
  public users: Users[];
  constructor(private dashboardservice: DashboardService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.dashboardservice.getUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
