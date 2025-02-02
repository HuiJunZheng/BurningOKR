import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SubmittedTopicDraftCardComponent } from './submitted-topic-draft-card.component';
import { Component, Input } from '@angular/core';
import { OkrTopicDraft } from '../../shared/model/ui/OrganizationalUnit/okr-topic-draft/okr-topic-draft';
import { MaterialTestingModule } from '../../testing/material-testing.module';
import { status } from '../../shared/model/ui/OrganizationalUnit/okr-topic-draft/okr-topic-draft-status-enum';
import { User } from '../../shared/model/api/user';
import { StatusDotComponent } from '../../shared/components/status-dot/status-dot.component';
import { MatDialog } from '@angular/material/dialog';

describe('SubmittedTopicDraftCardComponent', () => {
  let component: SubmittedTopicDraftCardComponent;
  let fixture: ComponentFixture<SubmittedTopicDraftCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedTopicDraftCardComponent, SubmittedTopicDraftActionButtonMockComponent, StatusDotComponent ],
      imports: [ MaterialTestingModule ],
      providers: [
        { provide: MatDialog, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedTopicDraftCardComponent);
    component = fixture.componentInstance;
    component.topicDraft = new OkrTopicDraft
    (1, status.submitted, new User('1', 'T', 'T'), 0, '', '', null, null, '', '', '', new Date(), '', '', '');
    fixture.detectChanges();
  });

  @Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-submitted-topic-draft-action-button',
    template: ''
  })
  class SubmittedTopicDraftActionButtonMockComponent {
    @Input() topicDraft: OkrTopicDraft;
  }

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
