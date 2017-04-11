import { EventEmitter, NgZone, OnInit, TemplateRef } from '@angular/core';
import { FileUploaderOptions, FileUploader } from 'ng2-file-upload';
import { FileButtonStyleType } from './file-button-style.type';
export declare class FileButtonComponent implements OnInit {
    private ngZone;
    id: string;
    name: string;
    disabled: boolean;
    styleType: FileButtonStyleType;
    uploader: FileUploader;
    options: FileUploaderOptions;
    afterAddingFile: EventEmitter<{}>;
    beforeUploadItem: EventEmitter<{}>;
    successItem: EventEmitter<{}>;
    progressAll: EventEmitter<{}>;
    dropzoneTemplate: TemplateRef<any>;
    readonly cssClasses: any;
    isItemSuccessful: boolean;
    progress: string;
    fileName: string;
    fileOverDropzone: boolean;
    constructor(ngZone: NgZone);
    ngOnInit(): void;
    onAfterAddingFile(fileItem: any): void;
    onBeforeUploadItem(fileItem: any): void;
    onProgressAll(progress: any): void;
    onSuccessItem(item: any, response: any, status: any, headers: any): void;
    fileOverBase(event: any): void;
}
