import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

export const permissionsGuard: CanActivateFn = (route, state) => {
  const permissionsService = inject(NgxPermissionsService);
  const requiredPermissions = route.data && route.data['permissions'];
  if (requiredPermissions) {
    return permissionsService.hasPermission(requiredPermissions);
  }
  return true;
};
