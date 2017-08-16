# Ionic2-SelectModalComponent
Modal Component used for search of array of data

you need to import ModalController and SelectModalComponent;


options to send for SelectModalComponent:
	options for select-modal
	title: string is the title in the header
	data: any[] is the array of items to show
	cancelText: string is the text displayed in the cancel button			-	"Cancel" by default
	searchplaceholder: string is the placeholder shown in the searchbar		-	"Seach" by default
	keyfield: string is the fieldname of the ID field in the data array
	keyfield: string is the fieldname of the NAME field in the data array
	showCancelButton: boolean show/hide cancel button						-	true
	showSearchBar: boolean show/hide searchbar								-	true
	searchInputType: string the type of search input						-	"text" 
	
retreive data by calling modal.OnDidDismiss called whenever the user click on an item or on cancel
data receive is of type {ID: string, Name: string}

How To Use:
in TS file
create a function to show the modal
example:
	private showAccountModal() {
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
	
		let modal = this.modaler.create(SelectModalComponent, options);

		modal.onDidDismiss(data => {
		  if (data) {
			this.selectedAccount = data;
		  }
		});

		modal.present();
	}

In HTML
  <ion-list>
    <button ion-item (click)="showAccountModal()">
      <ion-label>Account</ion-label>
      <ion-note item-end>{{selectedAccount.Name}}</ion-note>
    </button>
  </ion-list>