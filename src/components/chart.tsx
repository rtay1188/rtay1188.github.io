import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

type YTDData = {
  xLabels: string[],
  yLabels: number[],
}

export default function Chart(props: YTDData) {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: props.yLabels, label: 'yv' },
      ]}
      xAxis={[{ scaleType: 'point', data: props.xLabels }]}
    />
  );
}