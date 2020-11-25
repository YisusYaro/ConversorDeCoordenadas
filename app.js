
//Definición de parametros CLARKE1886
var aCLARKE1886 = 6378206.4;
var bCLARKE1886 = 6356583.8;

//Definición de parametros WGS84
var aWGS84 = 6378137;
var bWGS84 = 6356752.314;

//Definición Hayford
var aHayford = 6378388.00
var bHayford = 6356911.946

//Definición WGS72
var aWGS72 = 6378135;
var bWGS72 = 6356750.52

//Definición FISCHER 1968
var aFISCHER1968 = 6378150;
var bFISCHER1968 = 6356768.337;

//Definición SOUTH AMERICAN 1969
var aSOUTHAMERICAN1969 = 6378160; 
var bSOUTHAMERICAN1969 = 6356774.719;


function primeraExcentricidad(a, b){
    return (Math.pow(a, 2) - Math.pow(b, 2))/Math.pow(b, 2);
}

function primeraExcentricidad2(a,b){
    return (Math.pow(a, 2) - Math.pow(b, 2))/Math.pow(a, 2);
}

function a0(primeraExcentricidadCalculada){
    return 1-((3/4)*primeraExcentricidadCalculada)*(1-((15/16)*primeraExcentricidadCalculada)*(1-((35/36)*primeraExcentricidadCalculada)*(1-(((63/64)*primeraExcentricidadCalculada)* (1-(99/100)*primeraExcentricidadCalculada)))));
}

function a1(primeraExcentricidadCalculada){
    return ((3/4)*primeraExcentricidadCalculada)*(1-((25/16)*primeraExcentricidadCalculada)*(1-((77/60)*primeraExcentricidadCalculada)*(1-(((837/704)*primeraExcentricidadCalculada)* (1-(2123/1860)*primeraExcentricidadCalculada)))));
}

function a2(primeraExcentricidadCalculada){
    return ((5/8)*primeraExcentricidadCalculada)*(1-((139/144)*primeraExcentricidadCalculada)*(1-((1087/1112)*primeraExcentricidadCalculada)*(1-(((513427/521760)*primeraExcentricidadCalculada)))));
}

function a4(primeraExcentricidadCalculada, primeraExcentricidadAl2){
    return ((35/72)*primeraExcentricidadAl2)*(1-((125/64)*primeraExcentricidadCalculada)*(1-((221069/150000)*primeraExcentricidadCalculada)));
}

function a6(primeraExcentricidadCalculada, primeraExcentricidadAl3){
    return ((105/256)*primeraExcentricidadAl3)*(1-((1179/400)*primeraExcentricidadCalculada));
}

function a8(primeraExcentricidadAl4){
    return ((231/640)*primeraExcentricidadAl4);
}

function radioDeCurvatura(a, b){
    return (Math.pow(a,2))/b;
}

function longitudDeArco(A0, A1, A2, A4, A6, A8, c, latitud){
    return (A0*c*latitud)-(A1*c*Math.sin(latitud)*Math.cos(latitud))*(1 + (A2 * Math.pow((Math.sin(latitud)),2)) + (A4 * Math.pow((Math.sin(latitud)),4)) + (A6 * Math.pow((Math.sin(latitud)),6)) + (A8 * Math.pow((Math.sin(latitud)),8)));
}

function gradosARadianes(coordenada){
    return (coordenada*Math.PI)/180;
}

function radianesAGrados(convergencia){
    return (convergencia * 180) / Math.PI;
}

function excentricidad(a, b){
    return (Math.pow(a,2) - Math.pow(b,2)) / Math.pow(a,2)
}

function radioDeCurvaturaDeLaPrimeraVertical(a, excentricidadCalculada, latitud){
    return a / Math.pow((1 - (excentricidadCalculada * Math.pow(Math.sin(latitud),2) )),(1/2));
}

function am1(radioDeCurvaturaDeLaPrimeraVertical, latitud){
    return radioDeCurvaturaDeLaPrimeraVertical * Math.cos(latitud);
}

function am2(am1Calculada, latitud){
    return (am1Calculada/2) * Math.sin(latitud);
}

function am3(am1Calculada, primeraExcentricidadCalculada, latitud){
    return ((1/6) * am1Calculada) * (-1 + (2*Math.pow(Math.cos(latitud),2)) + (primeraExcentricidadCalculada * Math.pow(Math.cos(latitud),4)));
}

