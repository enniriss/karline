import { Injectable } from '@nestjs/common';
import * as fs from 'fs'; 
import * as path from 'path';
@Injectable()
export class AppService {
  getHello(): string {
    try {
      const filePath = path.join(__dirname, '../public', 'index.html');
      const htmlContent = fs.readFileSync(filePath, 'utf8');
      return htmlContent;
    } catch (error) {
      console.error('Error reading HTML file:', error);
      return 'Error reading HTML file';
    }
  }
}
