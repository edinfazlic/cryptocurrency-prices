import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiConfig } from '../configs/api-config';

import { CryptocurrencyListingDto } from '../model/cryptocurrency-listing.dto';
import { CryptocurrencyDto } from '../model/cryptocurrency.dto';
import { Cryptocurrency } from '../model/cryptocurrency.model';
import { FiatCurrency } from '../model/fiat-currency.enum';
import { Constants } from '../shared/constants';

@Injectable()
export class CryptocurrencyService {

  private static MULTIPLE_CONVERSIONS = true;

  private readonly cryptocurrencyUrl = `${ApiConfig.API_URL}/api`;

  constructor(private http: HttpClient) {
  }

  getTopNByFiat(n: number, fiat: FiatCurrency): Observable<Cryptocurrency[]> {
    return this.getListApi(n, this.getFiatValue(fiat))
      .pipe(
        map((response: CryptocurrencyListingDto) => ({response: response, fiat: fiat})),
        map(this.currencyListDtoToModelArray),
        catchError((err: any) => {
          if (err.error !== Constants.ERROR_CODE_LIMIT) {
            return throwError('Something bad happened; please try again later.');
          }
          CryptocurrencyService.MULTIPLE_CONVERSIONS = false;
          return this.getListApi(n, fiat)
            .pipe(
              map((response: CryptocurrencyListingDto) => ({response: response, fiat: fiat})),
              map(this.currencyListDtoToModelArray)
            );
        }),
      );
  }

  private getFiatValue(fiat: FiatCurrency) {
    return fiat + (CryptocurrencyService.MULTIPLE_CONVERSIONS ? ',' + Constants.BITCOIN_KEY : '');
  }

  private getListApi(n: number, fiatValue: string) {
    return this.http.get<CryptocurrencyListingDto>(`${this.cryptocurrencyUrl}/latest-cryptocurrencies`,
      {
        params: {
          'start': '1',
          'limit': '' + n,
          'convert': fiatValue
        },
      });
  }

  private currencyListDtoToModelArray = ({response, fiat}) => {
    const responseData = response.data;
    const cryptocurrencies: Cryptocurrency[] = responseData.map((data: CryptocurrencyDto) => {
      const fiatInfo = data.quote[fiat];
      const btcPrice = data.quote[Constants.BITCOIN_KEY] ? data.quote[Constants.BITCOIN_KEY].price : -1;
      return new Cryptocurrency(
        data.id,
        data.cmc_rank,
        data.name,
        data.symbol,
        fiatInfo.price,
        fiatInfo.volume_24h,
        fiatInfo.market_cap,
        btcPrice,
        fiatInfo.percent_change_1h,
        fiatInfo.percent_change_24h,
        fiatInfo.percent_change_7d,
        data.total_supply,
        data.max_supply - data.total_supply
      );
    });
    return cryptocurrencies;
  }
}
