import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {

  slidesItems: any = [
    
    { img: '../../assets/pic/guide/1208-18.jpg' },
    { img: '../../assets/pic/guide/1208-1.jpg' },
    { img: '../../assets/pic/guide/1208-2.jpg' },
    { img: '../../assets/pic/guide/1208-3.jpg' },
    { img: '../../assets/pic/guide/1208-4.jpg' },
    { img: '../../assets/pic/guide/1208-5.jpg' },
    { img: '../../assets/pic/guide/1208-6.jpg' },
    { img: '../../assets/pic/guide/1208-7.jpg' },
    { img: '../../assets/pic/guide/1208-8.jpg' },
    { img: '../../assets/pic/guide/1208-9.jpg' },
    { img: '../../assets/pic/guide/1208-10.jpg' },
    { img: '../../assets/pic/guide/1208-11.jpg' },
    { img: '../../assets/pic/guide/1208-12.jpg' },
    { img: '../../assets/pic/guide/1208-13.jpg' },
    { img: '../../assets/pic/guide/1208-14.jpg' },
    { img: '../../assets/pic/guide/1208-15.jpg' },
    { img: '../../assets/pic/guide/1208-16.jpg' },
    { img: '../../assets/pic/guide/1208-17.jpg' }
  ];
  slideOpts = {
    initialSlide: 1,
    speed: 1000,
    loop: true,
    autoplay: true,
    pager: true
  };
  constructor() { }

  ngOnInit() {
  }

}
