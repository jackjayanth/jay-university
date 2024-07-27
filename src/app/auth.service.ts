import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  // add student
  addStudent(student: any) {
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  // get all students
  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  // delete student
  deleteStudent(student: any) {
    this.afs.doc('/Students/' + student.id).delete();
  }

  // update student
  updateStudent(student: any) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
