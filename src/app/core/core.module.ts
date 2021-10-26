import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { MaschinenSiteErrorHandlerService } from './services';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
  ],
  providers: [
    { provide: ErrorHandler, useExisting: MaschinenSiteErrorHandlerService }
  ]
})
export class CoreModule { }
