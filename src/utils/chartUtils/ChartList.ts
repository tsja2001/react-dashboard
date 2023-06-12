import { DIRECTIONS } from './constant'
import { ChartListItem } from './ChartListItem'
import { HistoryStack } from './HistoryStack'

export class ChartList extends HistoryStack<ChartListItem[]> {
  constructor(
    public colCount: number,
    public rowCount: number,
    // 存储图表的列表
    private list: ChartListItem[] = []
  ) {
    super()
  }

  // 传入dashboard的ref, 和当前鼠标的位置, 返回当前鼠标在第几行第几列
  getMousePosition(
    dashboardRef: HTMLElement,
    [clientX, clientY]: [number, number]
  ): [number, number] {
    const { left, top } = dashboardRef.getBoundingClientRect()

    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // dashboard的左上角坐标 + 滚动距离 = dashboard的实际位置
    const distanceLeft = left + scrollLeft
    const distanceTop = top + scrollTop

    // 计算每个图表的宽高
    const chartItemWidth = dashboardRef.offsetWidth / this.colCount
    const chartItemHeight = dashboardRef.offsetHeight / this.rowCount

    // 计算当前鼠标位置的col和row
    const col = Math.floor((clientX - distanceLeft) / chartItemWidth)
    const row = Math.floor((clientY - distanceTop) / chartItemHeight)

    return [col, row]
  }

  // 增加新图表
  private addChart(item: ChartListItem) {
    this.list.push(item)
  }

  // 更新chartList
  private updateChartList(list: ChartListItem[]) {
    this.list = list
  }

  // 通过id更新图表chat数据
  private updateChartById(id: string, chartData: any) {
    const chartItem = this.findChartById(id)
    if (chartItem) {
      chartItem.chart = chartData
    }
  }

  // 查找某个位置上的图表
  findChartByPosition([col, row]: [number, number]): ChartListItem | null {
    const res = this.list.find((item) => {
      const { startCol, startRow, endCol, endRow } = item
      if (
        col >= startCol &&
        col <= endCol &&
        row >= startRow &&
        row <= endRow
      ) {
        return item
      }

      return false
    })

    return res ?? null
  }

  // 查找以某个位置为起点的图表
  findChartByStartPoint([col, row]: [number, number]): ChartListItem | null {
    const res = this.list.find((item) => {
      const { startCol, startRow } = item
      if (col === startCol && row === startRow) {
        return item
      }

      return false
    })

    return res ?? null
  }

  // 通过id查找图表
  findChartById(id: string): ChartListItem | null {
    return this.list.find((item) => item.id === id) ?? null
  }

  // 通过id查找其他图表
  findOtherChartById(id: string): ChartListItem[] {
    return this.list.filter((item) => item.id !== id)
  }

  // 更新图表数据, 若不存在则添加
  updateChartDataByPosition([col, row]: [number, number], chartData: any) {
    const chartItem = this.findChartByPosition([col, row])
    if (chartItem) {
      this.updateChartById(chartItem.id, chartData)
    } else {
      this.addChart(
        new ChartListItem({
          chart: chartData,
          startCol: col,
          startRow: row
        })
      )
    }

    super.pushHisrory(this.list)
  }

  // 通过id和位置移动图表
  moveChartByIdAndPosition(
    chartId: string,
    [distanceX, distanceY]: [number, number]
  ) {
    const chartItem = this.findChartById(chartId)
    if (chartItem) {
      const otherChartList = this.findOtherChartById(chartId)

      const newChartItem = new ChartListItem({
        ...chartItem,
        startCol: chartItem.startCol + distanceX,
        startRow: chartItem.startRow + distanceY,
        endCol: chartItem.endCol + distanceX,
        endRow: chartItem.endRow + distanceY
      })

      // 判断新位置是否可以放置图表
      if (this.canDrop(newChartItem, otherChartList)) {
        this.updateChartList([...otherChartList, newChartItem])
        super.pushHisrory(this.list)
        return true
      }
    }

    return false
  }

