# Cryptocurrency Prices
This is an application for following cryptocurrency prices. It contains a list of the top 100 cryptocurrencies. Users are able to select a fiat currency (USD, EUR, CNY) for the prices. When they click on any of the cryptocurrencies in the list, they see the price, market cap, daily volume and other info. All of this is gotten from the public CoinMarketCap API.

The app not only functions well but is also easily maintainable and upgradable.

Not much time was invested with designs.

## Used:
- Angular, version 7
- NgRx for state management
- GitHub for review

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

## Meta info
Application showcases knowledge of:
- Angular
  - Component communication
  - Lifecycle hooks utilization
  - **Routing**
  - **Guards (can deactivate)**
  - Forcing OnPush change detection strategy 
  - Using pipes (async, json)
  - Handling material components (Table, Paginator...)
  - Using material icons
- **State management with NgRx**
  - Actions - with and without payload
  - Reducers - for handling transitions between states and preserving state for specific feature
  - Selectors
  - Effects - for providing new source of action to reduce state based on network requests
- Reactive programming with RxJS library
  - Passing Observable as a parameter, variable, object
  - Immediately subscribing to Observables
  - Pipe usage for multiple async calls
    - **filter, map, mergeMap, catchError, withLatestFrom** 
- Typescript
  - Fat-arrow functions (preserving "this" context and making code more readable with meaningful names)
- General
  - REST calls
      - GET with parameters
  - Data structures
      - Array for cryptocurrency list management, upon which JS array methods were used (map())
  - Helpers and utility classes with mostly static content
  - Having git commit messages readable
- Concepts
  - Separation of concerns
  - "N-tier architecture"
      - Display and styling only, without any logic (HTML template and CSS) - only communicates with Controllers
      - Components communicate through actions and selectors, and with other trivial components
      - Simple data merging, conversion and management logic can be found in effects, as well as chaining other actions
      - Logic and invoking outside of the application is done in services
  - Linting (with TSlint)
  - Refactoring (Updating all components to OnPush change detection strategy...)
  - Prototyping (Fast completion without full functionality, displaying test concept, process or design)
- Operations
  - Setting different environments (development and production)
  - Deploying application

## Development server
1. Have server api ([found here](https://github.com/edinfazlic/cryptocurrency-prices-api)) running. 
1. Run `ng serve` or `npm start` and navigate to `http://localhost:4200/`.
