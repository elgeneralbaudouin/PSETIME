import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-permissions',
  templateUrl: './demandespermissions.component.html',
  styleUrls: ['./demandespermissions.component.css']
})
export class DemandesPermissionsComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      datePicker: [null],
      datePickerTime: [null],
      monthPicker: [null],
      rangePicker: [[]],
      rangePickerTime: [[]],
      timePicker: [null]
    });
  }
}
