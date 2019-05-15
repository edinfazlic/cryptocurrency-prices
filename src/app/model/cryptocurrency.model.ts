export class Cryptocurrency {
  constructor(public rank?: number,
              public name?: string,
              public symbol?: string,
              public price?: number,
              public volume24h?: number,
              public marketCap?: number,
              public priceInBTC?: number,
              public change1h?: number,
              public change24h?: number,
              public change7d?: number,
              public totalSupply?: number,
              public availableSupply?: number) {
  }
}
