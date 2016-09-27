
var count = 150;
var segments = [];
var symbols = [];


for (var i = 0; i < count; i++) {
    var radius = 2+(i/15);
    var center = Point.random() * (view.size-20) +10;
    symbols[i] = new Path.Circle({
        center: center,
        vector: Point(),
        radius:radius

    });

    symbols[i].fillColor = {
        gradient: {
            stops: [[{hue:60, saturation: 1, brightness: 1, alpha:1}, 0.05], [{hue:60, saturation: 0.5, brightness: 1, alpha:0.5}, 0.1], [{alpha:0},1]],
            radial: true
        },
        origin: center,
        destination: symbols[i].bounds.rightCenter
    };
    symbols[i].radius = radius;
    symbols[i].color = symbols[i].fillColor;
    symbols[i].relationPoints =[];
    symbols[i].relations=[];

    var vector = new Point({
        angle: 360 * Math.random(),
        length: i/200
    });
    symbols[i].vector = vector;

    segments[i] = [new Point(center)];

   // console.log(symbols[i].position);
}

var path = new Path(segments);

function onFrame(event) {
    for (var i = 0; i < count; i++) {
        var item = symbols[i];
        item.position += item.vector;
        if (item.bounds.right > view.size.width) {
            item.vector.angle = 180 -item.vector.angle;
        }
        if (item.bounds.left < 0) {
            item.vector.angle = 180 -item.vector.angle;
        }
        if (item.bounds.bottom > view.size.height) {
            item.vector.angle = -item.vector.angle;
        }
        if (item.bounds.top < 0) {
            item.vector.angle = -item.vector.angle;
        }
        path.segments[i].point = item.position;

        symbols[i].fillColor = symbols[i].color;

       for (var j= 0; j < count; j++) {

        if (j!==i){
            var dist = path.segments[i].point.getDistance(path.segments[j].point);
           if (dist < 40) {
                if (dist < symbols[i].radius + symbols[j].radius && dist != 0) {
                    var overlap = symbols[i].radius + symbols[j].radius - dist;
                    var direc = (symbols[i].position -symbols[j].position).normalize(overlap * 0.01);
                    symbols[i].vector += direc;
                    symbols[j].vector -= direc;
                }
                var overlap = symbols[i].radius + symbols[j].radius - dist;
                var direc = (symbols[i].position -symbols[j].position).normalize(overlap * 0.001);
                symbols[i].vector += direc;
                symbols[j].vector -= direc;

                }
            }

       }
    }
}


