import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MetadataService {
    constructor(
        private http: HttpClient
    ) {}
    getMetadata(componentName: string) {
        return this.http.get(`http://localhost:3000/metadata/${componentName}`);
    }
}