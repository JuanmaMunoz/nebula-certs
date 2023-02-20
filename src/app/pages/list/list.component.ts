import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICertificate } from 'src/app/models/interfaces';

@Component({
  selector: 'nebula-cert-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  certificateList: ICertificate[] = [
    {
      id: 'xxxxx-1',
      name: 'certificate---xxx----4---5-6',
      expDate: '15/08/2025',
      creationDate: '15/08/2023',
      company: 'Coca-cola',
      type: 'type-x',
    },
    {
      id: 'xxxxx-2',
      name: 'certificate---xxx----j---k-p',
      expDate: '12/05/2025',
      creationDate: '12/05/2023',
      company: 'Puleva',
      type: 'type-b',
    },
    {
      id: 'xxxxx-3',
      name: 'certificate---xxx----k---n-u',
      expDate: '10/05/2025',
      creationDate: '10/05/2023',
      company: 'Fender',
      type: 'type-f',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goDetail(id: string) {
    this.router.navigate(['/cert/detail/' + id]);
  }
}
