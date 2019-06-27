import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadComponent implements OnInit {
  image: Image | null = null
  constructor() {}

  ngOnInit() {
    this.image = null
  }

  onDragOver(e: Event): void {
    if (e) {
      e.preventDefault()
    }
  }

  onDrop(e: Event): void {
    if (e) {
      e.preventDefault()
      const drag = e as DragEvent
      if (drag && drag.dataTransfer) {
        const fileList: FileList = drag.dataTransfer.files
        const file: File = fileList[0]
        this.setImage(file)
      }
    }
  }

  private setImage(file: File) {
    const reader = new FileReader()

    reader.onload = (e: ProgressEvent) => {
      console.log(e)
      if (e && e.target) {
        const target = e.target as FileReader
        this.image = {
          name: file.name,
          src: target.result
        }
      }
    }
    reader.readAsDataURL(file)
  }

  deleteImage() {
    this.image = null
  }
}

interface Image {
  name: string
  src: string | ArrayBuffer | null
}
