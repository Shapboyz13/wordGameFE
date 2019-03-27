import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Location } from '@angular/common';;

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {

	constructor(
    private _authService: AuthService,
    private _location: Location,
    private _router: Router
  ){
	}

	canActivate(): boolean {
		if(this._authService.isAuthenticated()){
			if(this._location.path()){
				this._location.back();
			}
			this._router.navigate(['/dashboard']);
		}else{
			return true;
		}
	}

}
