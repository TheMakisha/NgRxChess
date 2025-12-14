import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const socket = io("ws://localhost:3000/");
    //socket.on("message", (msg: string) => console.log(msg));
    socket.emit("message", "blabla", (response: string) => console.log(response));
  }
  title = 'Frontend';
}
