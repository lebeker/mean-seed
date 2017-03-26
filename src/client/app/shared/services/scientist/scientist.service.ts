import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

<<<<<<< HEAD:src/client/app/shared/services/name-list/name-list.service.ts
import {config} from '../../../../../../tools/config';

=======
import { Config } from '../config/env.config'
>>>>>>> master:src/client/app/shared/name-list/name-list.service.ts
/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class ScientistService {

  public static baseUrl = Config.API + '/api/name-list';

  e:any = API
  /**
   * Creates a new ScientistService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Promise for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  list(): Observable<string[]> {
    return this.http.get(ScientistService.baseUrl)
                    //.toPromise()
                    .map((res: Response) => {
                        return res.json()
                    })
                    .catch(this.handleError);
  }

  post(name:string): Promise<boolean> {
    return this.http.post(ScientistService.baseUrl, {name: name})
        .toPromise()
        .then((res: Response) => {
          return res.json();
        })
        .catch(this.handleError);
  }

  delete(name:string): Promise<boolean> {
      return this.http.delete(ScientistService.baseUrl, {body: {name: name}})
        .toPromise()
        .then((res) => res.json())
          .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
