let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const form = document.getElementById("form");
const formAnswers = document.getElementById("formAnswers");

//Add book to library
const addBook = document.getElementById("addToLibrary");
addBook.addEventListener("click", () => {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").value;

	const book = new Book(title, author, pages, read);

	console.log(myLibrary);

	for (let key in book) {
		if (book[key] === "") {
			return;
		} else {
			myLibrary.push(book);
			formAnswers.reset();
			return;
		}
	}
});

//Open and close form to add new book
const formOpenClose = document.getElementById("formOpenClose");
formOpenClose.addEventListener("click", () => {
	if (form.style.display === "none") {
		form.style.display = "block";
		formAnswers.reset();
	} else {
		form.style.display = "none";
	}
});
