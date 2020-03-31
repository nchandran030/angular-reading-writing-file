import { ReadWriteService } from './../../service/read-write.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-write-file',
  templateUrl: './write-file.component.html',
  styleUrls: ['./write-file.component.scss']
})
export class WriteFileComponent implements OnInit {

  private subscriptionData: Subscription;
  dataFromFile;
  data:string='Sample Content To File';

  constructor(private readWriteService: ReadWriteService) { }

  ngOnInit(): void {
  }

  addDataToFile() {
    this.subscriptionData = this.readWriteService.writeDataToFile(this.data).subscribe((response) => {
      console.log('response===== ',response);
      this.dataFromFile = response;
    }, (error) => {
      console.log(error);
    });
  }

}
