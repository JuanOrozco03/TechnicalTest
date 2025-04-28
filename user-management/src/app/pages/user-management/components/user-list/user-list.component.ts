import { Component, inject, ViewChild } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserManagementService } from '../../services/user-management.service';
import { SnackbarService } from '../../../../core/components/snackbar/services/snackbar.service';
import { SnackbarType } from '../../../../core/components/snackbar/models/snackbar-type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usersColumns: string[] = [
    'name',
    'email',
    'age',
    'country',
    'actions'
  ];
  users!: MatTableDataSource<User>;
  subscription$: Subscription[] = [];

  userService = inject(UserManagementService);
  snackbar = inject(SnackbarService);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.subscription$ =[
      ...this.subscription$,
      this.userService.getUsers().subscribe(result => {
        this.users = new MatTableDataSource(result);
        this.users.paginator = this.paginator;
        this.users.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Ejemplos por pagina: ';
      })
    ]    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  deleteUsers(userId: string){
    if(userId){
      if(this.userService.deleteUser(userId)){
        this.snackbar.openCustomSnackbar("User deleted", SnackbarType.warning);
        return;
      }
    }    
    this.snackbar.openCustomSnackbar("User wasn't deleted", SnackbarType.error);
  }

  ngOnDestroy() {
    this.subscription$.forEach(sub => sub.unsubscribe());
  }

}
