import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-get-set',
  templateUrl: './countdown-timer-get-set.component.html',
  styleUrls: ['./countdown-timer-get-set.component.css']
})
export class CountdownTimerGetSetComponent implements OnInit {
  private intervalID = 0;
  message = '';
  remainingTime: number;

  @Input() seconds = 11;

  clearTime() {
    clearInterval(this.intervalID);
  }

  countdown() {
    this.clearTime();
    this.intervalID = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Đã đếm xong';
        this.clearTime();
      } else {
        this.message = `còn ${this.remainingTime} giây, đang đếm ngược`;
      }
    }, 1000);
  }

  start() {
    this.countdown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTime();
    this.message = `Dừng đếm ngược, còn lại ${this.remainingTime} giây`;
  }

  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = 'Ấn nút start để bắt đầu đếm ngược';
  }

  constructor() {
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

}
