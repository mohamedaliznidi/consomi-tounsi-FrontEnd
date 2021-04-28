import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Users } from './dashboard.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {}
