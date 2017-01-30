
let homeBg = $("#home"),
    neededHeight = window.innerHeight,
    homeBgResize = (homeBg,neededHeight) => {
      homeBg.height(neededHeight);
      console.log("resizing")
};
$( window ).resize(()=> {
  homeBgResize(homeBg,neededHeight);
});
$( window ).ready(()=> {
  homeBgResize(homeBg,neededHeight);
});
