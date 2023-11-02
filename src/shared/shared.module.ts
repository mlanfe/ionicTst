import {
  ModuleWithProviders,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdMobileModule,
    HttpClientModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  // providers: [AuthenticationInterceptor, ExceptionInterceptor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      // providers: [
      //   {
      //     provide: HTTP_INTERCEPTORS,
      //     useClass: AuthenticationInterceptor,
      //     multi: true,
      //   },
      //   {
      //     provide: HTTP_INTERCEPTORS,
      //     useClass: ExceptionInterceptor,
      //     multi: true,
      //   },
      // ],
    };
  }
}
