in TS file

create a function to show the modal
example:
	private showAccountModal() {
		// options for select-modal
		// title: string is the title in the header
		// data: any[] is the array of items to show
		// cancelText: string is the text displayed in the cancel button
		// searchplaceholder: string is the placeholder shown in the searchbar
		// keyfield: string is the fieldname of the ID field in the data array
		// keyfield: string is the fieldname of the NAME field in the data array
		// showCancelButton: boolean show/hide cancel button
		// showSearchBar: boolean show/hide searchbar
		// searchInputType: string the type of search input
		
		
		let options = {
		  title: "المؤسسة",
		  data: this.Accounts,
		  cancelText: "إلغاء",
		  searchPlaceholder: "ابحث",
		  keyfield: "accountid",
		  valuefield: "name",
		  showCancelButton: true
		  showSearchBar: true,
		  searchInputType: "text"
		};
	
		// import ModalController (modaler) and SelectModalComponent;
		let modal = this.modaler.create(SelectModalComponent, options);

		// onDidDismiss is called when the user select item or cancel
		// data is of type: {ID: string, Name: string}

		modal.onDidDismiss(data => {
		  if (data) {
			this.selectedAccount = data;
		  }
		});

		// show Modal
		modal.present();
	}

In HTML
  <ion-list>
    <button ion-item (click)="showAccountModal()">
      <ion-label>المؤسسة</ion-label>
      <ion-note item-end>{{selectedAccount.Name}}</ion-note>
    </button>
    <button ion-item (click)="showNationalityModal()">
      <ion-label>الجنسية</ion-label>
      <ion-note item-end>{{SelectedNationality.Name}}</ion-note>
    </button>
  </ion-list>