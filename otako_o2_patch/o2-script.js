/* O-Ta-Ko O2 occupancy calculator — insert before </body>, after the existing scripts */
(function(){
  var input=document.getElementById('o2Circumference');
  var unit=document.getElementById('o2Unit');
  if(!input||!unit)return;
  var k2=Math.sqrt(2)/2+(9/4)*Math.asin(1/3)-1/2;
  var nf=new Intl.NumberFormat('vi-VN',{maximumSignificantDigits:15});
  function set(id,value){var el=document.getElementById(id);if(el)el.textContent=value;}
  function updateO2(){
    var c=Number(input.value),u=unit.value,warning=document.getElementById('o2CalcWarning');
    if(!Number.isFinite(c)||c<=0){
      warning.style.display='block';warning.textContent='Hãy nhập chu vi lớn hơn 0.';
      ['o2RadiusResult','o2DiameterResult','o2SideResult','o2CellAreaResult','o2PartialAreaResult'].forEach(function(id){set(id,'—');});
      set('o2OccupancyResult','—');return;
    }
    warning.style.display='none';warning.textContent='';
    var r=c/(2*Math.PI),d=c/Math.PI,s=c/(3*Math.PI),a=s*s,area=k2*a;
    set('o2RadiusResult',nf.format(r)+' '+u);
    set('o2DiameterResult',nf.format(d)+' '+u);
    set('o2SideResult',nf.format(s)+' '+u);
    set('o2CellAreaResult',nf.format(a)+' '+u+'²');
    set('o2PartialAreaResult',nf.format(area)+' '+u+'²');
    set('o2OccupancyResult',nf.format(k2*100)+'%');
  }
  input.addEventListener('input',updateO2);
  unit.addEventListener('change',updateO2);
  updateO2();
})();
