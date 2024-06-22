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
let libro1 = new Libro("El señor de los anillos", "Tolkien", 1954, "Fantasía");
let libro2 = new Libro("El código Da Vinci", "Brown", 2003, "Misterio");
let libro3 = new Libro("Cien años de soledad", "Márquez", 1967, "Realismo mágico");
let libro4 = new Libro("El principito", "Saint-Exupéry", 1943, "Infantil");
let libro5 = new Libro("El alquimista", "Coelho", 1988, "Autoayuda");
let libro6 = new Libro("El nombre de la rosa", "Eco", 1980, "Misterio");
let libro7 = new Libro("El retrato de Dorian Gray", "Wilde", 1890, "Drama");
let libro8 = new Libro("El perfume", "Süskind", 1985, "Novela negra");
let libro9 = new Libro("La sombra del viento", "Zafón", 2001, "Misterio");
let libro10 = new Libro("La ladrona de libros", "Zusak", 2005, "Drama");
let libro11 = new Libro("El guardián entre el centeno", "Zusak", 1951, "Drama");
let libro12 = new Libro("1984", "Zusak", 1949, "Ciencia ficción");
let libro13 = new Libro("Rebelión en la granja", "Orwell", 1945, "Fábula");

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

console.log(buscarLibro("Zusak"));
anadirLibro("El hobbit", "Tolkien", 1937, "Fantasía");
console.log(biblioteca);

