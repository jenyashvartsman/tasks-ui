import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task {}
