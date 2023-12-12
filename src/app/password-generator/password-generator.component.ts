import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {} from '@angular/router';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss',
})
export class PasswordGeneratorComponent {
  password: string = '';
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onButtonClick() {
    const numbers: string = '0123456789';
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols: string = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let characters: string = '';

    if (this.includeLetters) {
      characters += letters;
    }
    if (this.includeNumbers) {
      characters += numbers;
    }
    if (this.includeSymbols) {
      characters += symbols;
    }

    console.log('Selected Characters:', characters);

    this.password = '';

    let generatedPassword: string = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[index];
    }
    this.password = generatedPassword;

    console.log('Generated Password:', this.password);
  }

  onChangeLength(event: Event) {
    this.length = parseInt((event.target as HTMLInputElement).value);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
