import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { TestComponent } from "../test/test.component";

const routes: Routes = [
    { path: 'test', component: TestComponent }
]

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes) ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}