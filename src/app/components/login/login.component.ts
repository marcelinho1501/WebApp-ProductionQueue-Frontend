import { Component } from '@angular/core';
import {
  PoPageLoginCustomField,
  PoPageLoginLiterals,
  PoPageLoginAuthenticationType,
} from '@po-ui/ng-templates';
import { PoDialogService, PoLanguage } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'TOTVS Moda - Kanban';
  logo = 'assets/imgs/logo_totvs.svg';
  logoFooter = 'assets/imgs/logo_totvs_cinza.svg';
  theme = 'assets/imgs/theme.png';
  authenticationType = PoPageLoginAuthenticationType.Bearer;
  loading: boolean = false;

  constructor(
    private router: Router,
  ) {}

  customField: PoPageLoginCustomField = {
    property: 'environment',
    placeholder: 'Insira seu ambiente',
  };

  customLiterals: PoPageLoginLiterals = {
    welcome: 'Boas-vindas',
    loginPlaceholder: 'Insira seu usuário',
    loginHint: 'Nome do usuário no TOTVS Moda',
  };

  readonly customLanguage: Array<PoLanguage> = [];

  ngOnInit() {
  }

  public checkLogin(formData: any): void {
    this.loading = true;
    this.router.navigate(['/home']);
  }
}
