import { Routes } from '@angular/router';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const title = 'tutorial';
export const routes: Routes = [
  {
    path: '',
    component: PasswordGeneratorComponent,
    title: `${title} - password generator`,
  },
  { path: 'cards', component: CardComponent, title: `${title} - cards` },
  { path: '**', component: PageNotFoundComponent, title: `${title} - 404` },
];
