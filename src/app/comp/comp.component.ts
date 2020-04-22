import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  @Input() __item__:Item;
  @Output() __UpdateHeroComplete__ = new EventEmitter();
  // @Output() __CreateHeroComplete__ = new EventEmitter();

  private _item:Item;

  public get item(): Item{
    return this._item;
  }
  public set item(v:Item){
    this._item = v;
  }

  constructor() { }

  ngOnInit() {
    console.warn('get item from @Input()')
    console.log('this.__item__', this.__item__);
    this.getItem();
    timer(4000).subscribe(_=>{
      console.warn('change item.name')
      this._item.name = this._item.name + ' 2222';
      console.log('this._item', this._item);
      console.log('this.__item__', this.__item__)
    })
  }

  getItem(){
    const id =  11;//null; // 11; // 서버에서 요청할 데이터 key(url에서 가져올)
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
      console.warn('get item from server (우선처리)')
      // id = 11에 해당하는 데이터로딩해 오는 것으로 간주함.
      this._item = {name:'fromServer'}
    })
  }

  setItem(){
    timer(1000).subscribe(_=>{
        /* updatecomplete event */
        this.__UpdateHeroComplete__.emit({value: this._item});
    })
  }

}

export interface Item{
  name:string,
}