import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MaschinenSite } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MaschinenSiteErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any, code?: number, name?: string): void {
    if (!environment.production) {
      console.error("ERROR: ", error);
    }
    const customError: MaschinenSite = {
      code: code,
      message: error.message,
      name: name
    };
    throw customError;
  }
}
