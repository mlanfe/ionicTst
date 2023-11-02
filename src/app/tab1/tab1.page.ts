import { Component } from '@angular/core';
import Echo from 'src/shared/definition/echo-plugin';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {
    this.tstCustomCapacitorplugin();
  }

  async tstCustomCapacitorplugin() {
    console.log('=================tstCustomCapacitorplugin');

    const { value } = await Echo.echo({ value: 'Hello World!' });
    console.log('Response from native:', value);
  }
}
