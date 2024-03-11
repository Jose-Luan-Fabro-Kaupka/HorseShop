import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrinhoComponent } from "./components/carrinho/carrinho.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { ContatoComponent } from "./components/contato/contato.component";
import { FaqComponent } from "./components/faq/faq.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { PromocoesComponent } from "./components/promocoes/promocoes.component";
import { RacoesComponent } from "./components/racoes/racoes.component";
import { Racao1Component } from "./components/racoes/racao1/racao1.component";
import { Racao2Component } from "./components/racoes/racao2/racao2.component";
import { SelasComponent } from "./components/selas/selas.component";
import { Sela1Component } from "./components/selas/sela1/sela1.component";
import { Sela2Component } from "./components/selas/sela2/sela2.component";
import { SuplementosComponent } from "./components/suplementos/suplementos.component";
import { Suplemento1Component } from "./components/suplementos/suplemento1/suplemento1.component";
import { Suplemento2Component } from "./components/suplementos/suplemento2/suplemento2.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./components/home/home.component";
import { RastrearComponent } from "./components/rastrear/rastrear.component";
import { FinalizarComponent } from "./components/finalizar/finalizar.component";

const routes: Routes = [
    {path: 'carrinho', component: CarrinhoComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'promocoes', component: PromocoesComponent},
    {path: 'racoes', component: RacoesComponent},
    {path: 'racao1', component: Racao1Component},
    {path: 'racao2', component: Racao2Component},
    {path: 'selas', component: SelasComponent},
    {path: 'sela1', component: Sela1Component},
    {path: 'sela2', component: Sela2Component},
    {path: 'suplementos', component: SuplementosComponent},
    {path: 'suplemento1', component: Suplemento1Component},
    {path: 'suplemento2', component: Suplemento2Component},
    {path: 'home', component: HomeComponent},
    {path: 'finalizar', component: FinalizarComponent},
    {path: 'rastrear', component: RastrearComponent}
]

@NgModule({
    declarations: [],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};