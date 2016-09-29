
var count = 150;
var segments = [];
var symbols = [];
var goToPoint = false;
var slow = true;
var frolic = true;
for (var i = 0; i < count; i++) {
    var radius = 2+(i/15);
    var center = Point.random() * (view.size-20) +10;
    symbols[i] = new Path.Circle({
        center: center,
        blowOut:true,
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

    if (i>100){
        symbols[i].alpha = Math.random();
    }else{
        symbols[i].alpha = 1;
    }

    var vector = new Point({
        angle: 360 * Math.random(),
        length: i/200
    });
    symbols[i].vector = vector;

    segments[i] = [new Point(center)];

}

var pointMouse = new Point(view.center);

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

       /* if (i>100){
            if(symbols[i].alpha >= 1){
                symbols[i].blowOut = true;
            }
            if(symbols[i].alpha <= 0.5){
                symbols[i].blowOut = false;
            }

            if (symbols[i].blowOut){
                symbols[i].alpha-=0.01;
            }

            if  (!symbols[i].blowOut)
            {
                symbols[i].alpha+=0.01;
            }

            symbols[i].fillColor.gradient.stops =
                [[{hue:60, saturation: 1, brightness: 1, alpha:symbols[i].alpha}, 0.05],
                    [{hue:60, saturation: 0.5, brightness: 1, alpha:symbols[i].alpha/2}, 0.1],
                    [{alpha:0},1]];
        }
*/



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
               if (frolic) {
                   var overlap = symbols[i].radius + symbols[j].radius - dist;
                   var direc = (symbols[i].position - symbols[j].position).normalize(overlap * 0.0005);
                   symbols[i].vector += direc;
                   symbols[j].vector -= direc;
               }
                }
            }

       }

        if (goToPoint && path1.segments.length<3){

             var directToMousebig = pointMouse - item.position;
             var directToMouse = directToMousebig.normalize(0.1);
             item.vector+= directToMouse;
            item.vector-=item.vector/1000;
        }

        if (goToPoint && path1.segments.length>3){
            var directToPathBig = item.position - path1.segments[path1.nearPointNum[i]].point;
            var directToPath = directToPathBig.normalize(10*0.01);
            item.vector -= directToPath;
            if (item.vector.length>1) {
                item.vector -= item.vector / 100;
            }
        }

        if (slow && item.vector.length>3){

                item.vector-=item.vector/100;
            }

    }
    if (goToPoint && path1.segments.length>3){
       if (path1.alpha>0){
            path1.alpha-=0.005;
       }
        path1.strokeColor.gradient.stops =
            [[{hue:60, saturation: 1, brightness: 1, alpha: path1.alpha*2}, 0.05],
            [{hue:60, saturation: 0.5, brightness: 1, alpha: path1.alpha}, 0.1],
            [{alpha:0},1]];
    }
}






var path1;
var correctPath = false;

function onMouseDown(event) {
    if(frolic){
        frolic=false;
    }
    pointMouse = event.point;
    if (path1) {
        path1.remove();
    }

        path1= new Path({
            alpha:0.5,
            segments: [event.point],
            strokeColor: {
                gradient: {
                    stops: [[{hue:60, saturation: 1, brightness: 1, alpha:1}, 0.05], [{hue:60, saturation: 0.5, brightness: 1, alpha:0.5}, 0.1], [{alpha:0},1]],
                    radial: true
                },
                origin: event.point
            },
            strokeWidth: 10,
            nearPointNum: []
        });


}
function onMouseDrag(event) {
    if (!goToPoint){
        path1.addSegment(event.point);
    }
    path1.strokeColor = {
        gradient: {
            stops: [[{hue:60, saturation: 1, brightness: 1, alpha:1}, 0.05], [{hue:60, saturation: 0.5, brightness: 1, alpha:0.5}, 0.1], [{alpha:0},1]],
            radial: true
        },
        origin: event.point
    };
    path1.smooth();
}
function onMouseUp() {

    goToPoint = !goToPoint;
    slow = !slow;
    if (path1.segments.length>3){
        correctPath = true;
    } else{
        correctPath = false;
    }
if (path1.segments.length>3){
    path1.strokeColor = {
        gradient: {
            stops: [[{hue:60, saturation: 1, brightness: 1, alpha:1}, 0.05], [{hue:60, saturation: 0.5, brightness: 1, alpha:0.5}, 0.1], [{alpha:0},1]],
            radial: true
        },
        origin: path1.segments[Math.round(path1.segments.length/2)].point
    };
    path1.smooth();

}

   path1.simplify(0.8);
    for (var i= 0; i <count; i++) {
        var minDist = 9999999;
        for (var j= 0; j <path1.segments.length-1; j++) {
            var dist = path.segments[i].point.getDistance(path1.segments[j].point);
            if(dist<minDist){
                minDist = dist;
                path1.nearPointNum[i] = j;
            }


        }
    }

}