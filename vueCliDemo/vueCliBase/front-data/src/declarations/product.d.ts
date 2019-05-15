export interface filters {
  offset: number,
  limit: number,
  name?: string
}

export interface getProductParams {
  filters: filters
}