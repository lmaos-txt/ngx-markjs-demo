import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'ngx-markjs-demo';
	filteredText = 'Angular';
	log(msg: string) {
		console.log(msg);
	}
}
