import { cloneDeep } from 'lodash'

export class HistoryStack<StackItemType> {
  historyStack: (StackItemType | null)[] = [null]
  historyStackIndex = 0

  pushHisrory(chartList: StackItemType) {
    if (this.historyStackIndex !== this.historyStack.length - 1) {
      this.historyStack = this.historyStack.slice(0, this.historyStackIndex + 1)
    }

    this.historyStack.push(cloneDeep(chartList))
    this.historyStackIndex++
  }

  undo() {
    if (this.historyStackIndex > 0) {
      this.historyStackIndex--
    } else {
      console.log('已经是第一步了')
    }
    return cloneDeep(this.historyStack[this.historyStackIndex])
  }

  redo() {
    if (this.historyStackIndex < this.historyStack.length - 1) {
      this.historyStackIndex++
    } else {
      console.log('已经是最后一步了')
    }
    return cloneDeep(this.historyStack[this.historyStackIndex])
  }
}
