export class Graphics {

    // ----- STATIC -----

    // MEMBERS
    static canvas;
    static ctx;
    static pos;

    // METHODS
    static init() {

        // Create canvas element
        Graphics.canvas = document.createElement("canvas");

        // Set canvas width and height
        Graphics.canvas.width = window.innerWidth;
        Graphics.canvas.height = window.innerHeight;

        // Center viewport on 0, 0
        Graphics.center({x: 0, y: 0});

        // Get context
        Graphics.ctx = Graphics.canvas.getContext("2d");

        // Set context options
        Graphics.ctx.imageSmoothingEnabled = true;

        // Append canvas to body
        const body = document.getElementsByTagName("body")[0];
        body.appendChild(Graphics.canvas);

    }

    static clear() {

        // Set context fill color to black
        Graphics.ctx.fillStyle = "rgba(0, 0, 0, 1)";

        // Fill rect covering entire screen
        Graphics.ctx.fillRect(0, 0, Graphics.canvas.width, Graphics.canvas.height);

    }

    static center(pos) {

        // Center viewport on position
        Graphics.pos = {
            x: pos.x + (Graphics.canvas.width / 2),
            y: pos.y + (Graphics.canvas.height / 2)
        }

    }

    static drawCircle(pos, radius, fillStyle) {

        // Draw circle given world coordinates
        Graphics.ctx.translate(Graphics.pos.x, Graphics.pos.y);

        const circle = new Path2D();
        circle.arc(pos.x, pos.y, radius, 0, 2*Math.PI, false);
        Graphics.ctx.fillStyle = fillStyle;
        Graphics.ctx.fill(circle);

        Graphics.ctx.translate(-Graphics.pos.x, -Graphics.pos.y);

    }

    static drawLoadingScreen() {

        // Fill
        Graphics.clear();

        // Draw text
        Graphics.ctx.fillStyle = "rgba(255, 255, 255, 1)";
        Graphics.ctx.font = "20px Courier New";
        Graphics.ctx.textAlign = "center";
        Graphics.ctx.fillText("Connecting to server...", Graphics.canvas.width / 2, Graphics.canvas.height / 2);

    }

    // ----- INSTANCE -----

    // MEMBERS

    // CONSTRUCTOR

    // METHODS

}