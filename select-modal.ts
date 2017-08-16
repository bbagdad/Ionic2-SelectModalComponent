import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'select-modal',
  templateUrl: 'select-modal.html'
})
export class SelectModalComponent {
  private dataArray: any[] = [];
  private modalData: SelectModalData = <SelectModalData>{
    showSearchBar: true,
    searchPlaceholder: "Search",
    showCancelButton: true,
    cancelText: "Cancel",
    searchInputType: "text"
  };
  private items: { ID: string, Name: string }[];


  constructor(private params: NavParams, private view: ViewController) {
    console.log('Hello SelectModal Component');
  }

  ionViewDidLoad() {
    this.modalData = Object.assign(this.modalData, (<SelectModalData> this.params.data));
    this.dataArray = this.modalData.data.map(d => {
      return {
        ID: d[this.modalData.keyfield],
        Name: d[this.modalData.valuefield]
      };
    });
    this.initializeItems();
  }

  initializeItems() {
    this.items = this.dataArray.concat();
  }

  selectItem(value) {
    this.view.dismiss(value);
  }

  dismiss() {
    this.view.dismiss();
  }

  private onSearch(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim()) {
      this.items = this.items.filter(item => item.Name.toLowerCase().indexOf(val.toLowerCase()) != -1);
    }
  }
}

export interface SelectModalData {
  title: string;
  showCancelButton: boolean;
  cancelText: string;
  showSearchBar: boolean;
  searchPlaceholder: string;
  searchInputType: string;
  data: any[];
  keyfield: string;
  valuefield: string;
}
