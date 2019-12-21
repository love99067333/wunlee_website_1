import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecruitPage } from './recruit.page';

describe('RecruitPage', () => {
  let component: RecruitPage;
  let fixture: ComponentFixture<RecruitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecruitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
