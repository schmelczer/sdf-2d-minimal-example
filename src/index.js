import { compile, CircleFactory, hsl, CircleLight } from "sdf-2d";

const main = async () => {
  // Create a new Drawable class
  // This has a fixed color given by the hue-saturation-lightness values,
  // but it could also be changed even during runtime.
  const Circle = CircleFactory(hsl(30, 66, 50));

  // Get a reference to the canvas element on the HTML page
  const canvas = document.querySelector("canvas");

  // Create a renderer and wait for it to compile the required shaders
  const renderer = await compile(canvas, [
    Circle.descriptor,
    CircleLight.descriptor,
  ]);

  // Schedule a new circle to be drawn
  // Objects can be drawn multiple times
  renderer.addDrawable(new Circle([200, 200], 50));

  // Schedule a new light to be drawn
  // An ambient light is always present unless turned of
  renderer.addDrawable(new CircleLight([500, 300], [1, 0.5, 0], 0.5));

  // Up until now, nothing has been draw
  renderer.renderDrawables();
  // The scene is now visible on the canvas
};

main();
