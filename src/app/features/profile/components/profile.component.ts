import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.model";
import {Route} from "../../../constants/route.constants";
import {Router} from "@angular/router";
import {ToyDetail} from "../../../models/toy-detail";
import {ItemsModel} from "../../../models/items.model";
import {ToysService} from "../../../services/toys.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  user: User | undefined;

  @Input()
  toys: ItemsModel[] | undefined;

  @Input()
  id: number = 0;

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Output()
  deleteToy: EventEmitter<ItemsModel> = new EventEmitter<ItemsModel>();

  public route = Route;
  image: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  public url: string = Route.TOY

  constructor(
    private router: Router,
    private toyService: ToysService,
  ) {}

  ngOnInit(): void {
  }

  getShortenedText(description: string) : string {
    if (description == null){
      return '';
    }
    const length = 100;
    let text = description.substring(0, length);
    if (text.length === length) {
      text += '...';
    }
    return text;
  }

  public edit(): void {
    this.router.navigate([Route.PROFILE + Route.SEPARATOR + Route.EDIT]);
  }

  public add(): void {
    this.router.navigate([Route.PROFILE + Route.SEPARATOR + Route.ADDTOY]);
  }

  public delete(toyId: number): void {
    this.toyService.delete(toyId).subscribe(value => {
      this.router.navigate([this.router.url])
    });
  }

}
