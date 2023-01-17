var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
var honguo_img = ["depositphotos_180966328-stock-illustration-cartoon-mushroom-champignon-shiitake-boletus.jpg","rfdb7hy9ar4neeg8vouinl6n54rb2c3ngux4emggjwu6f0gkjgidiniga8oxaetw-.jpg","Melena-de-león-Propiedades-y-contraindicaciones.jpg","Exidia-glandulosa-1122x748.jpg","shiitake_3420_0_orig.jpg","img_tayala_20191112-162040_imagenes_lv_terceros_diablo_1-knSB--656x369@LaVanguardia-Web.jpg","ganoderma-lucidum-reishi-hongo-extracto-D_NQ_NP_915180-MLM30376288538_052019-F.jpg"];
var hongos_des = ["guia_de_hongos","amanitamuscaria: este tipo de honguos son super venenosos ,tanto que con  solo 5 gramos puedes matar a un adulto 100% sano","melena de leon: estos honguos son muy buenos encuanto a ayudar con problemas mentales como la: depresion-ansiedad-etc ; tambien ayuda a la diabetes no recomiendo su extraccion o busqueda debido a que hay honguos muy similares","manteca de brujas: las historias disen que si aparese una en tu casa tienes que haserle un hoyo con una hauja o si no te hiba a maldecir una bruja -no es comestible","Shiitake:Originario de China, el consumo de este hongo se ha extendido por las gastronomías de todo el Sudeste de Asia, siendo muy conocida en la gastronomía japonesa. La seta shiitake tiene un sombrero de calor marrón oscuro y el interior es de tonos crema. no recomiendo su busqueda debido a que hay muchos honguos muy paresidos","dedos del diablo: este honguo no es comestible debido a su peculiar holor a carne podrida -que usa para atraer moscas e impregnarlas con sus esporas para reproducirse ","El hongo reishi (Ganoderma lucidum) es un hongo de sabor amargo sin beneficios para la salud comprobados. no recomiendo su busqueda debido a que hay muchos honguos paresidos"];
var k = 0;
function update()
{
  document.getElementById("ras").innerHTML="Mi libro familiar"
  document.getElementById("hon").innerHTML="cambiar a guia de honguos"
  document.getElementById("fam").innerHTML="next"
  k = -1;
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
      var updatedImage = [images [i]];
      var updatedName = [names [i]] ;
      document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
 
 
    
    function hongos()
{
  document.getElementById("ras").innerHTML="Mi guia de honguos"
  document.getElementById("fam").innerHTML="cambiar libro familiar"
  document.getElementById("hon").innerHTML="next"
  i = -1;
    k++;
    var numbers_of_h_member_in_array = 6
    if(k > numbers_of_h_member_in_array)
      {
          k = 0;
      }
      var update_h = [honguo_img [k]]
      var update_htos = [hongos_des [k]]
      document.getElementById("family_member_image").src = update_h
      document.getElementById("family_member_name").innerHTML = update_htos
}









