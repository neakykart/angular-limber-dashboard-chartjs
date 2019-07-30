import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'point'
    },
    layout: {
      padding: {
        left: 10,
        right: 0,
        top: 10,
        bottom: 0
      }
    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black'
      }
    },
    scales: {
      xAxes: [{
        barPercentage: 1,
        minBarLength: 2,
        gridLines: {
          offsetGridLines: true,
          display: false
        }
      }]
    },
    line: {
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      borderColor: '#2980b9'
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  // Load chart data and styles
  public barChartData: ChartDataSets[] = [
    {
      data: [1, 2, 3, 0, 10, 6, 5],
      label: 'Clicks',
      type: 'line',
      fill: false,
      borderColor: "#2980b9",
      options: {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#2980b9',
        borderCapStyle: 'butt'
      }
    },
    /*{ data: [1, 2, 3], label: 'Accepted', stack: 'a' },
    { data: [1, 2, 3], label: 'Open', stack: 'a' },
    { data: [1, 2, 3], label: 'In Progress', stack: 'a' },*/
    {
      data: [1, 2, 3, 8, 3, 4, 12],
      label: 'Shares',
      type: 'bar',
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      backgroundColorHover: "#3e95cd",
    }
  ];

  // Load labels, ex : time slots
  public barChartLabels: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
