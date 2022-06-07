Scripts
Install: npm install
Build: npm run build
Lint: npm run lint
Prettier: npm run Prettier
Run unit tests: npm run test
Start server: npm run start
Usage
The server will listen on port 3000 and will resize the image 
you provide with the given width an heightfrom the query parameters


Endpoint to resize images
http://localhost:3000/

Expected query arguments are:

filename: Available filenames are:
encenadaport
fjord
icelandwaterfall
width: numerical pixel value 
height: numerical pixel value

example:http://localhost:3000/?filename=icelandwaterfall.jpg&width=300&height=350

multiple thumbs for the same image available with different scaling as desired