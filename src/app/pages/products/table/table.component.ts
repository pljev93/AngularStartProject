import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {IProduct} from "../../../core/interfaces/product";
import {ProductsService} from "../../../core/services/products.services";
import {ModalService} from "../../../core/services/modal.service";
import {MatSort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit  {

  displayedColumns: string[] = ['id', 'title', 'image' , 'event'];
  dataSource = new MatTableDataSource<IProduct>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService,
    private _liveAnnouncer: LiveAnnouncer
  ) {
  }
  ngAfterViewInit() {
    this.getProducts()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getProducts(): void {
    this.productsService.getProductsApi().subscribe(products => {
      this.dataSource = new MatTableDataSource<IProduct>(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}



