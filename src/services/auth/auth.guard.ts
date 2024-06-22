import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import { isPlatformBrowser } from "@angular/common";
import {PLATFORM_ID} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const usersModel = inject(UsersModelService);
  const router = inject(Router);
  const platform = inject(PLATFORM_ID);

  if(isPlatformBrowser(platform)) {
    if (usersModel.checkLogin() && usersModel.checkAdmin()) {
      return true;
    } else {
      router.navigateByUrl('/').then(() => {
      })
      return false
    }
  } else {
    return false;
  }

};
