import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  controls: any[] = [ ];
  count: number=0;
 
  formFields: any[]= [];
  designSubMenuVisible: boolean = false;

  toggleDesignSubMenu() {
    this.designSubMenuVisible = !this.designSubMenuVisible;
  }
  onDrop(event: CdkDragDrop<any[]>) {
    const control = this.controls[event.previousIndex];
    this.addControl(control);
    moveItemInArray(this.controls, event.previousIndex, event.currentIndex);
  }

  addControl(control: any) {
    const placeholder = `Search`;
    const text=`SearchbOx${this.count+1}`
    this.formFields.push({ ...control,placeholder, text,height: 30, width: 195, color: '', top: 1, right: 1, bottom: 0, left: 1});
  this.count++;
  }
 
}
