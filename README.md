## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Json Creator - Go to the below link and copy, paste the below code
https://www.json-generator.com/

[
  '{{repeat(5, 15)}}',
  {
    _id: '{{objectId()}}',
    movietitle: '{{company()}}',
    genre: '{{random("Romance", "Sci-Fi", "Fantasy", "Comedy", "Animation")}}',
    rating: '{{integer(4, 9)}}',
    desc: '{{lorem(20, "words")}}'
  }
]
