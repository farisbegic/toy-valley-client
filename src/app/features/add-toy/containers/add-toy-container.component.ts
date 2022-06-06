import { Component, OnInit } from '@angular/core';
import {Gender} from "../../../models/enums/gender.enum";
import {Condition} from "../../../models/enums/condition.enum";
import {Toy} from "../../../models/toy.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ResolverResponse} from "../../../constants/resolver-response.constants";
import {User} from "../../../models/user.model";
import {Route} from "../../../constants/route.constants";
import {ToysService} from "../../../services/toys.service";

@Component({
  selector: 'app-add-toy-container',
  templateUrl: './add-toy-container.component.html',
})
export class AddToyContainerComponent implements OnInit {

  public genders: Gender[] = [Gender.male, Gender.female, Gender.unisex];
  public conditions: Condition[] = [Condition.used, Condition.brandNew];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toysService: ToysService,
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

  saveToy(toy: Toy): void {
    this.toysService.create(toy).subscribe(value => {
      this.router.navigate([Route.EMPTY]);
    });
  }
}
