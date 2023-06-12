import { IChartItem } from './type'

export class ChartListItem implements IChartItem {
  private static generateId(): string {
    return Math.random().toString(36).slice(2)
  }

  chart: any
  width: number
  height: number
  startCol: number
  startRow: number
  endCol: number
  endRow: number
  id: string

  constructor(props: Partial<IChartItem>) {
    this.chart = props.chart
    this.width = props.width ?? 1
    this.height = props.height ?? 1
    this.startCol = props.startCol ?? 0
    this.startRow = props.startRow ?? 0
    this.endCol = props.endCol ?? this.startCol + this.width - 1
    this.endRow = props.endRow ?? this.startRow + this.height - 1
    this.id = props.id ?? ChartListItem.generateId()
  }
}
