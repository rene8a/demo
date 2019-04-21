import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { BarData } from './interfaces/bar-data';

@Component({
  selector: 'lib-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  @Input() data: BarData[];
  @Input() xLabel: string;
  @Input() yLabel: string;
  @Input() height: number;
  @ViewChild('barChart')
  private chartContainer: ElementRef;
  margin = { top: 20, right: 20, bottom: 30, left: 60 };

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const data = this.data;

    const tooltip = d3.select('body').append('div').attr('class', 'toolTip');

    d3.select(element).select('svg').remove();

    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', this.height);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = this.height - this.margin.top - this.margin.bottom;

    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.xValue));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.yFrequency)]);

    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x))
      .append('text')
      .style('fill', 'black')
      .attr('y', 20)
      .attr('x', 20)
      .text(this.xLabel);

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .style('fill', 'black')
      .text(this.yLabel);

    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.xValue))
      .attr('y', d => y(d.yFrequency))
      .attr('width', x.bandwidth())
      .attr('height', d => contentHeight - y(d.yFrequency))
      .on('mousemove', (d) => {
        tooltip
          .style('left', d3.event.pageX - 50 + 'px')
          .style('top', d3.event.pageY - 70 + 'px')
          .style('display', 'inline-block')
          .html((d.xValue) + '<br>' + '$' + (d.yFrequency));
    })
    .on('mouseout', (d) => {
      tooltip.style('display', 'none');
    });
  }

  onResize() {
    this.createChart();
  }

}
