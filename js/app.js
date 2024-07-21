alert("Bienvenido a la biblioteca de Fer")

const libros = [
    {titulo: "1984", autor: "George Orwell", paginas: 328, genero: "Accion"},
    {titulo: "Orgullo y Prejuicio", autor: "Jane Austen", paginas: 238, genero: "Romance"},
    {titulo: "Cien Años de Soledad", autor: "George Orwell", paginas: 417, genero: "Romance"},
    {titulo: "Matar a un Ruiseñor", autor: "Jane Austen", paginas: 278, genero: "Terror"},
    {titulo: "El Señor de los Anillos", autor: "Tolkien", paginas: 1178, genero: "Terror"}
  ];

let opcion = prompt("Seleccione una opción:\n 1. Ver filtrado por título\n 2. Ver filtrado por autor\n 3. Ver libros " );
if (opcion === "1") {
  let tituloBuscar = prompt("Ingrese el título del libro que busca:");
  let libroEncontrado = libros.find(libro => libro.titulo.includes(tituloBuscar));
  if (libroEncontrado) {
    alert(`El libro que buscas es: ${libroEncontrado.titulo} de ${libroEncontrado.autor}`);
  } else {
    alert("Lo siento, no encontramos el libro que buscas.");
  }
} else if (opcion === "2") {
  let autorBuscar = prompt("Ingrese el autor del libro que busca:");
  let librosFiltrados = libros.filter(libro => libro.autor.includes(autorBuscar));
  if (librosFiltrados.length > 0) {
    let listaLibros = librosFiltrados.map(libro => `${libro.titulo} de ${libro.autor}`).join("\n");
    alert(`Libros encontrados del autor ${autorBuscar}:\n${listaLibros}`);
  } else {
    alert("Lo siento, no encontramos libros del autor que buscas.");
  }
  } else if (opcion === "3"){
    mostrarLibros();
  }else{
    alert("Opcion Invalida")
  }


function mostrarLibros() {
  let listaLibros = libros.map(libro => `${libro.titulo} de ${libro.autor}`).join("\n");
  alert(`Libros en la biblioteca:\n${listaLibros}`);
}

// Puedes llamar a la función mostrarLibros aquí si lo deseas
// mostrarLibros();
