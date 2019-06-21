import { Headers, Http, Response } from '@angular/common/http'
import { Observable } from 'rxjs'
export declare class ImageService {
  private http
  constructor(http: Http)
  postImage(
    url: string,
    image: File,
    headers?:
      | Headers
      | {
          [name: string]: any
        },
    partName?: string,
    customFormData?: {
      [name: string]: any
    },
    withCredentials?: boolean
  ): Observable<Response>
}
