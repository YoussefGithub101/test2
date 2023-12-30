import { Pipe, PipeTransform } from '@angular/core';
interface TruncateResult {
    truncatedValue: string;
    missingValue: string;
  }
@Pipe({
    standalone: true,
  name: 'truncate'
  
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): TruncateResult  {
    if (!value) {
        return { truncatedValue: '', missingValue: '' };
      }
  
      if (value.length > limit) {
        const truncatedValue = value.substring(0, limit) + '...';
        const missingValue = value.substring(limit);
        return { truncatedValue, missingValue };
      } else {
        return { truncatedValue: value, missingValue: '' };
      }
    }
  }