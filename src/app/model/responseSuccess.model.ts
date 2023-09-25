export interface ResponseSuccessInterface<T> {
  errorMessage: any[]
  code: any
  payload: T
  success: boolean
  successMessage: string
  pageable: Pageable
}
export interface Pageable {
  currentPage: number
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}
