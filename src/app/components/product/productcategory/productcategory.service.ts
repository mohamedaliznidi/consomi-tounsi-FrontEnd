import { Injectable } from '@angular/core';
import {Productcategory} from './productcategory.component'
import {Observable}  from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductcategoryComponent } from './productcategory.component';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  constructor(private http : HttpClient){}
  private apiserverUrl=environment.apiBaseUrl;

    public getProductcategories():Observable<Productcategory[]>{

        return this.http.get<Productcategory[]>(`${this.apiserverUrl}/productcategory/productcategories`)

    }

    public addProduct(pc : Productcategory):Observable<Productcategory>{

      return this.http.post<Productcategory>(`${this.apiserverUrl}/productcategory/add`,pc)


  }

  public updateProduct(pc : Productcategory):Observable<Productcategory>{

      return this.http.put<Productcategory>(`${this.apiserverUrl}/productcategoryupdate`,pc);
      

  }

  public deleteProduct(pcId : number):Observable<void>{

      return this.http.delete<void>(`${this.apiserverUrl}/productcategory/removeproductcategory/${pcId}`);
      

  }



}
