import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SubmittedTopicDraftsComponent } from './submitted-topic-drafts.component';
import { MaterialTestingModule } from '../testing/material-testing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TopicDraftMapper } from '../shared/services/mapper/topic-draft-mapper';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('SubmittedTopicDraftsComponent', () => {
  let component: SubmittedTopicDraftsComponent;
  let fixture: ComponentFixture<SubmittedTopicDraftsComponent>;

  const routerMock: any = jest.fn();

  const topicDraftMapperMock: any = {
    getAllTopicDrafts$: jest.fn()
  };

  topicDraftMapperMock.getAllTopicDrafts$.mockReturnValue(of(undefined));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedTopicDraftsComponent ],
      imports: [ MaterialTestingModule,
                 RouterTestingModule,
                 HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {provide: TopicDraftMapper, useValue: topicDraftMapperMock},
        {provide: Router, useValue: routerMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedTopicDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
        .toBeTruthy();
  });
});
