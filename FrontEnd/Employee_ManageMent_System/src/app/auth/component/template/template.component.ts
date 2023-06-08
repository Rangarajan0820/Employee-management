import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  name: String = '';
  submitted = true;

  message: String = 'welcome';

  constructor() { }

  ngOnInit(): void {
  }

  submit(heroForm: any) {
    this.submitted = true;
    // console.log(heroForm.invalid);
    if (heroForm.invalid) {
      return;
    } else {
      console.log(heroForm.value);
    }
  }
}
