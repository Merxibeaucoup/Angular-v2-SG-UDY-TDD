import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratorComponent } from './password-generator.component';

describe('PasswordGeneratorComponent', () => {
  let component: PasswordGeneratorComponent;
  let fixture: ComponentFixture<PasswordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create password Generator component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label', () => {
    const PasswordGenerator = fixture.nativeElement as HTMLElement;
    const label = PasswordGenerator.querySelector('label');
    expect(label).toBeTruthy();
  });

  it('should have input field', () => {
    const PasswordGenerator = fixture.nativeElement as HTMLElement;
    const input = PasswordGenerator.querySelector('input');
    expect(input).toBeTruthy();
  });

  it("input field should be of type 'text'", () => {
    const PasswordGenerator = fixture.nativeElement as HTMLElement;
    const input = PasswordGenerator.querySelector('input');
    expect(input?.type).toBe('text');
  });

  it(`should have 3 checkbox's`, () => {
    const PasswordGenerator = fixture.nativeElement as HTMLElement;
    const checkbox = PasswordGenerator.querySelectorAll(
      'input[type="checkbox"]'
    );
    expect(checkbox.length).toEqual(3);
  });

  it('should have a generate button', () => {
    const PasswordGenerator = fixture.nativeElement as HTMLElement;
    const button = PasswordGenerator.querySelector('button');
    expect(button?.textContent).toContain('Generate!'.trim());
  });

  it('should return generated password in h4 and input field', () => {
    // Trigger change detection to update the view
    fixture.detectChanges();
    const PasswordGenerator = fixture.nativeElement as HTMLElement;
    const password = PasswordGenerator.querySelector('h4');
    const inputPassword = PasswordGenerator.querySelector('input');

    if (component.password) {
      expect(password?.textContent).toContain(component.password);
      expect(inputPassword?.value).toContain(component.password);
    }
  });

  it('should toggle includeLetters property on checkbox change', () => {
    // Initial value
    expect(component.includeLetters).toBe(false);
    const checkbox = fixture.nativeElement.querySelector(
      'input[type="checkbox"]'
    );
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.includeLetters).toBe(true);
  });

  //

  it('should toggle includeLetters property on Use Letters checkbox change', () => {
    // Initial value
    expect(component.includeLetters).toBe(false);

    // Trigger the change event on the Use Letters checkbox
    const checkbox = fixture.nativeElement.querySelector(
      'input[type="checkbox"]'
    );
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    // Expect includeLetters to be toggled
    expect(component.includeLetters).toBe(true);
  });

  it('should toggle includeNumbers property on Use Numbers checkbox click', () => {
    // Initial value
    expect(component.includeNumbers).toBe(false);

    // Trigger the click event on the Use Numbers checkbox
    const checkbox = fixture.nativeElement.querySelectorAll(
      'input[type="checkbox"]'
    )[1];
    checkbox.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    // Expect includeNumbers to be toggled
    expect(component.includeNumbers).toBe(true);
  });

  it('should toggle includeSymbols property on Use Symbols checkbox click', () => {
    // Initial value
    expect(component.includeSymbols).toBe(false);

    // Trigger the click event on the Use Symbols checkbox
    const checkbox = fixture.nativeElement.querySelectorAll(
      'input[type="checkbox"]'
    )[2];
    checkbox.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    // Expect includeSymbols to be toggled
    expect(component.includeSymbols).toBe(true);
  });

  it('should trigger onButtonClick method on button click', () => {
    // Spy on the onButtonClick method
    spyOn(component, 'onButtonClick');

    // Trigger the click event on the button
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    // Expect onButtonClick method to have been called
    expect(component.onButtonClick).toHaveBeenCalled();
  });

  it('should update length property on text input change', () => {
    // Initial value
    expect(component.length).toBe(0);
    spyOn(component, 'onChangeLength');
    const input = fixture.nativeElement.querySelector('input[type="text"]');
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.onChangeLength).toHaveBeenCalled();
  });

  it('should disable the button when conditions are not met', () => {
    // Initially, the button should be disabled
    const button = fixture.nativeElement.querySelector('button').disabled;
    expect(button).toBe(true);
    fixture.detectChanges();

    if (
      component.length > 0 &&
      (component.includeLetters ||
        component.includeNumbers ||
        component.includeSymbols)
    ) {
      expect(button).toBe(false);
    }
  });
});
