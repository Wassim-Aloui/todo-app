import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/cors/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string | null = null;


  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.controls[key].markAsTouched();
      });
      return;
    }

    this.userService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response && response.access_token) {
          localStorage.setItem("access_token", response.access_token);
          localStorage.setItem("connected", "true");
          this.router.navigateByUrl("/todo");
        } else {
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
        }
      },
      error: (error) => {
        console.log('error', error)
      }
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }
}
