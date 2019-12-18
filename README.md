## Beam E-scooter Finder
This application will find e-scooters inside the radius.

Scooters nearer to the center of the circle will be shown first.

## Tech Stack
- NodeJS/Express for the Server
- React and Google Maps for the Web App
- Tile38 for the data store

## How to start the application?
1. Clone the repo and run `npm install` for both `app` and `api` folders.
2. In the `app/components/Map.js`, add your own Google Map API Key in line 56.
3. Run `npm run dev` for `app`, and `npm run start` for `api`

## How to start searching?

By default, the radius of the search is set to 25000 meters and the number of scooters to 200.
The center of the circle is also set in the center of Singapore. With these parameters set, you can just hit the `Search` button
to show all of the scooters in the map.

You can then change these parameters as you would like. 

Do note that clicking on the Map will change the Latitude and Longitude of the center of the Circle for ease of use.


Should you have any questions or problems encountered, you can reach me at **edrianbertulfo@gmail.com**