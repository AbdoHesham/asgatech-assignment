# wideBot-technical-assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.
# Features

- **Static Login**: A static login page with two predefined sets of credentials:
  - Admin: Access to admin view with full control over user management.
  - User: Access to user view with options to view and edit personal details.

- **Roles and Views**:
  - **Admin View**: 
    - Display a list of all users with their details.
    - Options to add, edit, and delete users.
    - Switch to view the application as a user.
    - Edit User form with pre-filled user details.
    - Delete User with a confirmation prompt.
  - **User View**: 
    - View personal profile details.
    - Edit personal details.

- **Navigation**:
  - Navigation bar with links to the home page and a logout button.
  - Home page content varies based on the logged-in role.
  - Logout button to log out and redirect to the login page.
  - Localization button to toggle between Arabic and English languages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
