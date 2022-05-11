import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MarkjsHighlight } from '@lmaos/ngx-markjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
	@ViewChild('highlightCard') testCard!: ElementRef;
	title = 'ngx-markjs-demo';
	filteredText = 'Angular';
	log(msg: string) {
		console.log(msg);
	}

	ngAfterViewInit(): void {
		MarkjsHighlight.mark(this.testCard.nativeElement, 'ngx');
		MarkjsHighlight.markRange(this.testCard.nativeElement, [
			{ start: 10, length: 5 },
		]);
	}
}
