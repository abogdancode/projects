



    var center = view.center;
    var radius = 100;

    function addDiagramItem(startPersents,percents,color) {
        var startGrad = startPersents*360/100*0.0174533;
        var persentsInGrad = percents*360/100*0.0174533;
        var xStart = center.x + Math.cos(startGrad)*radius;
        var yStart = center.y + Math.sin(startGrad)*radius;
        var xThrough = center.x + Math.cos(startGrad+persentsInGrad/2)*radius;
        var yThrough = center.y + Math.sin(startGrad+persentsInGrad/2)*radius;
        var xTo = center.x + Math.cos(startGrad+persentsInGrad)*radius;
        var yTo = center.y + Math.sin(startGrad+persentsInGrad)*radius;
        return {
            from: [xStart, yStart],
            through: [xThrough, yThrough],
            to: [xTo, yTo],
            strokeColor: color,
            strokeWidth: 100
        }
    }


    var fromDomPersentsSpans = document.getElementsByClassName('diagram-settings__percents_1');
    var pathsArr =[];
    var percentsArr = [];
    for (var i=0;i<fromDomPersentsSpans.length; i++){
        percentsArr.push(fromDomPersentsSpans[i]);
    }
    var count = 0;
    percentsArr.forEach(function (item,i) {
        var persents = Number(item.innerHTML);
        var diagBgColor = item.getAttribute('data-color');
        var diagBgHoverColor = item.getAttribute('data-hover-color');
        var positionCount = 0;
        count += persents;
        pathsArr[i]= new Path.Arc(addDiagramItem(count,persents,diagBgColor));
        var vector = (pathsArr[i].segments[0].point - center)+(pathsArr[i].segments[1].point - center);
        vector.normalize();
        pathsArr[i].position+=vector*0.04;
        vector*=0.01;

        pathsArr[i].onMouseEnter = function(event) {
            /*this.strokeColor = diagBgHoverColor;*/
            var mouseEnterThees = this;

            this.onFrame = function(event) {
                if(positionCount<20){
                    positionCount++;
                    mouseEnterThees.position+=vector;
                    mouseEnterThees.strokeColor.hue+=0.8;
                }

            };
        };
        pathsArr[i].onMouseLeave = function(event) {
            this.strokeColor = diagBgColor;
            var mouseLeaveThees = this;
            this.onFrame = function(event) {
                if(positionCount>0) {
                    positionCount--;
                    mouseLeaveThees.position-=vector;
                    mouseLeaveThees.strokeColor.hue-=0.8;
                }

            };
        };
        console.log(pathsArr[i].segments[0].point);
    });
