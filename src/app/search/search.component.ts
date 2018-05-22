import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { OMDBConstants } from '../app.omdb.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

	private movieName = "Avengers";
	private URL = 'http://www.omdbapi.com/?&apikey=f6e99ee8';
	private movie;
	
	constructor(private http: HttpClient) { 
	}
	
	searchMovie(){
		this.http.get(this.URL  + "&t=" + this.movieName)
			.toPromise()
			.then(response =>
				{
					console.log("Response Received " + JSON.stringify(response));
					this.movie = response;
				}
			)
			.catch(this.handleError);
	}	

	private handleError(error: any): Promise<any> {
		console.error("An Error occured " + error);
		return Promise.reject(error.message || error);
	}
	
  ngOnInit() {
  }

}