function am4(am2Calculada, primeraExcentricidadCalculada, primeraExcentricidadAl2,latitud){
    return ( (1/12) * am2Calculada ) * (-1 + (6*Math.pow(Math.cos(latitud),2)) + ((9*primeraExcentricidadCalculada) * Math.pow(Math.cos(latitud),4)) + (4*primeraExcentricidadAl2*Math.pow(Math.cos(latitud),6)));
}

function am5(am1Calculada, primeraExcentricidadCalculada,latitud){
    return ((1/120)*am1Calculada) * ( 1-(20*Math.pow(Math.cos(latitud),2)) + ((24 - (58*primeraExcentricidadCalculada))*Math.pow(Math.cos(latitud),4)) + (72*primeraExcentricidadCalculada*Math.pow(Math.cos(latitud),6)));
}

function am6(am2Calculada, latitud){
    return (am2Calculada/360) * (1 - (60*Math.pow(Math.cos(latitud),2)) + (120*Math.pow(Math.cos(latitud),4))); 
}

function am7(latitud){
    return Math.sin(latitud);
}

function am8(latitud, primeraExcentricidadCalculada){
    return ((1/2)*Math.pow(Math.cos(latitud),2))*(1+primeraExcentricidadCalculada * (Math.pow(Math.cos(latitud),2)));
}

function am9(latitud, primeraExcentricidadCalculada, primeraExcentricidadAl2){
    return (1/3)*Math.sin(latitud) * Math.pow(Math.cos(latitud),2) * (1 + (3*primeraExcentricidadCalculada * Math.pow(Math.cos(latitud),2)) + (2*primeraExcentricidadAl2 * Math.pow(Math.cos(latitud),4))); 
}

function am10(latitud, primeraExcentricidadCalculada){
    return ((1/24)*Math.pow(Math.cos(latitud),2))*((-4) + ((9-(28*primeraExcentricidadCalculada)) * Math.pow(Math.cos(latitud),2)) + ((42*primeraExcentricidadCalculada) * Math.pow(Math.cos(latitud),4)) );
}

function am11(latitud){
    return ((1/15) * Math.sin(latitud) * Math.pow(Math.cos(latitud),2)) * ((-1) + 3*(Math.pow(Math.cos(latitud),2)));
}

function diferenciaEnLongitud(longitud, meridianoCentral){
    return longitud - meridianoCentral;
}

function x(diferenciaEnLongitudCalculada, am1Calculada , am3Calculada, am5Calculada){
    return (am1Calculada * diferenciaEnLongitudCalculada) + ((am3Calculada * Math.pow(diferenciaEnLongitudCalculada,3)) + (am5Calculada * Math.pow(diferenciaEnLongitudCalculada,5)));
}

function y(longitudDeArcoCalculada, am2Calculada, diferenciaEnLongitudCalculada, am4Calculada, am6Calculada){
    return longitudDeArcoCalculada + (am2Calculada * Math.pow(diferenciaEnLongitudCalculada,2)) + (am4Calculada * Math.pow(diferenciaEnLongitudCalculada,4)) + (am6Calculada * Math.pow(diferenciaEnLongitudCalculada,6));
}

function factorDeEscala(am8Calculada, diferenciaEnLongitudCalculada, am10Calculada){
    return 1 + (am8Calculada * Math.pow(diferenciaEnLongitudCalculada,2)) + (am10Calculada * Math.pow(diferenciaEnLongitudCalculada,4));
}

function convergenciaDeMeridianos(am7Calculada, diferenciaEnLongitudCalculada, am9Calculada, am11Calculada){
    return (am7Calculada * diferenciaEnLongitudCalculada) + (am9Calculada * Math.pow(diferenciaEnLongitudCalculada,3)) + (am11Calculada * Math.pow(diferenciaEnLongitudCalculada,5));
}

function calcularHuso(longitud){
    return ((longitud/6)+31);
}

function calcularMeridianoCentral(huso){
    return (6*huso-183);
}

function b1(N, latitud3){
    return (1/N)*(1/Math.cos(latitud3));
}

function b2(primeraExcentricidadCalculada, latitud3, b1Calculada){
    return (-1/2)*Math.pow(b1Calculada,2)*Math.sin(latitud3)*Math.cos(latitud3)*(1+primeraExcentricidadCalculada*Math.pow(Math.cos(latitud3),2));
}

function b3(b1Calculada, primeraExcentricidadCalculada, latitud3){
    return (-1/6)*Math.pow(b1Calculada,3)*(2-Math.pow(Math.cos(latitud3),2) + primeraExcentricidadCalculada*Math.pow(Math.cos(latitud3),4));
}

