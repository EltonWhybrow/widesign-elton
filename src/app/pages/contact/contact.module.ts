import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactComponent, DetailsComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule],
})
export class ContactModule { }
