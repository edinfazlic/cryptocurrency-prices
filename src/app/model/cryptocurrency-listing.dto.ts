import {CryptocurrencyDto} from './cryptocurrency.dto';

export interface CryptocurrencyListingDto {
  data: CryptocurrencyDto[];
  status: any;
}
