import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';
import { Router } from '@angular/router';

type AOA = any[][];

@Component({
  selector: 'app-to-do-file',
  templateUrl: './to-do-file.component.html',
  styleUrls: ['./to-do-file.component.scss'],
})
export class ToDoFileComponent implements OnInit {
  fileName: string;
  nameProject: string;

  constructor(
    private httpClient: HttpClient,
    private fileSaverService: FileSaverService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    this.nameProject = PDP.name_project;
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = evt.target;

    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      /* assingable */
      let partialData: AOA = [];
      const totalData = [];
      let i = 0;
      /* save data */
      for ( i = 0; i < wb.SheetNames.length; i++) {
        partialData = XLSX.utils.sheet_to_json(
          wb.Sheets[wb.SheetNames[i]],
          { raw: true, defval: null }
        );
        totalData.push(partialData);
      }

      let toRead = {};
      toRead = {
        sheetNames: wb.SheetNames,
        data: totalData
      };
      sessionStorage.setItem('dataProject', JSON.stringify(toRead));
      // this.router.navigateByUrl('materials-stage');
    };
    reader.readAsBinaryString(target.files[0]);
  }

  onDownload() {
    const fileName = `Formato REVIT.xlsx`;
    this.httpClient
      .get(`assets/files/Template-cuantificación-de-materialesv3.xlsx`, {
        observe: 'response',
        responseType: 'blob',
      })
      .subscribe((res) => {
        this.fileSaverService.save(res.body, fileName);
      });
    return;
  }

  saveFile() {
    this.router.navigateByUrl('materials-stage');
  }
}
