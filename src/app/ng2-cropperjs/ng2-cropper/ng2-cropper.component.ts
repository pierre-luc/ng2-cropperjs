import {Component, ElementRef, Output, Input, OnInit, AfterViewInit, EventEmitter} from '@angular/core';
declare var Cropper: any;

@Component({
  selector: 'ng2-cropper',
  templateUrl: './ng2-cropper.component.html',
  styleUrls: ['./ng2-cropper.component.css']
})
export class Ng2CropperComponent implements OnInit, AfterViewInit {
  @Input('options') options: any = {};
  @Output() doule = new EventEmitter();

  private cropper;
  private details;

  constructor(private _element: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cropper = new Cropper(this._element.nativeElement.querySelector('img'), {
      aspectRatio: 16 / 9,
      crop: () => {
      }
    });
  }

  cropImage(){
    this.doule.emit(this.cropper.getCroppedCanvas().toDataURL('image/jpeg'));
  }
}
