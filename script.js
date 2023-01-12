let myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

const form = document.getElementById("form");
const formAnswers = document.getElementById("formAnswers");

//Open and close form to add new book
const formOpenClose = document.getElementById("formOpenClose");
formOpenClose.addEventListener("click", () => {
	if (form.style.display === "none") {
		form.style.display = "block";
		formOpenClose.innerText = "Close";
		formAnswers.reset();
	} else {
		form.style.display = "none";
		formOpenClose.innerText = "New Book";
	}
});

//Add book to library
const addBook = document.getElementById("addToLibrary");
addBook.addEventListener("click", () => {
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;

	const book = new Book(title, author, pages);

	for (let key in book) {
		if (book[key] === "") {
			return;
		} else {
			myLibrary.push(book);
			formAnswers.reset();
		}
	}

	addCard();
});

//Add book card to page
function addCard() {
	let grid = document.querySelector(".grid");
	let card = document.createElement("div");
	card.setAttribute("class", "card");
	grid.appendChild(card);

	let bookTitle = document.createElement("p");
	bookTitle.setAttribute("id", "bookTitle");
	card.appendChild(bookTitle);

	let bookAuthor = document.createElement("p");
	bookAuthor.setAttribute("id", "bookAuthor");
	card.appendChild(bookAuthor);

	let bookPages = document.createElement("p");
	bookPages.setAttribute("id", "bookPages");
	card.appendChild(bookPages);

	let contentTitle = document.createTextNode(
		myLibrary[myLibrary.length - 1].title
	);
	bookTitle.appendChild(contentTitle);

	let contentAuthor = document.createTextNode(
		myLibrary[myLibrary.length - 1].author
	);
	bookAuthor.appendChild(contentAuthor);

	let contentPages = document.createTextNode(
		myLibrary[myLibrary.length - 1].pages
	);
	bookPages.appendChild(contentPages);

	return;
}
