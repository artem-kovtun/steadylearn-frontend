export class File {
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.isDownloading = false;
    }

    id: string;
    name: string;
    isDownloading: boolean;
}