# SDF-2D minimal example

The end result is also available [here](https://schmelczerandras.github.io/sdf-2d-minimal-example/dist/index.html).

The SDF-2D library can be found on [GitHub](https://github.com/schmelczerandras/sdf-2d) and [NPM](https://www.npmjs.com/package/sdf-2d) as well.

## Running

Simply clone the repository and open [index.html](dist/index.html).

## Building

- Install [Node.js](https://nodejs.org/en/)
- Run `npm install`
- Run `npx webpack`
- Open [index.html](dist/index.html)

## Reproducing this repository from scratch

> A tutorial for installing Webpack is also included below, for more information about Webpack visit [their getting started page](https://webpack.js.org/guides/getting-started/).

- Install [Node.js](https://nodejs.org/en/)
- Create a directory called `sdf-2d-example` and open a terminal inside it

- Run the following commands
  ```sh
  npm init -y
  npm install webpack webpack-cli sdf-2d --save-dev
  ```
- Create a directory called `src`, and a new file inside of it named `index.html`
- Copy the following code into `sdf-2d-example/dist/index.html`
  ```html
  <!DOCTYPE html>
  <html>
    <body>
      <canvas width="600" height="300"></canvas>
      <script src="main.js"></script>
    </body>
  </html>
  ```
- Create a directory called `src`, and a new file inside of it named `index.js`
- Copy the following code into `sdf-2d-example/src/index.js`

  ```js
  import { compile, Circle, CircleLight } from "sdf-2d";

  const main = async () => {
    const canvas = document.querySelector("canvas");
    const renderer = await compile(canvas, [
      Circle.descriptor,
      CircleLight.descriptor,
    ]);

    renderer.addDrawable(new Circle([200, 200], 50));
    renderer.addDrawable(new CircleLight([500, 300], [1, 0.5, 0], 0.5));

    renderer.renderDrawables();
  };

  main();
  ```

- Inside `sdf-2d-example`, execute the command `npx webpack`, this will generate a new file in your `dist` folder.
- You're finished, open `sdf-2d-example/dist/index.html`

## Next steps

For a more complex example visit [this repository](https://github.com/schmelczerandras/sdf-2d-more-complex-example).
