import { Component, Input } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.scss',
  imports: [CardComponent, NavbarComponent],
})
export class DistrictsComponent {
  districtData = [
    {
      id: 1,
      title: 'Alappuzha',
      image: '/assets/alappuzha.png',
    },
    {
      id: 2,
      title: 'Ernakulam',
      image: '/assets/ekm.png',
    },
    {
      id: 3,
      title: 'Idukki',
      image: '/assets/idukki.png',
    },
    {
      id: 4,
      title: 'Kannur',
      image: '/assets/kannur.png',
    },
    {
      id: 5,
      title: 'Kasaragod',
      image: '/assets/kasargod.png',
    },
    {
      id: 6,
      title: 'Kollam',
      image: '/assets/kollam.png',
    },
    {
      id: 7,
      title: 'Kottayam',
      image: '/assets/kottayam.png',
    },
    {
      id: 8,
      title: 'Kozhikode',
      image: '/assets/kozhikkod.png',
    },
    {
      id: 9,
      title: 'Malappuram',
      image: '/assets/malappuram.png',
    },
    {
      id: 10,
      title: 'Palakkad',
      image: '/assets/palakkad.png',
    },
    {
      id: 11,
      title: 'Pathanamthitta',
      image: '/assets/pattanamtitta.png',
    },
    {
      id: 12,
      title: 'Thiruvananthapuram',
      image: '/assets/tvm.png',
    },
    {
      id: 13,
      title: 'Thrissur',
      image: '/assets/thrissur.png',
    },
    {
      id: 14,
      title: 'Wayanad',
      image: '/assets/wayanad.png',
    },
  ];

  constructor(private router: Router) {}

  getDetails(id: number) {
    console.log(id);
    this.router.navigate(['/attractions',id]);
  }
}
