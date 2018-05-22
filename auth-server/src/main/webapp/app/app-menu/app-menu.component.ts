import { OnInit, Component } from "@angular/core";

@Component({
    templateUrl: './app-menu.html'
})
export class AppMenuComponent implements OnInit {
    ngOnInit(): void {
        console.log('on init')
    }
}