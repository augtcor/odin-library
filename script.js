let myLibrary = [];

function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

const form = document.getElementById("form");
const formAnswers = document.getElementById("formAnswers");

//Open and close form to add new book
const modal = document.getElementById("modal");
const btn = document.getElementById("formOpenClose");
const mask = document.getElementById("page-mask");

btn.onclick = function () {
	modal.style.display = "block";
	mask.style.display = "block";
};

window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
		mask.style.display = "none";
	}
};

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
