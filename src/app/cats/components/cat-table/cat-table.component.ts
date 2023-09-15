import { Component, ViewChild } from '@angular/core';
import { CatService } from '../../services/cat.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cat-table',
  templateUrl: './cat-table.component.html',
  styleUrls: ['./cat-table.component.css']
})
export class CatTableComponent {

  dataSource = new MatTableDataSource()
  displayedColumns: string[] = ['name', 'origin', 'description', 'weight'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private catService : CatService){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAllCat()
  }

  getAllCat(){
    this.catService.getAllCats().subscribe((response : any) => {
      this.dataSource.data = response
      this.dataSource.data.forEach((cat: any) => {
        cat.weight = `Imperial :${cat.weight.imperial} k\nMetric: ${cat.weight.metric} k`
      })
    })
  }



}
