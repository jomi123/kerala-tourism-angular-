import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-attractions',
  standalone: true,
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.scss',
  imports: [CardComponent, NavbarComponent, NgIf, NgFor, CommonModule],
})
export class AttractionsComponent {
  details: any[] = [];

  id!: number;
  district: any;

  constructor(private route: ActivatedRoute) {}
  async fetchDetails() {
    const response = await fetch('/assets/details.json');
    const data = await response.json();
    return data;
  }

  async ngOnInit() {
    this.details = await this.fetchDetails();
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log(this.id);
      this.district = this.details.find((d) => d.id === this.id);
      console.log(this.district);
    });
  }
}
