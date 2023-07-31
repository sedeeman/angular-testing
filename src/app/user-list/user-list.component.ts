import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../interface/user';
import { UserListService } from '../service/user-list.service';
import { WebStorageService } from '../service/web-storage.service';
import { HighlightTextPipe } from '../pipes/highlight-text.pipe';
import { LocationIdPipe } from '../pipes/locationId.pipe';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [CommonModule, HighlightTextPipe, LocationIdPipe],
    template: `
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Find Users by Name"
        #filter
        (keyup)="update(filter.value)"
      />

      <span class="input-group-btn">
        <button
          class="btn btn-default"
          type="button"
          (click)="update(''); filter.value = ''"
        >
          Clear
        </button>
      </span>
    </div>

    <ul class="user-list">
      <!-- <li
        *ngFor="let user of users | async | locationId : 3 : 4 : 5 : 6 : 10 : 0"
        class="user-list-item"
        [innerHtml]="user.name | highlightText : filter.value"
      ></li> -->
      <li
        *ngFor="let user of users | async"
        class="user-list-item"
        [innerHtml]="user.name | highlightText : filter.value"
      ></li>
    </ul>
  `,
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
    public users: Promise<User[]> | null = null;

    constructor(
    private userListService: UserListService,
    private webStorageService: WebStorageService
    ) {}

    public async ngOnInit(): Promise<void> {
        this.webStorageService.getRemote().subscribe(
            (filtered) => {
                this.users =
          filtered === null
              ? this.userListService.getAll()
              : this.userListService.filter(filtered);
            },
            (error) => {
                console.error('ngOnInit Error', error);
            }
        );
    }

    public async update(text: string): Promise<void> {
        this.webStorageService.setRemote(text).subscribe((filtered) => {
            this.users =
        filtered === null
            ? this.userListService.getAll()
            : this.userListService.filter(filtered);
        });
    }
}