function b4(b1Calculada, b2Calculada, primeraExcentricidadCalculada, latitud3){
    return (-1/12)*Math.pow(b1Calculada,2)*b2Calculada*(3 + (2-9 * primeraExcentricidadCalculada) * Math.pow(Math.cos(latitud3),2) + 10*primeraExcentricidadCalculada * Math.pow(Math.cos(latitud3),4) - (4*Math.pow(primeraExcentricidadCalculada,2) * Math.pow(Math.cos(latitud3),6)));
}

function b5(b1Calculada, latitud3, primeraExcentricidadCalculada){
    return (1/120) * Math.pow(b1Calculada,5) * (24-(20 * Math.pow(Math.cos(latitud3),2)) + (1+8*primeraExcentricidadCalculada) * Math.pow(Math.cos(latitud3),4) - 2*primeraExcentricidadCalculada * Math.pow(Math.cos(latitud3),6) ); 
}

function b6(b1Calculada, b2Calculada, latitud3){
    return ((1/360) * Math.pow(b1Calculada, 4) * b2Calculada) * (45 + (16 * Math.pow(Math.cos(latitud3),4) ) );
}

function b8(c, primeraExcentricidadCalculada, latitud3){
    return ((1/2)*Math.pow(c,-2))*Math.pow((1 + primeraExcentricidadCalculada * Math.pow(Math.cos(latitud3),2)),2);
}

function b10(c, primeraExcentricidadCalculada, latitud3){
    return (1/24)*Math.pow(c,-4)*(1+4*primeraExcentricidadCalculada* Math.pow(Math.cos(latitud3),2) );
}

function decimalesAGradosMinutosSegundos(decimales){
    var grados = parseInt(decimales);

    decimales = Math.abs(decimales) - Math.abs(grados);

    decimales = decimales * 60;

    var minutos = parseInt(decimales);

    decimales = decimales - minutos;

    decimales = decimales * 60;

    var segundos = (decimales);

    segundos =  segundos.toFixed(3);

    return [grados, minutos, segundos];
}

document.getElementById("convertir").onclick = function(){

    var latitud = parseFloat(document.getElementById("latitud").value);
    var longitud = parseFloat(document.getElementById("longitud").value);
    var a;
    var b;

    if(document.getElementById("elipsoide").value == "CLARKE 1886"){
        a=aCLARKE1886;
        b=bCLARKE1886;
    }
    if(document.getElementById("elipsoide").value == "WGS84"){
        a=aWGS84;
        b=bWGS84;
    }
    if(document.getElementById("elipsoide").value == "Hayford"){
        a=aHayford;
        b=bHayford;
    }
    if(document.getElementById("elipsoide").value == "WGS72"){
        a=aWGS72;
        b=bWGS72;
    }
    if(document.getElementById("elipsoide").value == "FISCHER 1968"){
        a=aFISCHER1968;
        b=bFISCHER1968;
    }
    if(document.getElementById("elipsoide").value == "SOUTH AMERICAN 1969"){
        a=aSOUTHAMERICAN1969;
        b=bSOUTHAMERICAN1969;
    }


    var primeraExcentricidadCalculada = primeraExcentricidad(a, b); 
    var primeraExcentricidadAl2 = Math.pow(primeraExcentricidadCalculada,2);
    var primeraExcentricidadAl3 = Math.pow(primeraExcentricidadCalculada,3);
    var primeraExcentricidadAl4 = Math.pow(primeraExcentricidadCalculada,4);

    var A0 = a0(primeraExcentricidadCalculada);
    var A1 = a1(primeraExcentricidadCalculada);
    var A2 = a2(primeraExcentricidadCalculada); 
    var A4 = a4(primeraExcentricidadCalculada, primeraExcentricidadAl2);
    var A6 = a6(primeraExcentricidadCalculada, primeraExcentricidadAl3);
    var A8 = a8(primeraExcentricidadAl4);

    var c = radioDeCurvatura(a, b);

    var latitudEnGrados = latitud;
    var longitudEnGrados = longitud; 

    latitud = gradosARadianes(latitud);
    longitud = gradosARadianes(longitud);
    
    var excentricidadCalculada = excentricidad(a, b);

    var N = radioDeCurvaturaDeLaPrimeraVertical(a, excentricidadCalculada, latitud);

    var AM1 = am1(N, latitud);

    var AM2 = am2(AM1,latitud);

    var AM3 = am3(AM1, primeraExcentricidadCalculada, latitud);

    var AM4 = am4(AM2, primeraExcentricidadCalculada, primeraExcentricidadAl2, latitud);

    var AM5 = am5(AM1,primeraExcentricidadCalculada, latitud);

    var AM6 = am6(AM2,latitud);

    var AM7 = am7(latitud);

    var AM8 = am8(latitud,primeraExcentricidadCalculada);

    var AM9 = am9(latitud, primeraExcentricidadCalculada, primeraExcentricidadAl2);
    
    var AM10 = am10(latitud, primeraExcentricidadCalculada);

    var AM11 = am11(latitud);

    var huso = calcularHuso(longitudEnGrados);
    
    huso = parseInt(huso);

    var meridianoCentral = calcularMeridianoCentral(huso);//-75;

    var diferenciaEnLongitudCalculada = diferenciaEnLongitud(longitud, gradosARadianes(meridianoCentral));

    var X = x(diferenciaEnLongitudCalculada, AM1, AM3, AM5);
        
    var longitudDeArcoCalculada = longitudDeArco(A0, A1, A2, A4, A6, A8, c, latitud);

    var Y = y (longitudDeArcoCalculada, AM2, diferenciaEnLongitudCalculada, AM4, AM6);

    //hemisferio norte
    if(latitud>0){
        X = 500000 + (0.9996*X);
        Y = 0.9996*Y;
        document.getElementById("hemisferio").value = "Norte";
    }
    //hemisferio sur
    if(latitud<=0){
        X = 500000 + (0.9996*X);
        Y = 10000000 + (0.9996*Y);
        document.getElementById("hemisferio").value = "Sur";
    }

    X = X.toFixed(3);

    Y = Y.toFixed(3);

    document.getElementById("x").value = X + " m";

    document.getElementById("y").value = Y + " m";

    var factor = factorDeEscala(AM8, diferenciaEnLongitudCalculada, AM10);

    factor =  factor.toFixed(7);

    document.getElementById("factorDeEscala").value = factor;

    var convergencia = convergenciaDeMeridianos(AM7, diferenciaEnLongitudCalculada, AM9, AM11);

    convergencia = radianesAGrados(convergencia);

    var grados = parseInt(convergencia);

    convergencia = Math.abs(convergencia) - Math.abs(grados);

    convergencia = convergencia * 60;

    var minutos = parseInt(convergencia);

    convergencia = convergencia - minutos;

    convergencia = convergencia * 60;

    var segundos = (convergencia);

    segundos =  segundos.toFixed(3);

    document.getElementById("convergenciaDeMeridianos").value = grados +"° " + minutos +"' " +segundos+"'' ";

    document.getElementById("meridianoCentral").value = meridianoCentral;

    document.getElementById("huso").value = huso;

};

