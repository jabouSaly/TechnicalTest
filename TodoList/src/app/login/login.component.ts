import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})
export class LoginComponent implements OnInit {

    submitted = false;
  
    loginForm: FormGroup = new FormGroup({});

    constructor(private primengConfig: PrimeNGConfig, private router: Router, private messageService: MessageService) {
      
    }
    ngOnInit() {
      this.loginForm = new FormGroup({
        'login': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
    });
    this.primengConfig.ripple = true;
    }
    
    onSubmit() { 
      if(this.loginForm.controls.login.value === "saly" && this.loginForm.controls.password.value ==="safetyline"){
        this.router.navigate(['/home']);
      }
      else {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Le login et mot de passe sont incorrects'});
      }
    }  
}
