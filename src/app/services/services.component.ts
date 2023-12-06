import { AfterContentInit, AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination,EffectFade, EffectCube, EffectCoverflow} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination,EffectCube,EffectFade,EffectCoverflow]);

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServicesComponent implements OnInit{
 
  
  
  a:{icon:string,serial:number,topic:string,desc:string}[]=[
    { icon:"architecture",serial:1,topic:"Front-end Architecture & Design",desc:"My approach includes a robust frontend architecture, incorporating a set of tools and processes to enhance the overall quality of frontend code."},
    { icon:"browser_updated",serial:2,topic:"SPA Application &Development",desc:"Single page applications development services with powerful front end, JavaScript-based frameworks for quick scalability."},
    { icon:"code",serial:3,topic:"UI & UX App Development",desc:"UI/ UX development services of data-driven, highly scalable web applications with a rich user interface."},
    { icon:"component_exchange",serial:4,topic:"Legacy frontend modernization",desc:"Elevate your UI/UX to be truly impressionable, intuitive, refreshingly customer-centric and  delightful experience for your users"},
    { icon:"integration_instructions",serial:5,topic:"HTML5/ CSS Development",desc:"HTML5/CSS3 development services providing front-end development using HTML5 tools to build quality and robust applications."},
  
  ];


  num!:number;
  
  ngOnInit(): void {
   this.getWindowSize();
  }
 
  
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
  this.getWindowSize();
  }

  getWindowSize() {
   var s=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
   if(s<=576)
   this.num=1;
   else if(s<=998 && s>576)
   this.num=2;
   else if(s>998 && s<=1100)
   this.num=3;
   else
   this.num=3

  }





}
