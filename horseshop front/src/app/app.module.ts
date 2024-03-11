import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { SelasComponent } from './components/selas/selas.component';
import { Sela1Component } from './components/selas/sela1/sela1.component';
import { Sela2Component } from './components/selas/sela2/sela2.component';
import { RacoesComponent } from './components/racoes/racoes.component';
import { Racao1Component } from './components/racoes/racao1/racao1.component';
import { Racao2Component } from './components/racoes/racao2/racao2.component';
import { SuplementosComponent } from './components/suplementos/suplementos.component';
import { Suplemento1Component } from './components/suplementos/suplemento1/suplemento1.component';
import { Suplemento2Component } from './components/suplementos/suplemento2/suplemento2.component';
import { FinalizarComponent } from './components/finalizar/finalizar.component';
import { RastrearComponent } from './components/rastrear/rastrear.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ProdutosComponent,
    CarrinhoComponent,
    ContatoComponent,
    FaqComponent,
    HomeComponent,
    PromocoesComponent,
    SelasComponent,
    Sela1Component,
    Sela2Component,
    RacoesComponent,
    Racao1Component,
    Racao2Component,
    SuplementosComponent,
    Suplemento1Component,
    Suplemento2Component,
    FinalizarComponent,
    RastrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
