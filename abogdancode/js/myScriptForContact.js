
var canWidth = window.innerWidth;
var canHeight = window.innerHeight;
var smallScreen = true;
function onResize(event){
    canWidth = window.innerWidth;
    canHeight = window.innerHeight;
}

if (canWidth>1024){
    smallScreen=false;
}


var path0 = new Path();
path0.strokeColor = 'rgb(255,255,178)';
path0.strokeWidth = 1;
path0.add(canWidth*0.236, canHeight*0.301);
path0.add(canWidth*0.2735, canHeight*0.2215);
path0.add(canWidth*0.311, canHeight*0.301);
path0.add(canWidth*0.2735, canHeight*0.3795);
path0.closed = true;


var path1 = new Path();
path1.strokeColor = 'rgb(255,255,178)';
path1.strokeWidth = 2;
path1.add(canWidth*0.311, canHeight*0.301);
path1.add(canWidth*0.3585, canHeight*0.2015);
path1.add(canWidth*0.406, canHeight*0.301);
path1.add(canWidth*0.3585, canHeight*0.3995);
path1.closed = true;

var path2 = new Path();
path2.strokeColor = 'rgb(255,255,178)';
path2.strokeWidth = 3;
path2.add(canWidth*0.406, canHeight*0.301);
path2.add(canWidth*0.5, canHeight*0.102);
path2.add(canWidth*0.595, canHeight*0.301);
path2.add(canWidth*0.5, canHeight*0.5);
path2.closed = true;

var path3 = new Path();
path3.strokeColor = 'rgb(255,255,178)';
path3.strokeWidth = 2;
path3.add(canWidth*0.595, canHeight*0.301);
path3.add(canWidth*0.6415, canHeight*0.2015);
path3.add(canWidth*0.689, canHeight*0.301);
path3.add(canWidth*0.6415, canHeight*0.3995);
path3.closed = true;

var path4 = new Path();
path4.strokeColor = 'rgb(255,255,178)';
path4.strokeWidth = 1;
path4.add(canWidth*0.689, canHeight*0.301);
path4.add(canWidth*0.7265, canHeight*0.2215);
path4.add(canWidth*0.764, canHeight*0.301);
path4.add(canWidth*0.7265, canHeight*0.3795);
path4.closed = true;
