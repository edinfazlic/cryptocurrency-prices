import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CryptocurrencyListingDto} from '../model/cryptocurrency-listing.dto';
import {CryptocurrencyDto} from '../model/cryptocurrency.dto';
import {Cryptocurrency} from '../model/cryptocurrency.model';

@Injectable()
export class CryptocurrencyService {

  constructor(private http: HttpClient) {
  }

  getTopNByFiat(n: number, fiat: string): Observable<Cryptocurrency[]> {
    return this.http.get<CryptocurrencyListingDto>('/api/v1/cryptocurrency/listings/latest',
      {
        params: {
          'start': '1',
          'limit': '' + n,
          'convert': fiat// + ',BTC'
        },
        headers: {'X-CMC_PRO_API_KEY': '973a2840-23f4-4300-8e4d-8d59842c5b88'}
      }).pipe(
      map((response: CryptocurrencyListingDto) => {
        const responseData = response.data;
        const cryptocurrencies = responseData.map((data: CryptocurrencyDto) => {
          const fiatInfo = data.quote[fiat];
          return new Cryptocurrency(
            data.cmc_rank,
            data.name,
            data.symbol,
            fiatInfo.price,
            fiatInfo.volume_24h,
            fiatInfo.market_cap,
            333333,
            fiatInfo.percent_change_1h,
            fiatInfo.percent_change_24h,
            fiatInfo.percent_change_7d,
            data.total_supply,
            data.max_supply - data.total_supply
          );
        });
        return cryptocurrencies;
      })
    );
  }
}
