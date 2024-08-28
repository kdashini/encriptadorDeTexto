function obtenerTexto() {
    return document.getElementById("cajaDeTexto").value;
}

function encriptar() {
    var textoOriginal = obtenerTexto();
    var reglasReemplazo = [
        ["e", "enter"],
        ["o", "ober"],
        ["i", "imes"],
        ["a", "ai"],
        ["u", "ufat"]
    ];

    if (/[^a-z\s]/.test(textoOriginal)) {
        alert("Solo se permiten letras minúsculas sin acentos.");
        return;
    }
    
    var textoModificado = textoOriginal;

    for (var i = 0; i < reglasReemplazo.length; i++) {
        var vocal = reglasReemplazo[i][0];
        var reemplazo = reglasReemplazo[i][1];
        var regex = new RegExp(vocal, "g");
        textoModificado = textoModificado.replace(regex, reemplazo);
    }

    mostrarResultado(textoModificado)
}

function desencriptar() {
    var textoOriginal = obtenerTexto();
    var reglasDesencriptado = [
        ["enter", "e"],
        ["ober", "o"],
        ["imes", "i"],
        ["ai", "a"],
        ["ufat", "u"]
    ];

    var textoModificado = textoOriginal;

    for (var i = 0; i < reglasDesencriptado.length; i++) {
        var reemplazo = reglasDesencriptado[i][0];
        var vocal = reglasDesencriptado[i][1];
        var regex = new RegExp(reemplazo, "g");
        textoModificado = textoModificado.replace(regex, vocal);
    }

    mostrarResultado(textoModificado)
}

function copiar() {
    var textoEncriptado = document.querySelector(".textoEncriptado").textContent;
    navigator.clipboard.writeText(textoEncriptado).then(function() {
            alert("Texto copiado: " + textoEncriptado);
        })
}

function limpiar() {
    document.getElementById("cajaDeTexto").value = "";
    document.querySelector(".textoEncriptado").textContent = "";
    
    var muñeco = document.getElementById("muñeco");
    var parrafos = document.getElementById("parrafos");
    var botonCopiar = document.getElementById("botonCopiar");
    var botonLimpiar = document.getElementById("botonLimpiar");

    if (window.innerWidth > 767) {
        muñeco.style.display = "block";
    } else {
        muñeco.style.display = "none";
    }

    parrafos.style.display = "block";
    botonCopiar.style.display = "none";
    botonLimpiar.style.display = "none";
}

function mostrarResultado(texto) {
    var muñeco = document.getElementById("muñeco");
    var textoEncriptado = document.querySelector(".textoEncriptado");
    muñeco.style.display = "none";
    textoEncriptado.textContent = texto;
    textoEncriptado.classList.add("visible");
    document.getElementById("parrafos").style.display = "none"; 
    document.getElementById("botonCopiar").style.display = "block";
    document.getElementById("botonLimpiar").style.display = "block";
}

function ajustarAlturaTextarea() {
    var textarea = document.getElementById("cajaDeTexto");
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}

document.getElementById("cajaDeTexto").addEventListener("input", ajustarAlturaTextarea);
window.addEventListener("load", ajustarAlturaTextarea);

