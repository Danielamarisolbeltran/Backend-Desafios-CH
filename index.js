class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = "Daniela";
        this.apellido = "Beltrán";
        this.libros = [{
          title: "Harry Potter y el prisionero de Azkaban",
          author: "J. K. Rowling ",
          year: "2000",
          gender: "ficcion, fantasia"
        }];
        this.mascotas = "Leono";  
  }

  getFullName() {
    return `El nombre del usuario es ${this.nombre} + " " + ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
    return this.mascotas
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(title, author, year, gender) {
    this.libros.push({ title, author, year, gender });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.title)
  }
}

let res = new Usuario();

res.addMascota("Hachiko");
res.addBook("Harry Potter y las reliquias de la muerte", "Animales fantasticos y donde encontrarlos")

console.log(res.getFullName());
console.log(res.countMascotas());
console.log(res.getBookNames());

