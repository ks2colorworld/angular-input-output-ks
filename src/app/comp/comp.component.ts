import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  @Input() __item__:Item;

  private _item:Item;

  public get item(): Item{
    return this._item;
  }
  public set item(v:Item){
    this._item = v;
  }

  constructor() { }

  ngOnInit() {
    console.log('this.__item__', this.__item__);
    this.getItem();
    timer(4000).subscribe(_=>{
      this._item.name = this._item.name + ' 2222';
      console.log('this._item', this._item);
      console.log('this.__item__', this.__item__)
    })
  }

  getItem(){
    const id =  null; // 11; 
    if(!id && !this.__item__){
      console.warn('데이터를 표시할 수 없음 - 요청방식 확인!')
      return;
    }
    if(!id){
      console.log(1)
      this._item = this.__item__;
      return;
    }
    timer(2000).subscribe(_=>{
      console.log(2)
      // id = 11에 해당하는 데이터로딩해 오는 것으로 간주함.
      this._item = {name:'from data 1111'}
    })
  }

}

export interface Item{
  name:string,
}