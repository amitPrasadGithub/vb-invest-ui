import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input'; 
import { MatFormFieldModule } from "@angular/material/form-field";

const material_components: Array<any> = [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
]

@NgModule({
    imports: [material_components],
    exports: [material_components],
    declarations: [],
})
export class MaterialModule {}