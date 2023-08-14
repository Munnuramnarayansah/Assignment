import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-landingPage',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})


export class LandingPageComponent implements OnInit {
  getOption: any ={};
  selected:any={};
  hoursRange: number[] = Array.from({ length: 24 }, (_, i) => i); // Generates an array [0, 1, ..., 23]
  minutesRange: number[] = Array.from({ length: 60 }, (_, i) => i); // Generates an array [0, 1, ..., 59]

  selectedHour: number = 0;
  selectedMinute: number = 0;
  constructor(private navbarservice: NavbarService){}
  public UserName:any;

  formatNumber(value: number): string {
    // Format the number with leading zeros if less than 10
    return value < 10 ? `0${value}` : `${value}`;
  }
  
  
  ngOnInit(): void {
    this.UserName=this.navbarservice.UserName;
    console.log(this.UserName)
    console.log(this.navbarservice.UserName);
    this.getOption= {
    "AtmID": "Atm1",
    "ATMType": [
        {
            "ATM_Type":"Public"
        },
        {
            "ATM_Type":"Private"
        }
        ],
        
    "TypeOfEstablishment": [
           
            {
                "TypeOfEstablishment_Type":"Metro"
            },
            {
                "TypeOfEstablishment_Type":"Supermercados"
            }
        ],
    "SubLocal": [
            
            {
                "SubLocal_Type":"Hospital"
            },
            {
                "SubLocal_Type":"Hotel"
            },
            {
                "SubLocal_Type":"Universidad"
            }
        ],
    "Region": [
            {
                "Region_Type":"Mobile ATM"
            }
        ],
    "Commune": [
            {
                "Commune_Type":"Recoleta"
            }
        ],
    "Locales": [
            {
                "Locales_Type":"Others"
            }
        ],
    "SBIF_Location": [ 
            {
                "SBIF_Location":"020801 - CALAMA"
            }
        ],
    }

  }
}
