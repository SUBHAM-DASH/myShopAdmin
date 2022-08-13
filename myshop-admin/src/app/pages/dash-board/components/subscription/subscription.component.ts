import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
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
    '2016 Subscription',
    '2017 Subscription',
    '2018 Subscription',
    '2019 Subscription',
    '2020 Subscription',
    '2021 Subscription',
  ];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxis: {
        display: false,
        grid: {
          drawBorder: false, // removes random border at bottom
        },
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: 'white',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        // ⤵️ title
        titleColor: '#2D2F33',
        titleFont: {
          size: 15,
        },

        // ⤵️ body
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 10,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
