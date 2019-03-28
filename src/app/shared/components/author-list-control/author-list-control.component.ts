import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { IUser } from 'src/app/interfaces/IUser';

import { AuthorListLoadAction } from 'src/app/store/actions/author-list.actions';
import { IAuthorListState } from 'src/app/store/reducers/author-list.reducer';

@Component({
  providers: [{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorListControlComponent),
  }, {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AuthorListControlComponent),
  }],
  selector: 'app-author-list-control',
  styleUrls: [ './author-list-control.component.sass' ],
  templateUrl: './author-list-control.component.html',
})
export class AuthorListControlComponent implements ControlValueAccessor, Validator {
  public author = new FormControl('');
  public authors: Array<IUser> = [];
  public options: Array<IUser> = [];

  private authorList: Array<IUser>;
  private authorList$: Observable<IAuthorListState>;
  private subscription: Subscription;

  private onChange: (val: Array<IUser>) => void;
  private onTouch: () => void;

  constructor(
    private store: Store<{ authorList: IAuthorListState }>,
  ) {
    this.authorList$ = this.store.pipe(select('authorList'));
    this.subscription = this.authorList$.subscribe((state: IAuthorListState) => {
      const { items } = state;
      this.authorList = items;
    });
  }

  public ngOnInit(): void {
    this.store.dispatch(new AuthorListLoadAction());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public removeAction: (user: IUser) => void = (user: IUser) => {
    this.authors = this.authors.filter((item: IUser): boolean =>
      !(item.firstName === user.firstName && item.lastName === user.lastName));
    this.updateOptions();
    this.onChange(this.authors);
  }

  public addAction: (user: IUser) => void = (user: IUser) => {
    this.authors.push(this.authorList.find((item) =>
      item.firstName === user.firstName && item.lastName === user.lastName));
    this.updateOptions();
    this.onChange(this.authors);
  }

  public touchHandler: () => void = () => {
    this.onTouch && this.onTouch();
  }

  public changeHandler: () => void = () => {
    this.onChange && this.onChange(this.authors);
  }

  public validate(control: AbstractControl) {
    return control.valid ? null : { invalid: true };
  }

  public writeValue(value: Array<IUser>): void {
    this.authors = value;
    this.updateOptions();
  }

  public registerOnChange(callback: (val: Array<IUser>) => void): void {
    this.onChange = callback;
  }

  public registerOnTouched(callback: () => void): void {
    this.onTouch = callback;
  }

  public updateOptions(): void {
    const filter = this.author.value;
    this.options = this.authorList.filter((item): boolean =>
      !!(item.firstName.toLowerCase().startsWith(filter)
        || item.lastName.toLowerCase().startsWith(filter))
        && !this.authors.find((author) =>
          author.firstName === item.firstName
            && author.lastName === item.lastName));
  }
}
