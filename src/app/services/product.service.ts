import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/@types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private uri = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.uri + '/products');
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(this.uri + '/products/' + id);
  }

  addProduct(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.uri + '/products', data);
  }
  updateProduct(data: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(this.uri + '/products/' + data.id, data);
  }

  deleteProduct(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(this.uri + '/products/' + id);
  }
}
