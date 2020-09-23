import {Component, OnInit} from '@angular/core';
import {Group} from '../../models/group.model';
import {AliasStatus} from '../../models/aliasStatus.enum';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../services/groups.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-group-page',
  templateUrl: './create-group-page.component.html',
  styleUrls: ['./create-group-page.component.scss']
})
export class CreateGroupPageComponent implements OnInit {

  groupForm!: FormGroup;
  aliasStatus = AliasStatus.NotCreated;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      alias: [null, [Validators.required, this.isAliasValid.bind(this)]],
      name: [null, [Validators.required]],
      isPublic: [false, [Validators.required]],
      description: [null]
    });
  }

  createGroup(): void {
    for (const i in this.groupForm.controls) {
      this.groupForm.controls[i].markAsDirty();
      this.groupForm.controls[i].updateValueAndValidity();
    }

    if (!this.groupForm.invalid) {
      this.groupsService.createGroup(this.groupForm.getRawValue())
        .subscribe(_ => this.router.navigate(['/', this.groupForm.controls.alias.value, 'home']));
    }
  }

  isAliasValid(input: FormControl) {
    if (!input.dirty) {
      return true;
    }

    if (input.value === null || input.value === '') {
      this.aliasStatus = AliasStatus.Invalid;
      return false;
    }

    if (this.aliasStatus !== AliasStatus.Validating) {
      this.aliasStatus = AliasStatus.Validating;
      this.groupsService.validateGroupAlias(this.groupForm.controls.alias.value)
        .subscribe(status => {
          if (status.isValid) {
            this.aliasStatus = AliasStatus.Valid;
            return true;
          }
          else {
            this.aliasStatus = AliasStatus.Invalid;
            return false;
          }
        });
    }
  }

}
