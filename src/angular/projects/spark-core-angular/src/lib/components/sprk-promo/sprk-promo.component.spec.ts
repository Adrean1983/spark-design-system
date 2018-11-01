import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkPromoComponent } from './sprk-promo.component';

describe('SparkPromoComponent', () => {
  let component: SparkPromoComponent;
  let fixture: ComponentFixture<SparkPromoComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SparkPromoComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkPromoComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes when additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(
      'sprk-c-Promo sprk-o-Stack sprk-o-Stack--split@s sprk-u-man'
    );
  });

  it('should add additional classes to img link when additionalClassesImgLink has a value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.additionalClassesImgLink = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item sprk-o-Stack__item--half@s sprk-u-man'
    );
  });

  it('should not add additional classes to img link when additionalClassesImgLink has no value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item sprk-o-Stack__item--half@s'
    );
  });

  it('should add additional classes to the flag link when additionalClassesFlagLink has a value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.isFlag = true;
    component.additionalClassesFlagLink = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item--fourth@s sprk-o-Stack__item sprk-u-man'
    );
  });

  it('should not add additional classes to the flag link when additionalClassesFlagLink has no value', () => {
    component.imgSrc = 'www.example.com/image.jpg';
    component.isFlag = true;
    fixture.detectChanges();
    expect(element.querySelector('a').classList.toString()).toEqual(
      'sprk-o-Stack__item--fourth@s sprk-o-Stack__item'
    );
  });

  it('should add additional classes to content div when additionalClassesContent has a value', () => {
    component.additionalClassesContent = 'sprk-u-man';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Promo__content').classList.toString()
    ).toEqual(
      'sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-u-man'
    );
  });

  it('should not add additional classes to content div when additionalClassesContent has no value', () => {
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-c-Promo__content').classList.toString()
    ).toEqual(
      'sprk-c-Promo__content sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large'
    );
  });
});
