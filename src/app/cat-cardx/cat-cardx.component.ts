import { Component, Input } from '@angular/core';
import { Cat } from '../app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cat-cardx',
  imports: [MatCardModule, MatButtonModule],
  standalone: true,
  templateUrl: './cat-cardx.component.html',
  styleUrl: './cat-cardx.component.scss'
})
export class CatCardxComponent {

  @Input() cat!: Cat;
}
