import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy{

 formularioContacto: FormGroup
 tipoDni: string =''
 mostrarDNI: boolean = false
 

  constructor( private form:FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''], 
      tipoDni:[''],
      dni: [''],
      email: ['', [Validators.required,Validators.email]]
  })
  }
   ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('juan')
    this.formularioContacto.get('nombre')?.disable()
      this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
        this.mostrarDNI = value != ''
       this.tipoDni = value
      })
   }

   ngOnDestroy(): void {
     console.log('Se destruyó el componente')
   }

  hasErrors( controlName: string, errorType: string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched  
  }

  enviar(){
    console.log(this.formularioContacto)
  }

}
