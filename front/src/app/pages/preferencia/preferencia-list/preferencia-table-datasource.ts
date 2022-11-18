import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { Observable, merge, BehaviorSubject } from 'rxjs';
import { Preferencia } from 'src/app/models/preferencia.model';

/**
 * Data source for the PreferenciaTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PreferenciaTableDataSource extends DataSource<Preferencia> {
  data: Preferencia[] = [];
  paginator: MatPaginator | undefined;
  refresh: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Preferencia[]> {
    if (this.paginator) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(this.refresh, this.paginator.page).pipe(
        map(() => {
          return this.getPagedData([...this.data]);
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Preferencia[]): Preferencia[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }
}
