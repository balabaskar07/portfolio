import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination,EffectFade, EffectCube, EffectCoverflow,Autoplay} from 'swiper';


SwiperCore.use([Navigation, Pagination,EffectCube,EffectFade,EffectCoverflow,Autoplay]);


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class WorkComponent {
img:string[]=[
  
  './assets/e5.avif',
  './assets/e2.avif',
  './assets/e3.avif',
  './assets/e6.avif']
}
