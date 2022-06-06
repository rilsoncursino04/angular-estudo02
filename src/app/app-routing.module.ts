import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';

const routes: Routes = [
  { path: 'cadastrar', component: CadastrarAlunosComponent },
  { path: 'consultar', component: ConsultaAlunosComponent },
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
