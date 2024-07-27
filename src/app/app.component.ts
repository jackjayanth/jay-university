import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jay-university';
  studentsList: any;

  constructor(private data: AuthService) {
    this.data.getAllStudents().subscribe(
      (res) => {
        console.log('res', res);
        this.studentsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          console.log('data', data);
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching student data');
      }
    );
  }
}
