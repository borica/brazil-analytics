export default interface MultiSeriesDataInterface {
  label: string[]
  legend: string[]
  series: SeriesDataInterface[]
}

export interface SeriesDataInterface {
  name: string
  type: string
  data: number[]
}
