import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourceService } from '@sunbird/shared';
import { FileUploadService } from './../../services';
import { FileUploaderComponent } from './file-uploader.component';

describe('FileUploaderComponent', () => {
  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FileUploadService, ResourceService],
      declarations: [ FileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
