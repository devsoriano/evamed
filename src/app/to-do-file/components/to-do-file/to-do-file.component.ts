import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { FileSaverService } from 'ngx-filesaver';

type AOA = any[][];

@Component({
  selector: 'app-to-do-file',
  templateUrl: './to-do-file.component.html',
  styleUrls: ['./to-do-file.component.scss'],
})
export class ToDoFileComponent implements OnInit {
  text = `{ "text": "This is text file!中文" }`;
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string;

  constructor(
    private httpClient: HttpClient,
    private fileSaverService: FileSaverService
  ) {}

  ngOnInit(): void {}

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

      /* grab first sheet */
      const wsname: string = wb.SheetNames[10];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  onDownload() {
    const fileName = `save.xlsx`;
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
}
