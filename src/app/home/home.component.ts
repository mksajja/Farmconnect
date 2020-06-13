import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {CommonService} from "../common.service";
// import { MapsAPILoader, MouseEvent } from '@agm/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  myControl = new FormControl();
  options: string[] = ['Apple', 'Apricots', 'Banana', 'Blackberries', 'Blueberries', 'Carambola', 'Cherries', 'Custard-Apple', 'Date Fruit', 'Grapes',
                        'Guava', 'Jackfruit', 'Kiwifruit', 'Lemon', 'Mango', 'Orange', 'Papaya', 'Pineapple', 'Pomegranate', 'Watermelon'];
  filteredOptions: Observable<string[]>;
  @ViewChild('search')
  public searchElementRef: ElementRef;


  optionsLocation={
    types: ['(regions)'],
    componentRestrictions: { country: 'IN' }
    } ;

  placeid1 = ' ';
  formattedaddress = ' ';
  lat : any ;
  long : any ;
  public handleAddressChange(address: any) {
    this.formattedaddress = address.formatted_address ;
    this.placeid1 = address.place_id ;
    this.lat = address.geometry.location.lat() ;
    this.long = address.geometry.location.lng() ;
    console.log('formattedaddress,placeid,lat,long',this.formattedaddress,this.placeid1,this.lat,this.long);
    // Do some stuff
}


  constructor(private fb: FormBuilder,
    private commonService:CommonService,
    // private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      category: [''],
      product: [''],
      location: [''],
      distance: ['']
    });
    // this.mapsAPILoader.load().then(() => {

    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {

    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //         console.log('place',place.name);
    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }



    //     });
    //   });
    // });
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val))
    );
  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  onSearch(){
    console.log('searchForm Controls',this.searchForm.value);
    console.log('form.category',this.searchForm.value.category);
    this.commonService.search(this.searchForm.value).subscribe(
      response => console.log('Success!', response),
      error =>console.log('Error!', error)
    );
   this.commonService.editSearch(this.searchForm.value.category);
  }
}
