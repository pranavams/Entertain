/**
 * 
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OMDBConstants {
    private omdbURL = 'http://www.omdbapi.com/';
    private ApiKey = 'apikey=PlzBanMe';
    public URL = this.omdbURL + '?' + this.ApiKey;
    private http: HttpClient;
}