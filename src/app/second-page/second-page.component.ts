import { Component, OnInit } from '@angular/core';
interface Slide {
  imageUrl: string;
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})


export class SecondPageComponent implements OnInit {
 
  slides: Slide[] = [
   
    { imageUrl: '/assets/icons/phones.jpg'},
    { imageUrl: '/assets/icons/preprocessing.png'},
    { imageUrl: '/assets/icons/rapidai.webp'},
 
 
  ];
  currentSlideIndex = 0;
 

  ngOnInit() {
    this.showSlide();
    
  }

 

  showSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[this.currentSlideIndex].classList.add('active');
  }

  nextSlide() {
    this.currentSlideIndex++;
    if (this.currentSlideIndex >= this.slides.length) {
      this.currentSlideIndex = 0;
    }
    this.showSlide();
  }

  prevSlide() {
    this.currentSlideIndex--;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.showSlide();
  }
}
