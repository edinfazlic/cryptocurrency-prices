import {CryptocurrencyDto} from './cryptocurrency.dto';

export interface CryptocurrencyCollectionDto {
  data: CryptocurrencyDto[];
  status: any;
}
