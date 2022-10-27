type spiderData = {
  subject: string;
  performance: number;
  fullMark: number;
};

export interface SpiderChartProps {
  title: string;
  data: spiderData[];
}
