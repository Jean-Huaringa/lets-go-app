export interface SuccessResponse<T> {
  timestamp: string;
  status: number;
  success: string;
  response: T;
}

export interface PaginacionResponse<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
}
