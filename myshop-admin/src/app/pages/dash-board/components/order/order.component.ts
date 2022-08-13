import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  chartData: ChartDataset[] = [
    {
      label: 'in Numbers',
      data: [1551, 1688, 1800, 1895, 2124, 2124],

      pointHitRadius: 15, // expands the hover 'detection' area
      pointHoverRadius: 8, // grows the point when hovered

      // ⤵️ Add these
      pointRadius: 2,
      borderColor: '#2D2F33', // main line color aka $midnight-medium from @riapacheco/yutes/seasonal.scss
      pointBackgroundColor: '#2D2F33',
      pointHoverBackgroundColor: '#2D2F33',
      borderWidth: 2, // main line width
      hoverBorderWidth: 0, // borders on points
      pointBorderWidth: 0, // removes POINT borders
      tension: 0.3, // makes line more squiggly
    },
  ];

  chartLabels: string[] = [
    '2016 Orders',
    '2017 Orders',
    '2018 Orders',
    '2019 Orders',
    '2020 Orders',
    '2021 Orders',
  ];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxis: {
        display: true,
        grid: {
          drawBorder: true, // removes random border at bottom
        },
      },
      yAxis: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: 'white',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        // ⤵️ title
        titleColor: '#2D2F33',
        titleFont: {
          size: 18,
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 14,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
