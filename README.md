# News Agreggator React Challenge

In tackling this React challenge, I selected Chakra UI due to its straightforward and lightweight nature. For managing application state, I integrated Context API, Tanstack Query, and the familiar useState hook. To enhance error handling and loading management, I combined Tanstack Query with Suspense and Error Boundaries.

The project comes with the Themes Dark and Light based on system preferences and a responsive version for mobile.

## Environments

Create the `.env` file following the `.env.example`. Feel free to copy my variables or to use your own.

## Development

### Running with node

The recomended version of node for this project is 20+.
Install the dependencies with:

```bash
npm install
```

And run the project with:

```bash
npm run dev
```

### Running with Docker

> Unfortunately, we are experiencing some troubles with the development version, and sometimes doesn't work as  expected.
If you encounter problems during this process, use the Production version.
[Related Issue with this problem on GitHub](https://github.com/npm/cli/issues/4828)

Run this project using Docker the command:

```bash
docker compose up --build
```

Open the server with: `http://localhost:5173/`.

With that, you'll have the Hot Reload, and your changes will be mirrored in the container.
But, if you need to install a new lib, it's a good idea to rebuild the container.

## Production with Docker

To run the production version, use the command:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

And you can access the project through: `http://localhost/`.