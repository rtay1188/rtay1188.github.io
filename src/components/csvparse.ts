import { ParseResult } from 'papaparse';
import fs from 'fs';
import papa from 'papaparse'

interface YTDData {
  xLabels: string[],
  yLabels: number[],
}
export async function getYTDData(filepath: string) {
  const file = fs.readFileSync(filepath, 'utf8');
  const ytd: YTDData = {
      xLabels: [],
      yLabels: [],
  }
  papa.parse(file, {
    dynamicTyping: true,
    complete: function(results: ParseResult<any>) {
      ytd.xLabels = results.data[0]
      ytd.yLabels = results.data[1]
    }
  });
  return ytd
}