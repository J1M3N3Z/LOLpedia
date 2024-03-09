import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-form',
    styleUrls: ['./search-form.component.css'],
    templateUrl: './search-form.component.html'
})

export class SearchFormComponent{
  summonerName: string;

  constructor (private router: Router) {}

  SendSummoner(){
    this.router.navigate(['/summoner', this.summonerName]);
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === "Enter" && this.summonerName) {
      this.SendSummoner();
    }
  }
}
