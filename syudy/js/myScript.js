
var count = 100;
var segments = [];
var symbols = [];

for (var i = 0; i < count; i++) {
    var radius = 10-(i/15);
    var center = Point.random() * (view.size-20) +10;
    symbols[i] = new Path.Circle({
        center: center,
        strokeColor :'black',
        vector: Point(),
        radius:radius

    });
    symbols[i].radius = radius;
    symbols[i].fillColor = 'blue';
    symbols[i].fillColor.hue += i/3;
    symbols[i].color = symbols[i].fillColor;
    symbols[i].relationPoints =[];
    symbols[i].relations=[];
    //if (i<=15) {
    //    symbols[i].scale(15 / count);
   // } else{
    //    symbols[i].scale(i / count);
   // }

    var vector = new Point({
        angle: 360 * Math.random(),
        length: i/200
    });
    symbols[i].vector = vector;

    segments[i] = [new Point(center)];

   // console.log(symbols[i].position);
}

var path = new Path(segments);

/*for (var i = 0; i < count; i++) {
    for (var j = 0; j < count; j++) {
        symbols[i].relations[j] = new Path({strokeColor:'white'});
    }
}*/

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
            if (dist < 30) {
                if (dist < symbols[i].radius + symbols[j].radius && dist != 0) {
                    var overlap = symbols[i].radius + symbols[j].radius - dist;
                    var direc = (symbols[i].position -symbols[j].position).normalize(overlap * 0.015);
                    symbols[i].vector += direc;
                    symbols[j].vector -= direc;
                  //  symbols[i].fillColor = 'red';
                  //  symbols[j].fillColor = 'red';
                }
                var overlap = symbols[i].radius + symbols[j].radius - dist;
                var direc = (symbols[i].position -symbols[j].position).normalize(overlap * 0.00015);
                symbols[i].vector += direc;
                symbols[j].vector -= direc;



                //symbols[i].relations[j].strokeColor = 'red';
               // symbols[i].relations.add(path.segments[j].point);
               // symbols[i].relations[j] = new Path([new Point(path.segments[i].point),new Point(path.segments[j].point)]);
                //path2.strokeColor = 'white';

                }
            }

       }
    }
}


