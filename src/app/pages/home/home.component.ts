import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NavbarComponent],
})
export class HomeComponent {
  displayVideo() {
    const videoUrl = 'https://www.youtube.com/embed/oGftLpMThn4?autoplay=1'; // Replace with your video URL
    const videoFrame = document.getElementById(
      'videoFrame'
    ) as HTMLIFrameElement;
    const hoverImage = document.getElementById(
      'hoverImage'
    ) as HTMLImageElement;
    videoFrame.src = videoUrl;
    videoFrame.classList.remove('d-none'); // Show the iframe
    hoverImage.classList.add('d-none'); // Hide the image
  }

  resetVideo() {
    const videoFrame = document.getElementById(
      'videoFrame'
    ) as HTMLIFrameElement;
    const hoverImage = document.getElementById(
      'hoverImage'
    ) as HTMLImageElement;
    videoFrame.src = ''; // Clear the src to stop video and reset iframe
    videoFrame.classList.add('d-none'); // Hide the iframe
    hoverImage.classList.remove('d-none'); // Show the image
  }
}
