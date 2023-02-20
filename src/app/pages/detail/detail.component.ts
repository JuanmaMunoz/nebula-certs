import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICertificate } from 'src/app/models/interfaces';

@Component({
  selector: 'nebula-cert-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public certificateSelected: ICertificate = {} as ICertificate;
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

  private subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        this.certificateSelected = this.certificateList.filter((e: ICertificate) => e.id === (params as { id: string }).id)[0];
      })
    );
  }
}
