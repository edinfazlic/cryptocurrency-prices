# CryptocurrencyPrices

This is an application for following cryptocurrency prices. It contains a list of the top 100 cryptocurrencies. Users are able to select a fiat currency (USD, EUR, CNY) for the prices. When they click on any of the cryptocurrencies in the list, they see the price, market cap, daily volume and other info. All of this is gotten from the public CoinMarketCap API.

Used:
- Angular, version 7
- NgRx for state management
- GitHub for review

The app not only functions well but is also easily maintainable and upgradable.

Not much time was invested with designs.


## Functionalities:
 
- Cryptocurrency List
    - The cryptocurrency list has the top 100 cryptocurrencies
    - The list has a way to refresh (button)
    - Each item in the list has the following info:
        - rank
        - symbol
        - price in the selected fiat currency
        - 24 hour change
    - If the item is clicked, the cryptocurrency details are shown
- Cryptocurrency Details
    - This screen contains a bit more info about the selected cryptocurrency:
        - rank
        - name
        - symbol
        - price, 24h volume and market cap in the selected fiat currency
        - price in bitcoin
        - 1h change, 24h change, 7d change
        - total and available supply
    - This screen has a button to refresh
- Settings
    - This screen is accessible through an icon in the toolbar that is present on all other screens
    - User can select one of the following fiat currencies:
        - USD
        - EUR
        - CNY
    - When the user goes back, if the selected fiat currency was changed, the results are updated on the previous screen

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
