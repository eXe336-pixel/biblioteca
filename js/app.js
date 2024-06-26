let botonBuscar = document.querySelector("#btn-buscar");
let inputEnter = document.querySelector("#input-autor");

function Libro(titulo, autor, anoPublicacion, genero)
{
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacion = anoPublicacion;
    this.genero = genero;
    this.info = function()
    {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.anoPublicacion} y pertenece al género ${this.genero}`
    }
}
libro1= new Libro("El señor de los anillos","Tolkien",1954,"Fantasía");
libro2= new Libro("El código Da Vinci","Brown",2003,"Misterio");
libro3= new Libro("Cien años de soledad","Márquez",1967,"Realismo mágico");
libro4= new Libro("El principito","Saint-Exupéry",1943,"Infantil");
libro5= new Libro("El alquimista","Coelho",1988,"Autoayuda");
libro6= new Libro("El nombre de la rosa","Eco",1980,"Misterio");
libro7= new Libro("El retrato de Dorian Gray","Wilde",1890,"Drama");
libro8= new Libro("El perfume","Süskind",1985,"Novela negra");
libro9= new Libro("La sombra del viento","Zafón",2001,"Misterio");
libro10= new Libro("La ladrona de libros","Zusak",2005,"Drama");
libro11= new Libro("El guardián entre el centeno","Zusak",1951,"Drama");
libro12= new Libro("1984","Zusak",1949,"Ciencia ficción");
libro13= new Libro("Rebelión en la granja","Orwell",1945,"Fábula");

let biblioteca = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13];

function buscarLibro(autor)
{
    let librosAutor = biblioteca.filter(libro => libro.autor === autor);
    return librosAutor;
}

function anadirLibro(titulo, autor, anoPublicacion, genero)
{
    let libro = new Libro(titulo, autor, anoPublicacion, genero);
    biblioteca.push(libro);
}
let error = document.querySelector("#mensaje");

//manejador de eventos cuando inputEnter se le da enter con el teclado
inputEnter.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        botonBuscar.click();
    }
});
//Manejador de eventos cuando se hace click en el boton buscar
botonBuscar.addEventListener("click", function() {
    error.innerHTML = "";
    let autorIngresado = document.querySelector("#input-autor").value;
    //Validamos que el usuario haya ingresado un autor valido, nada de numeros ni caracteres especiales
    let regex = /^[a-zA-Z\s]*$/;
    if (autorIngresado === "")
    {   let mensaje = "Ingrese un autor"
        error.innerHTML = mensaje;        
    }
    else if (regex.test(autorIngresado))

        {   //Limpiamos los divs de libros anteriores
            let divs = document.querySelectorAll(".libros");
            divs.forEach(div => div.remove());

            let librosAutor = buscarLibro(autorIngresado);        
            if (librosAutor.length === 0)
            {
                mensaje = "No se encontraron libros de ese autor";
                error.innerHTML = mensaje;
                inputEnter.value = "";                
            }
            else
            {
                //Creamos un div que contendra los libros del autor
                let divLibros = document.createElement("div");
                divLibros.classList.add("libros");
                document.querySelector("#contenedor-libros").appendChild(divLibros);
                
                librosAutor.forEach(libro => {
                    let p = document.createElement("p");
                    p.textContent = libro.info();
                    divLibros.appendChild(p);
                });
                
            }
        }
    else {
        mensaje = "Ingrese un autor válido";
        error.innerHTML = mensaje;
        inputEnter.value = "";
    }     
    
});

//Añadimos libros a la biblioteca
anadirLibro("El amor en los tiempos del cólera","Márquez",1985,"Romance");
anadirLibro("La casa de los espíritus","Allende",1982,"Realismo mágico");
console.log(biblioteca);


