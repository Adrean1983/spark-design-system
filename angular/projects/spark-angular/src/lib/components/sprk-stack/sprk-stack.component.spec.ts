import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkStackComponent } from './sprk-stack.component';

describe('SprkStackComponent', () => {
  let component: SprkStackComponent;
  let fixture: ComponentFixture<SprkStackComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SprkStackComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkStackComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should set the correct class for itemSpacing', () => {
    component.itemSpacing = 'tiny';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--tiny')).toEqual(true);
  });

  it('should set the correct class for itemSpacing', () => {
    component.itemSpacing = 'small';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--small')).toEqual(true);
  });

  it('should set the correct class for itemSpacing', () => {
    component.itemSpacing = 'medium';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--medium')).toEqual(true);
  });

  it('should set the correct class for itemSpacing', () => {
    component.itemSpacing = 'large';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--large')).toEqual(true);
  });

  it('should set the correct class for itemSpacing', () => {
    component.itemSpacing = 'huge';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--huge')).toEqual(true);
  });

  it('should set the correct class for splitAt', () => {
    component.splitAt = 'tiny';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--split@xs')).toEqual(true);
  });

  it('should set the correct class for splitAt', () => {
    component.splitAt = 'small';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--split@s')).toEqual(true);
  });

  it('should set the correct class for splitAt', () => {
    component.splitAt = 'medium';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--split@m')).toEqual(true);
  });

  it('should set the correct class for splitAt', () => {
    component.splitAt = 'large';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--split@l')).toEqual(true);
  });

  it('should set the correct class for splitAt', () => {
    component.splitAt = 'huge';
    fixture.detectChanges();
    expect(element.classList.contains('sprk-o-Stack--split@xl')).toEqual(true);
  });

  it('should add the correct classes if additionalClasses have values', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-o-Stack sprk-u-pam sprk-u-man',
    );
  });

  it(
    'should set the data-analytics attribute' +
      ' given a value in the analyticsString Input',
    () => {
      component.analyticsString = 'Stack 1';
      fixture.detectChanges();
      expect(element.hasAttribute('data-analytics')).toEqual(true);
      expect(element.getAttribute('data-analytics')).toEqual('Stack 1');
    },
  );

  it('should correctly apply data-id', () => {
    component.idString = 'Stack 1';
    fixture.detectChanges();
    expect(element.hasAttribute('data-id')).toEqual(true);
    expect(element.getAttribute('data-id')).toEqual('Stack 1');
  });
});
