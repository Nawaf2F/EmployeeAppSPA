import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  template: `
<div class="containr">
  <div class="row">
    <div class="col-md-12">
    <router-outlet></router-outlet>
    </div>
  </div>
</div>
  `,
})
export class AppComponent {}
