$(document).ready(function() {

var bookList = $("#book-list");

refreshBookList();

function refreshBookList() {
$.ajax({
    url: "http://localhost:8282/books",
    type: "GET",
    dataType: "json",
    }).done(function(books) {
        var bookList = $("$book-list");
        renderBookList(bookList, books);
    }).failfunction(xhr, status, err) {
    console.log("ERR", xhr, status, err);
})
}
    function renderBookList(renderingPoint, arrBooks) {
        console.log(arrBooks);
    }
});
