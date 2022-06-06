import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ConsultaAlunosComponent,
    CadastrarAlunosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