  // 通过id更新某个图表大小
  updateChartSizeById(
    chatId: string,
    [distanceX, distanceY]: [number, number],
    direction: (typeof DIRECTIONS)[keyof typeof DIRECTIONS]
  ): boolean {
    const chartItem = this.findChartById(chatId)

    if (chartItem) {
      const otherChartList = this.findOtherChartById(chatId)
      let newChartItem: ChartListItem | null = null

      switch (direction) {
        case DIRECTIONS.UP:
          newChartItem = new ChartListItem({
            ...chartItem,
            startRow: chartItem.startRow + distanceY,
            height: chartItem.endRow - chartItem.startRow - distanceY + 1
          })
          break
        case DIRECTIONS.DOWN:
          newChartItem = new ChartListItem({
            ...chartItem,
            endRow: chartItem.endRow + distanceY,
            height: chartItem.endRow - chartItem.startRow + 1 + distanceY
          })
          break
        case DIRECTIONS.LEFT:
          newChartItem = new ChartListItem({
            ...chartItem,
            startCol: chartItem.startCol + distanceX,
            width: chartItem.endCol - chartItem.startCol - distanceX + 1
          })
          break
        case DIRECTIONS.RIGHT:
          const newObj = {
            ...chartItem,
            endCol: chartItem.endCol + distanceX,
            width: chartItem.endCol + distanceX - chartItem.startCol + 1
          }
          console.log(newObj)
          newChartItem = new ChartListItem({
            ...chartItem,
            endCol: chartItem.endCol + distanceX,
            width: chartItem.endCol + distanceX - chartItem.startCol + 1
          })
      }
      // 判断新位置是否可以放置图表
      if (newChartItem && this.canDrop(newChartItem, otherChartList)) {
        this.updateChartList([...otherChartList, newChartItem])
        super.pushHisrory(this.list)
        return true
      }
    }

    return false
  }

  // 判断chartList中是否可以放置当前chartItem
  canDrop(chartItem: ChartListItem, chartList: ChartListItem[] = this.list) {
    // 判断是否超出dashboard范围
    if (
      chartItem.endCol >= this.colCount ||
      chartItem.endRow >= this.rowCount ||
      chartItem.startCol < 0 ||
      chartItem.startRow < 0
    ) {
      return false
    }

    // 判断是否与其他图表重叠
    const isOverlap = chartList.some((listItem) => {
      // 判断要放置的图表的四个角是否在其他图表内
      if (
        this.isPointInChart(
          [chartItem.startCol, chartItem.startRow],
          listItem
        ) ||
        this.isPointInChart([chartItem.endCol, chartItem.endRow], listItem) ||
        this.isPointInChart([chartItem.startCol, chartItem.endRow], listItem) ||
        this.isPointInChart([chartItem.endCol, chartItem.startRow], listItem)
      ) {
        return true
      }

      // 判断其他图表的四个角是否在要放置的图表内
      if (
        this.isPointInChart(
          [listItem.startCol, listItem.startRow],
          chartItem
        ) ||
        this.isPointInChart([listItem.endCol, listItem.endRow], chartItem) ||
        this.isPointInChart([listItem.startCol, listItem.endRow], chartItem) ||
        this.isPointInChart([listItem.endCol, listItem.startRow], chartItem)
      ) {
        return true
      }

      return false
    })

    return !isOverlap
  }

  // 判断一个点是否在某个图表内
  isPointInChart([col, row]: [number, number], chartItem: ChartListItem) {
    const { startCol, startRow, endCol, endRow } = chartItem
    if (col >= startCol && col <= endCol && row >= startRow && row <= endRow) {
      return true
    }

    return false
  }

  // 删除某个图表
  deleteChartById(chartId: string) {
    const chartItem = this.findChartById(chartId)
    if (chartItem) {
      this.updateChartList(this.list.filter((item) => item.id !== chartId))
      super.pushHisrory(this.list)
    }
  }

  // 撤回
  undo() {
    const res = super.undo() ?? []
    this.updateChartList(res)
    return res
  }

  // 重做
  redo() {
    const res = super.redo() ?? []
    this.updateChartList(res)
    return res
  }

  // 生成可序列化的数据
  getSerializableData() {
    const list = this.list.map((item) => {
      const { id, startCol, startRow, endCol, endRow, chart } = item
      return {
        id,
        startCol,
        startRow,
        endCol,
        endRow,
        chartDataId: chart.id
      }
    })

    return {
      list,
      colCount: this.colCount,
      rowCount: this.rowCount
    }
  }
}
