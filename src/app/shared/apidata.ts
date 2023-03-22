export interface ApiTableData {
  application: string;
  apiName: string;
  total: number;
  avg: number;
  failed: number;
  success: number;
}


export interface ApiGraphData {
  day: string;
  hour: number;
  totalRequests: number;
  failuredRequests: number;
}