document.getElementById("convertirC").onclick = function(){
    
    var coordenadaNorte = parseFloat(document.getElementById("coordenadaNorteC").value);
    var coordenadaEste = parseFloat(document.getElementById("coordenadaEsteC").value);

    var y;
    var x;

    if(coordenadaNorte>0){
        y = coordenadaNorte / 0.9996;
        x = (coordenadaEste - 500000)/0.9996;
    }
    if(coordenadaNorte<=0){
        y = (coordenadaNorte - 10000000) / 0.9996;
        x = (coordenadaEste - 500000) / 0.9996;
    }

    var a;
    var b;

    if(document.getElementById("elipsoideC").value == "CLARKE 1886C"){
        a=aCLARKE1886;
        b=bCLARKE1886;
    }
    if(document.getElementById("elipsoideC").value == "WGS84C"){
        a=aWGS84;
        b=bWGS84;
    }
    if(document.getElementById("elipsoideC").value == "HayfordC"){
        a=aHayford;
        b=bHayford;
    }
    if(document.getElementById("elipsoideC").value == "WGS72C"){
        a=aWGS72;
        b=bWGS72;
    }
    if(document.getElementById("elipsoideC").value == "FISCHER 1968C"){
        a=aFISCHER1968;
        b=bFISCHER1968;
    }
    if(document.getElementById("elipsoideC").value == "SOUTH AMERICAN 1969C"){
        a=aSOUTHAMERICAN1969;
        b=bSOUTHAMERICAN1969;
    }

    var primeraExcentricidadCalculada = primeraExcentricidad(a, b); 
    var primeraExcentricidadAl2 = Math.pow(primeraExcentricidadCalculada,2);
    var primeraExcentricidadAl3 = Math.pow(primeraExcentricidadCalculada,3);
    var primeraExcentricidadAl4 = Math.pow(primeraExcentricidadCalculada,4);

    var A0 = a0(primeraExcentricidadCalculada);
    var A1 = a1(primeraExcentricidadCalculada);
    var A2 = a2(primeraExcentricidadCalculada); 
    var A4 = a4(primeraExcentricidadCalculada, primeraExcentricidadAl2);
    var A6 = a6(primeraExcentricidadCalculada, primeraExcentricidadAl3);
    var A8 = a8(primeraExcentricidadAl4);

    var c = radioDeCurvatura(a, b);

    var latitud1 = y/(A0*c);

    var longitudDeArcoCalculada1 = longitudDeArco(A0, A1, A2, A4, A6, A8, c, latitud1);

    var latitud2 = latitud1 + ((y-longitudDeArcoCalculada1)/(A0*c));

    var longitudDeArcoCalculada2 = longitudDeArco(A0, A1, A2, A4, A6, A8, c, latitud2);

    var latitud3 = latitud2 + ((y - longitudDeArcoCalculada2)/(A0*c));

    var longitudDeArcoCalculada3 = longitudDeArco(A0, A1, A2, A4, A6, A8, c, latitud3);

    var N = radioDeCurvaturaDeLaPrimeraVertical(a, primeraExcentricidadCalculada, latitud3);

    var b1Calculada = b1(N, latitud3);

    var b2Calculada = b2(primeraExcentricidadCalculada, latitud3, b1Calculada);
    
    var b3Calculada = b3(b1Calculada, primeraExcentricidadCalculada, latitud3);

    var b4Calculada = b4(b1Calculada, b2Calculada, primeraExcentricidadCalculada, latitud3);

    var b5Calculada = b5(b1Calculada, latitud3, primeraExcentricidadCalculada);

    var b6Calculada = b6(b1Calculada, b2Calculada, latitud3);

    var latitud = latitud3 + b2Calculada * Math.pow(x,2) + b4Calculada * Math.pow(x,4) + b6Calculada * Math.pow(x, 6); 

    var datosLatitud = decimalesAGradosMinutosSegundos(radianesAGrados(latitud));

    document.getElementById("latitudC").value = datosLatitud[0]+"° " + datosLatitud[1]+"' " + datosLatitud[2]+"''";

    var huso =  document.getElementById("husoC").value;

    var meridianoCentral = calcularMeridianoCentral(huso);
    
    var longitud = gradosARadianes(meridianoCentral) + b1Calculada * x + b3Calculada * Math.pow(x,3) + b5Calculada * Math.pow(x,5);

    var datosLongitud = decimalesAGradosMinutosSegundos(radianesAGrados(longitud));

    document.getElementById("longitudC").value = datosLongitud[0] +"° "+ datosLongitud[1] +"' "+ datosLongitud[2]+"''";



    var b8Calculada = b8(c, primeraExcentricidadCalculada, latitud3);

    var b10Calculada = b10(c, primeraExcentricidadCalculada, latitud3);

    var factorDeEscala = 1 + b8Calculada * Math.pow(x,2) + b10Calculada * Math.pow(x,4);
    
    document.getElementById("factorDeEscalaC").value = factorDeEscala.toFixed(7);

    document.getElementById("meridianoCentralC").value = meridianoCentral;

    var radioDeCurvaturaDeLaPrimeraVerticalCalculado = radioDeCurvaturaDeLaPrimeraVertical(a, primeraExcentricidadCalculada, latitud3);

    var coeficienteb1 = Math.pow(radioDeCurvaturaDeLaPrimeraVerticalCalculado,-1) / Math.cos(latitud3);

    var coeficienteb7 = b1Calculada * Math.sin(latitud3);
    
    var coeficienteb9 = (-1/3) * Math.pow(b1Calculada,3) * Math.sin(latitud3) * (1 -(primeraExcentricidadCalculada* Math.pow(Math.cos(latitud3),4)) - 2*primeraExcentricidadAl2 * Math.pow(Math.cos(latitud3),6));

    var coeficienteb11 = (1/15) * Math.pow(b1Calculada,5) * Math.sin(latitud3) * (3 - Math.pow(Math.cos(latitud3),2));

    var convergenciaUTM = (coeficienteb7 * x) + (coeficienteb9 * Math.pow(x,3)) + coeficienteb11;

    convergenciaUTM = radianesAGrados(convergenciaUTM);

    var grados = parseInt(convergenciaUTM);

    convergenciaUTM = Math.abs(convergenciaUTM) - Math.abs(grados);

    convergenciaUTM = convergenciaUTM * 60;

    var minutos = parseInt(convergenciaUTM);

    convergenciaUTM = convergenciaUTM - minutos;

    convergenciaUTM = convergenciaUTM * 60;

    var segundos = (convergenciaUTM);

    segundos =  segundos.toFixed(3);

    document.getElementById("convergenciaDeMeridianosC").value = grados +"° " + minutos +"' " +segundos+"'' ";








};


