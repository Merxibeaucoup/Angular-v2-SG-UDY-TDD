export type cardType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  img: string;
};

export const cardData: cardType[] = [
  {
    id: 1,
    title: 'Card 1',
    subtitle: 'Card 1 subtitle',
    description: 'Card 1 description',
    img: 'assets/cards-images/tree.jpeg',
  },
  {
    id: 2,
    title: 'Card 2',
    subtitle: 'Card 2 subtitle',
    description: 'Card 2 description',
    img: 'assets/cards-images/mountain.jpeg',
  },
  {
    id: 3,
    title: 'Card 3',
    subtitle: 'Card 3 subtitle',
    description: 'Card 3 description',
    img: 'assets/cards-images/biking.jpeg',
  },
];
