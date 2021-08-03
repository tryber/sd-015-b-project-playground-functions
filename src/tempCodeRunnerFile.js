function catAndMouse(mouse,cat1,cat2) {
  if (cat1> mouse) {
    distCat1 = cat1-mouse
    if (cat2>mouse) {
      distCat2 = cat2-mouse
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
    else if (cat2<mouse) {
      distCat2 = mouse-cat2
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
  }
  else if (cat1<mouse) {
    distCat1 = mouse-cat1
    if (cat2>mouse) {
      distCat2 = cat2-mouse
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
    else if (cat2<mouse) {
      distCat2 = mouse-cat2
      if (distCat1>distCat2) {
        return 'cat2'
      }
      else if (distCat1<distCat2){
        return 'cat1'
      }
      else {
        return 'os gatos trombam e o rato foge'
      }
    }
  }
}
console.log(catAndMouse(0,3,3));