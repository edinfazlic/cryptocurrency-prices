import {FiatInfoDto} from './fiat-info.dto';

export interface CryptocurrencyDto {
  id: number;
  cmc_rank: number;
  name: string;
  quote: {[fiatSymbol: string]: FiatInfoDto};
  symbol: string;
  total_supply: number;
  max_supply: number;
}
