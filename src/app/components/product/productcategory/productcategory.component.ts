import { Component, OnInit } from '@angular/core';
import { ProductcategoryService } from './productcategory.service';
import { HttpErrorResponse } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';



export interface Productcategory{
  id : number;
  categoryName:string;
      
  }

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {
  displayedColumns : string[]= ['id','categoryName'];
  public productcategories : Productcategory[];
 

  constructor(private productcategoryservice : ProductcategoryService) { 

    this.productcategories =[];

    
  }
    


  ngOnInit(): void {
    
    this.getProductCategories(); 
  
    
 } 



  public getProductCategories(): void {
   this.productcategoryservice.getProductcategories().subscribe(
    (response: Productcategory[])=> {

      this.productcategories=response;

      console.log(this.productcategories) ;
      },
    (error: HttpErrorResponse)=> {
       alert(error.message);
       }
    ); 
        }



  deleteProduct(pcId: number) {
    this.productcategoryservice.deleteProduct(pcId).subscribe(data => {
      this.getProductCategories();
      })
   }
 

   


   

  }
  

    



