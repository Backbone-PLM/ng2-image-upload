import { HttpHeaders } from '@angular/common/http';
import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FileHolder } from '../file-holder';
import { ImageUploadService } from '../image-upload.service';
import { Style } from '../style';
import { UploadMetadata } from '../upload-metadata';
export declare class ImageUploadComponent implements OnInit, OnChanges {
    private imageService;
    files: FileHolder[];
    fileCounter: number;
    fileOver: boolean;
    showFileTooLargeMessage: boolean;
    beforeUpload: (metadata: UploadMetadata) => UploadMetadata | Promise<UploadMetadata>;
    buttonCaption: string;
    disabled: boolean;
    cssClass: string;
    clearButtonCaption: string;
    dropBoxMessage: string;
    fileTooLargeMessage: string;
    headers: HttpHeaders | {
        [name: string]: string | string[];
    };
    dropBoxClickable: boolean;
    max: number;
    maxFileSize: number;
    preview: boolean;
    partName: string;
    style: Style;
    supportedExtensions: string[];
    url: string;
    withCredentials: boolean;
    uploadedFiles: string[] | Array<{
        url: string;
        fileName: string;
        blob?: Blob;
    }>;
    removed: EventEmitter<FileHolder>;
    uploadStateChanged: EventEmitter<boolean>;
    uploadFinished: EventEmitter<FileHolder>;
    previewClicked: EventEmitter<FileHolder>;
    private inputElement;
    private pendingFilesCounter;
    constructor(imageService: ImageUploadService);
    ngOnInit(): void;
    deleteAll(): void;
    deleteFile(file: FileHolder): void;
    previewFileClicked(file: FileHolder): void;
    ngOnChanges(changes: any): void;
    onFileChange(files: FileList): void;
    onFileOver: (isOver: any) => any;
    private onResponse;
    private processUploadedFiles;
    private uploadFiles;
    private uploadSingleFile;
}
