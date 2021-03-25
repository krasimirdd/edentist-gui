import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo-app';
  chatDialogOpen = false;

  constructor(public snackBar: MatSnackBar, public auth: AuthService) {
  }

  openChat(): void {
    document.getElementById('chatDialog').style.display = 'block';
    this.chatDialogOpen = true;
  }

  closeChat(): void {
    document.getElementById('chatDialog').style.display = 'none';
    this.chatDialogOpen = false;
  }

}
