<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
		<link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<title>New York Times Scraper</title>
</head>

<body>
	<header>
		<a href="/"><div id="sitename">NYT Scraper</div></a>
		<a href="/"><button id="all-articles">All Articles</button></a>
		<a href="/saved"><button id="saved-articles">Saved Articles</button></a>
		<form action="/scrape" method="GET">
			<button type="submit" id="refresh-articles">Scrape For Newest Articles</button>
		</form>
		<form action="/search" method="POST">
			<button type="submit" id="search-submit">Submit</button>
			<input type="text" name="search" placeholder="Search for articles" id="search-input">
		</form>
	</header>
	<img id="cover" src="/assets/images/cover.jpg" height="500px">
	<div id="container">
		{{{ body }}}
	</div>
	
	<script src="/assets/javascript/app.js"></script>

	<div id="addnote">
		<div id="note-displayer">
			<h2>Note</h2>
			<h3>Article: <span id="article-title"></span></h3>
			<div id="note">
				<label for="note-title">Title</label><br>
				<input type="text" placeholder="Title" name="title" id="note-title"><br>
				<label for="note-body">Note</label><br>
				<textarea rows="7" placeholder="Note" id="note-body"></textarea><br>
				<button type="submit" id="add-note">Save Note</button>
				<button type="button" id="close-note">Cancel</button>
			</div>
		</div>
	</div>
	
	
	<script src="/assets/javascript/app.js"></script>
</body>
</html>