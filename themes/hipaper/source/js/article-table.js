(function() {
  // 修正 table 內容寬度小於容器寬就需 display: table;
  var tb = document.querySelectorAll('.entry-summary >table');
  var tbHead = document.querySelectorAll('.entry-summary >table thead');

  for (var i = 0; i < tb.length; i++ ) {
    if(tbHead[i].offsetWidth < tb[i].offsetWidth) {
      tb[i].style.cssText = "display: table;"; 
    }
  }
})();
