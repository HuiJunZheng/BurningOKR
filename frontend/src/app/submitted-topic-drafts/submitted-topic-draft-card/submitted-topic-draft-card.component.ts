import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OkrTopicDraft } from '../../shared/model/ui/OrganizationalUnit/okr-topic-draft/okr-topic-draft';
import { status } from '../../shared/model/ui/OrganizationalUnit/okr-topic-draft/okr-topic-draft-status-enum';
import { DateMapper } from '../../shared/services/mapper/date.mapper';
import { SubmittedTopicDraftDetailsComponent } from '../submitted-topic-draft-details/submitted-topic-draft-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-submitted-topic-draft-card',
  templateUrl: './submitted-topic-draft-card.component.html',
  styleUrls: ['./submitted-topic-draft-card.component.css']
})
export class SubmittedTopicDraftCardComponent {
  @Input() topicDraft: OkrTopicDraft;
  @Output() topicDraftDeletedEvent = new EventEmitter<OkrTopicDraft>();
  @Output() editedTopicDraftEvent: EventEmitter<OkrTopicDraft> = new EventEmitter<OkrTopicDraft>();

  enumStatus = status;

  constructor(
    private dialog: MatDialog,
    private dateMapper: DateMapper,
  ) { }

  viewTopicDraft(): void {
    const config: object = {
      data: {
        topicDraft: this.topicDraft,
        editedTopicDraftEvent: this.editedTopicDraftEvent,
      },
      width: '80vw'
    };
    this.dialog.open(SubmittedTopicDraftDetailsComponent, config);
  }

  notifyWrapperOfEditing(topicDraft: OkrTopicDraft): void {
    this.editedTopicDraftEvent.emit(topicDraft);
  }

  notifyWrapperOfDeletion(): void {
    this.topicDraftDeletedEvent.emit(this.topicDraft);
  }

  mapDateToLocaleString(date: Date): string{
    return this.dateMapper.mapToDate(date).toLocaleDateString();
  }
}
