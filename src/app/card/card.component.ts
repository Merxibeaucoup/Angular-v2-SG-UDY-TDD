import { Component } from '@angular/core';
import { cardData, cardType } from './cardData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardData: cardType[] = cardData;
}
