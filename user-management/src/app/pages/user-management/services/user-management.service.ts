import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private users: User[] = [];
  private usersSubject = new BehaviorSubject<User[]>([]);

  constructor() {
    this.addSampleUsers();
  }

  /**
   * Creates a new user and adds it to the users list
   * @param user The user data to add
   * @returns The created user with generated ID
   */
  createUser(user: User): User {
    const newUser = {
      ...user,
      id: Date.now().toString()
    };
    
    this.users.push(newUser);
    
    this.usersSubject.next([...this.users]);
    
    return newUser;
  }

  /**
   * Gets all users from the in-memory list
   * @returns An Observable that emits the current list of users and subsequent updates
   */
  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  /**
   * Deletes a user by ID
   * @param id The ID of the user to delete
   * @returns True if deleted, false if not found
   */
  deleteUser(id: string): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== id);
    
    if (this.users.length !== initialLength) {
      this.usersSubject.next([...this.users]);
      return true;
    }
    return false;
  }

  private addSampleUsers(): void {
    const sampleUsers: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        age: 28,
        country: 'USA'
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        age: 32,
        country: 'Canada'
      }
    ];
    
    this.users = sampleUsers;
    this.usersSubject.next([...this.users]);
  }
}
