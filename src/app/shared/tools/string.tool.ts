import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StringTools {

    extensionIcons = {
        'txt': '../../../../assets/images/files/txt.svg',
        'docx': '../../../../assets/images/files/word.svg',
        'doc': '../../../../assets/images/files/word.svg',
        'xlsx': '../../../../assets/images/files/excel.svg',
        'xlsm': '../../../../assets/images/files/excel.svg',
        'xls': '../../../../assets/images/files/excel.svg',
        'ppt': '../../../../assets/images/files/powerpoint.svg',
        'pptx': '../../../../assets/images/files/powerpoint.svg',
        'pdf': '../../../../assets/images/files/pdf.svg',
        'png': '../../../../assets/images/files/png.svg',
        'jpg': '../../../../assets/images/files/jpg.svg',
        'html': '../../../../assets/images/files/html.svg',
        'css': '../../../../assets/images/files/css.svg',
        'rest': '../../../../assets/images/files/file.svg'
    }

    getFileExtenstion(filename: string): string {
        return filename.split('.').pop().toLocaleLowerCase();
    }

    getFullnameAbbreviation(fullname: string): string {
      if (fullname == null) return '?';

      return fullname.split(' ').map(e => e[0]).join('');
    }

    getIconUrlByFilename(filename: string): string {
        const url = this.extensionIcons[this.getFileExtenstion(filename)];
        if (url == null){
            return this.extensionIcons.rest;
        }
        return url;
    }

  yyyymmddDate(date: Date): string {
    const formattedDate = new Date(date);

    const mm = formattedDate.getMonth() + 1;
    const dd = formattedDate.getDate();

    return [formattedDate.getFullYear(), '-', (mm > 9 ? '' : '0') + mm, '-', (dd > 9 ? '' : '0') + dd ].join('');
  }
 }
