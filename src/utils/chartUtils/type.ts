export interface IChartItem {
  chart: any
  width: number
  height: number
  startCol: number
  startRow: number
  endCol: number
  endRow: number
  readonly id: string
}

export type IDirection = 'left' | 'right' | 'top' | 'bottom'
