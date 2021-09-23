import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.scss']
})
export class BoardModeratorComponent implements OnInit {
  [x: string]: any;
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe(
      (data: string | undefined) => {
        this.content = data;
      },
      (err: { error: string; }) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}