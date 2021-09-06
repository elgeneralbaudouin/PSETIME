import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule} from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DemandesPermissionsComponent } from './pages/Demandes/Permissions/demandespermissions/demandespermissions.component';
import { PermissionsComponent } from './pages/Requetes/Permissions/permissions/permissions.component';
import { DemandesRevendicationsComponent } from './pages/Demandes/Revendications/demandesrevendications/demandesrevendications.component';
import { RevendicationsComponent} from './pages/Requetes/Revendications/revendications/revendications.component';
import { CongesComponent } from './pages/Employes/Conges/conges/conges.component';
import { GroupesComponent } from './pages/Employes/Groupes/groupes/groupes.component';
import { JourFeriersComponent } from './pages/Employes/Jour_feriers/jour-feriers/jour-feriers.component';
import { PresencesComponent } from './pages/Employes/Presences/presences/presences.component';
import { TousLesEmployesComponent } from './pages/Employes/Tous_les_employes/tous-les-employes/tous-les-employes.component';
import { NotificationsComponent } from './pages/Notifications/notifications/notifications.component';
import { ParametresComponent } from './pages/Parametres/parametres/parametres.component';
import { AdministrateurComponent } from './pages/Tableau de bord/Administrateur/administrateur/administrateur.component';
import { EmployeComponent } from './pages/Tableau de bord/Employe/employe/employe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, } from '@angular/material/Table';
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzFormModule} from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { GraphComponent } from './pages/Tableau de bord/Components/graph/graph.component';
import { CartComponent } from './pages/Tableau de bord/Components/cart/cart.component';
import { TableComponent } from './pages/Tableau de bord/Components/table/table.component';
import { CalendComponent } from './pages/Tableau de bord/Components/calend/calend.component';
import { GraphesComponent } from './pages/Tableau de bord/Components/graphes/graphes.component';
import { GraphessComponent } from './pages/Tableau de bord/Components/graphess/graphess.component';
import { PieComponent } from './pages/Tableau de bord/Components/pie/pie.component';
import { MontreComponent } from './pages/Tableau de bord/Components/montre/montre.component';
import { GraphesssComponent } from './pages/Tableau de bord/Components/graphesss/graphesss.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { PieAComponent } from './pages/Tableau de bord/Components/pie-a/pie-a.component';
import { PieBComponent } from './pages/Tableau de bord/Components/pie-b/pie-b.component';
import { PieCComponent } from './pages/Tableau de bord/Components/pie-c/pie-c.component';
import { PieDComponent } from './pages/Tableau de bord/Components/pie-d/pie-d.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';


registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,
    CongesComponent,
    GroupesComponent,
    JourFeriersComponent,
    PresencesComponent,
    TousLesEmployesComponent,
    NotificationsComponent,
    LoginComponent,
    ParametresComponent,
    AdministrateurComponent,
    EmployeComponent,
    DemandesRevendicationsComponent,
    DemandesPermissionsComponent,
    RevendicationsComponent,
    PermissionsComponent,
    GraphComponent,
    CartComponent,
    TableComponent,
    CalendComponent,
    GraphesComponent,
    PieComponent,
    GraphessComponent,
    MontreComponent,
    GraphesssComponent,
    PieAComponent,
    PieBComponent,
    PieCComponent,
    PieDComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzMenuModule,
    NzFormModule,
    NzDatePickerModule,
    NzTimePickerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDividerModule,
    HighchartsChartModule,
    MatCardModule,
    NgApexchartsModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),

    FlexLayoutModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),



    MatFormFieldModule,
    RouterModule.forRoot([
    {path:'Administrateur', component: AdministrateurComponent},
    {path:'Tous_les_employes', component: TousLesEmployesComponent},
    {path:'Conges', component: CongesComponent},
    {path:'Groupes', component: GroupesComponent},
    {path:'Presences', component: PresencesComponent},
    {path:'Jour_feriers', component: JourFeriersComponent},
    {path:'Notifications', component: NotificationsComponent},
    {path:'Parametres', component: ParametresComponent},
    {path:'D_Revendications', component: DemandesRevendicationsComponent},
    {path:'D_Permissions', component: DemandesPermissionsComponent},
    {path:'R_Revendications', component: RevendicationsComponent},
    {path:'R_Permissions', component: PermissionsComponent},
    {path:'Employe', component: EmployeComponent},

    ])

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CalendComponent],
})
export class AppModule { }
