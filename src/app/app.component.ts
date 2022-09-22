import { Component } from '@angular/core';

export interface Product {
  name: string;
  price: number;
  category?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title = 'pzi-shop';
  name = 'Miguel';
  age = 38;
  image = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    age: 18,
    name: 'Miguel',
    avatar: 'https://source.unsplash.com/random',
  };

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  register = {
    name: '',
    email: '',
    password: '',
  };

  names: string[] = ['Miguel', 'Nico', 'Juli'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
    },
    {
      name: 'Mis libros',
      price: 23,
    },
    {
      name: 'Casa para perro',
      price: 34,
    },
    {
      name: 'Gafas',
      price: 3434,
    },
  ];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  incresseAge() {
    this.person.age += this.person.age + 1 <= 100 ? 1 : 0;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
