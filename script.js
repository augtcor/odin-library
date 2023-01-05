let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	const book = new Book();
}

//Open and close form to add new book
const addBook = document.getElementById("addBook");

addBook.addEventListener("click", () => {
	const form = document.getElementById("form");
	const formAnswers = document.getElementById("formAnswers");

	if (form.style.display === "none") {
		form.style.display = "block";
		formAnswers.reset();
	} else {
		form.style.display = "none";
	}
});
