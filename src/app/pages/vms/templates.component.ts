import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Template } from '@/objects/template';

declare var jQuery: any;
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit {
  @ViewChild('modal') modal: any;
  modalColor: string = 'default';
  modalTitle: string;
  modalContent: string;
  templates: Template[];

  constructor(private apiService: ApiService) {}

  getTemplates() {
    this.apiService.getTemplates(null, 100).subscribe(
      templates => (this.templates = templates),
      err => this.showErrorModal(err)
    );
  }

  ngOnInit(): void {
    this.getTemplates();
  }

  showModal(color: string, title: string, content: string) {
    this.modalColor = color;
    this.modalTitle = title;
    this.modalContent = content;
    jQuery(this.modal.nativeElement).modal('show');
  }

  showErrorModal(err: any) {
    if (err.error['error_description'] === undefined) {
      this.showModal(
        'danger',
        'API does not respond',
        'Houston, we have a problem!'
      );
    } else {
      this.showModal(
        'danger',
        err.error['error'],
        err.error['error_description']
      );
    }
  }
}
