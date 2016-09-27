
var count = 70;
var segments = [];
var symbols = [];

for (var i = 0; i < count; i++) {
    
    var center = Point.random() * (view.size-20) +10;
    symbols[i] = new Path.Circle({
        center: center,
        radius: 10,

        strokeColor :'black',
        vector: Point()
    });
    symbols[i].fillColor = 'blue';
    symbols[i].fillColor.hue += i/3;
    symbols[i].color = symbols[i].fillColor;
    symbols[i].relationPoints =[];
    symbols[i].relations=[];
    if (i<=15) {
        symbols[i].scale(15 / count);
    } else{
        symbols[i].scale(i / count);
    }

    var vector = new Point({
        angle: 360 * Math.random(),
        length: i/200
    });
    symbols[i].vector = vector;

    segments[i] = [new Point(center)];

   // console.log(symbols[i].position);
}

var path = new Path(segments);

for (var i = 0; i < count; i++) {
    for (var j = 0; j < count; j++) {
        symbols[i].relationPoints.push([new Point(symbols[i].position), new Point(symbols[j].position)]);
        symbols[i].relations[i] = new Path(symbols[i].relationPoints[j]);
    }
}


//console.log(symbols[69].relationPoints);

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
            if (path.segments[i].point.getDistance(path.segments[j].point) < 50) {
               
                symbols[i].fillColor = 'red';
                symbols[j].fillColor = 'red';
            }
        }
       }

    }
}



