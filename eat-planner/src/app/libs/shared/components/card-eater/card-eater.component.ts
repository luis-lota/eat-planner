import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-eater',
  standalone: true,
  imports: [],
  templateUrl: './card-eater.component.html',
  styleUrl: './card-eater.component.scss'
})
export class CardEaterComponent {
  @Input()
  name: string | undefined = 'Segunda-feira';

}
