import { Component } from '@angular/core'

@Component({
  template: `
    <ui-sidebar-page headerTitle="Account" [links]="links">
      <router-outlet></router-outlet>
    </ui-sidebar-page>
  `,
})
export class WebAccountFeatureComponent {
  links = [{ label: 'Profile', path: 'profile', icon: '' }]
}
