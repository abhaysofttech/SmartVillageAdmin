import { Component, OnInit, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from './common-modal.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
// import * as _ from 'underscore';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']


@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommonModalComponent implements OnInit {
  InitiativeInterest: FormGroup;
  area_model: any;
  subarea_model: any;
  initiativesArea: any;
  subArea: any;
  track: any;
  getAreaData: any;

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();



  changeArea(param) {
    var subArea = this.getAreaData.filter(x => {
      if (x.area == param)
        return x.subarea;
    })
    this.subArea = _.uniq(_.sortBy(_.map(subArea, 'subarea')))

    var track = this.getAreaData.filter(x => {
      if (x.area == param)
        return x.tracks;
    })
    this.subArea = _.uniq(_.sortBy(_.map(subArea, 'subarea')))
    this.track = _.uniq(_.sortBy(_.map(track, 'tracks')))
    console.log(this.subArea);

  }
  changeSubArea(param) {
   
    var track = this.getAreaData.filter(x => {
      if (x.subarea == param)
        return x.tracks;
    })
    this.track = _.uniq(_.sortBy(_.map(track, 'tracks')))

  }
  @Input() id: string;
  private element: any;
  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    // ensure id attribute exists
    debugger;
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    this.modalService.getArea()
      .then((response: any) => {
        //  console.log(response);
        this.getAreaData = response;
        this.initiativesArea = _.uniq(_.sortBy(_.map(response, 'area')));
        var subArea = this.getAreaData.filter(x => {
          if (x.area == this.initiativesArea[0])
            return x.subarea;
        })
        var track = this.getAreaData.filter(x => {
          if (x.area == this.initiativesArea[0])
            return x.tracks;
        })
        this.subArea = _.uniq(_.sortBy(_.map(subArea, 'subarea')))
        this.track = _.uniq(_.sortBy(_.map(track, 'tracks')))
        // console.log(Array.from(new Set(response.map(x => {return x.area}))));
        // this.initiativesArea = Array.from(new Set(response.map(x => {return x.area})));

      })
      .catch((error: any) => {
        console.log(error)
      })

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'common-modal') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }
  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('common-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('common-modal-open');
  }


}
