import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
  inputs: ['hero']
})

export class HeroDetailComponent {
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams
  ) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    String(id)

    this._heroService.getHero(id)
      .then(hero => {
        this.hero = hero;
      });
  }

  goBack() {
    window.history.back();
  }
}
