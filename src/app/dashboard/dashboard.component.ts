import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Oracle là gì? Những điều cần biết về Oracle trên Blockchain', cols: 1, rows: 1,content:'Oracle trên Blockchain là gì? Oracle có thể hiểu là nguồn cấp dữ liệu, là các dịch vụ của bên thứ ba cung cấp cho...' },
          { title: 'Ceramic Network là gì? Toàn bộ thông tin về dự án Ceramic', cols: 1, rows: 1, content:'Ceramic Network là gì? Ceramic là một mạng dữ liệu phi tập trung mang lại khả năng tổng hợp dữ liệu không giới hạn cho...' },
          { title: 'Toàn bộ thông tin về quỹ đầu tư Tiger Global', cols: 1, rows: 1, content:'Quỹ đầu tư Tiger Global là quỹ đầu tư chống lưng cho nhiều kỳ lân (startup định giá từ 1 tỷ USD) nhất trên...' },
          { title: 'Tiger Global và FTX đầu tư $200 triệu vào Helium (HNT)', cols: 1, rows: 1 , content:'Mạng viễn thông phi tập trung Helium đã huy động được 200 triệu USD trong vòng tài trợ Series D với mức định giá...'}
        ];
      }

      return [
        { title: 'Oracle là gì? Những điều cần biết về Oracle trên Blockchain', cols: 2, rows: 1, content:'Oracle trên Blockchain là gì? Oracle có thể hiểu là nguồn cấp dữ liệu, là các dịch vụ của bên thứ ba cung cấp cho...' },
        { title: 'Ceramic Network là gì? Toàn bộ thông tin về dự án Ceramic', cols: 1, rows: 1, content:'Ceramic Network là gì? Ceramic là một mạng dữ liệu phi tập trung mang lại khả năng tổng hợp dữ liệu không giới hạn cho...'},
        { title: 'Toàn bộ thông tin về quỹ đầu tư Tiger Global', cols: 1, rows: 2, content:'Quỹ đầu tư Tiger Global là quỹ đầu tư chống lưng cho nhiều kỳ lân (startup định giá từ 1 tỷ USD) nhất trên...'},
        { title: 'Tiger Global và FTX đầu tư $200 triệu vào Helium (HNT)', cols: 1, rows: 1, content:'Mạng viễn thông phi tập trung Helium đã huy động được 200 triệu USD trong vòng tài trợ Series D với mức định giá...'}
      ];
    })
  );

  longText = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  constructor(private breakpointObserver: BreakpointObserver) {}
}
