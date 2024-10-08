import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  form=this.fb.group({
    'nombre':['', Validators.required],
    'apellido':['', Validators.required],
    'contrasena':['', Validators.required],
    'mail':['', Validators.required],
    'dni':['', Validators.required],
    'tipo':['', Validators.required],
    'fecha':['', Validators.required]
  })

  constructor(private fb:FormBuilder, public dialogRef:MatDialogRef<RegistrarseComponent>){}

  close():void{
    this.dialogRef.close();
  }


}
