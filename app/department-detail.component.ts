import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Department }        from './department';
import { DepartmentService } from './department.service';

@Component({
  moduleId: module.id,
  selector: 'my-department-detail',
  templateUrl: 'department-detail.component.html',
  styleUrls: [ 'department-detail.component.css' ]
})
export class DepartmentDetailComponent implements OnInit {
  department: Department;

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.departmentService.getDepartment(id)
        .then(department => this.department = department);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
