import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  priceForm = this.fb.group({
    name:['', Validators.required],
    phone:['', Validators.required],
    car:['', Validators.required],
  })
  carsData = [
  {
    img: "1.png",
    name: "Lamborghini Huracan Spyder",
    gear: "Привод полный",
    engine: "5.2",
    places: 2
  },
  {
    img: "2.png",
    name: "Chevrolet Corvette",
    gear: "Привод полный",
    engine: "6.2",
    places: 2
  },

  {
    img: "3.png",
    name: "Ferrari California",
    gear: "Привод полный",
    engine: "3.9",
    places: 4
  },

  {
    img: "4.png",
    name: "Lamborghini Urus",
    gear: "Привод полный",
    engine: "4.0",
    places: 5
  },
  {
    img: "5.png",
    name: "Audi R8",
    gear: "Привод полный",
    engine: "5.2",
    places: 2
  },

  {
    img: "6.png",
    name: " Chevrolet Camaro",
    gear: "Привод полный",
    engine: "2.0",
    places: 4
  },

]

  constructor(private fb: FormBuilder ){
  }

  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (car) {
      this.priceForm.patchValue({car: car.name});
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }



  onSubmit(){
    if(this.priceForm.valid){
      alert('Спасибо за заявку мы свяжемся с вами в ближайшее время!!!');
      this.priceForm.reset();
    }
  }
}
