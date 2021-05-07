import {Component, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // this.chat.talk();
  }

}
