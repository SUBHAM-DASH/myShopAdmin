import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-sold-product',
  templateUrl: './sold-product.component.html',
  styleUrls: ['./sold-product.component.scss']
})
export class SoldProductComponent implements OnInit {

  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: [1551, 1688, 1800, 1895, 2124, 2124],

      pointHitRadius: 15, // expands the hover 'detection' area
      pointHoverRadius: 8, // grows the point when hovered

      // ⤵️ Add these
      pointRadius: 3,
      borderColor: '#2D2F33', // main line color aka $midnight-medium from @riapacheco/yutes/seasonal.scss
      pointBackgroundColor: '#2D2F33',
      pointHoverBackgroundColor: '#2D2F33',
      borderWidth: 2, // main line width
      hoverBorderWidth: 0, // borders on points
      pointBorderWidth: 0, // removes POINT borders
      tension: 0.3, // makes line more squiggly
    }
  ];

  chartLabels: string[] = [
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ];

  chartOptions: ChartOptions = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: 'white',
        displayColors: false, // removes unnecessary legend
        padding: 8,

        // ⤵️ title
        titleColor: '#2D2F33',
        titleFont: {
          size: 15
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 12
        }
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
