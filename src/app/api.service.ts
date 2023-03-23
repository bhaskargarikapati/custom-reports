import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiGraphData, ApiRegionData, ApiTableData, dountData } from './shared/apidata';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * This method returns students details
   */
  getApplicationInformation(): Observable<ApiTableData[]>{
    return this.httpClient.get<ApiTableData[]>(`${environment.baseURL}apidata.json`);
  }

  getGraphInformation(): Observable<ApiGraphData[]>{
    return this.httpClient.get<ApiGraphData[]>(`${environment.baseURL}apiGraphData.json`);
  }

  getDonutInformation(): Observable<dountData[]>{
    return this.httpClient.get<dountData[]>(`${environment.baseURL}csvGaugeDataAppTotalFailure.json`);
  }

  getRegionInformation(): Observable<ApiRegionData[]>{
    return this.httpClient.get<ApiRegionData[]>(`${environment.baseURL}apiregiondata.json`);
  }
}
