/**
 * Created by AlexBogdan on 29.09.2016.
 */
function Firefly(r, p, v) {
    this.path =  new Path.Circle(new Point(p), r);
    this.path.point = p;
    this.path.position = p;
    this.path.vector = v;
    this.path.radius = r;
    this.path.fillColor = {
        gradient: {
            stops: [[{hue:60, saturation: 1, brightness: 1, alpha:1}, 0.05], [{hue:60, saturation: 0.5, brightness: 1, alpha:0.5}, 0.1], [{alpha:0},1]],
                radial: true
        },
        origin: this.path.point,
        destination: this.path.bounds.rightCenter
    };
    pathHelp.add(p);
}



Firefly.prototype = {
    iterate: function() {
        this.path.position += this.path.vector;

        this.bounce();
    },

    react: function(b) {
        var dist = pathHelp.segments[i].point.getDistance(pathHelp.segments[j].point);
        if (dist < this.path.radius + b.path.radius && dist != 0) {
            var overlap = this.path.radius + b.path.radius - dist;
            var direc = (this.path.point - b.path.point).normalize(overlap * 0.01);
            this.path.vector += direc;
            b.path.vector -= direc;


        }
    },

    bounce: function() {
            var item = this.path;
            if (item.bounds.right >= view.size.width) {
                item.vector.angle = 180 - item.vector.angle;
            }
            if (item.bounds.left <= 0) {
                item.vector.angle = 180 - item.vector.angle;
            }
            if (item.bounds.bottom >= view.size.height) {
                item.vector.angle = -item.vector.angle;
            }
            if (item.bounds.top <= 0) {
                item.vector.angle = -item.vector.angle;
            }
        }
};






var pathHelp = new Path;
var fireflys = [];
var numFireflys = 150;
for (var i = 0; i < numFireflys; i++) {
    var position = Point.random() * (view.size-20) +10;
    var vector = new Point({
        angle: 360 * Math.random(),
        length: i/200
    });
    var radius = 2+(i/15);
    fireflys.push(new Firefly(radius, position, vector));

}

function onFrame() {
 //  console.log(pathHelp.segments[1].point);

    for (var i = 0, l = fireflys.length; i < l; i++) {
       pathHelp.segments[i].point = fireflys[i].path.position;
           for (var j=0; j < fireflys.length-1; j++) {
               if (j!==i) {
               fireflys[i].react(fireflys[j]);
           }

       }
        fireflys[i].iterate();
    }

}
