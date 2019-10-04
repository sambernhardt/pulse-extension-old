chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var formGroup = document.querySelector("form");
		formGroup.style.display = "none";
		var container = document.querySelector(".block-flat");

		var dropdown = document.querySelector("#id_new_district");
		var districts = [];
		dropdown.querySelectorAll("option").forEach(option => {
			districts.push({
				el: option,
				title: option.innerText
			})
		})

		var html = document.createElement("div");
		html.classList.add("container");

		html.innerHTML = `
			<div class="row">
				<div class="col-md-12">

					<!-- search box -->
					<div class="search-filter__search_field search-box search-filters">
						<div class="input-group">
							<span class="input-group-addon"><i class="sc-bdVaJa far fa-search sc-htpNat bCjqUz"></i></span>
							<input class="form-control search-box-input" id="district-search" placeholder="Search" type="text" value="">
						</div>
					</div>


					<div id="search-results"></div>
				</div>
			</div>
			<div class="row suggestions">
				<div class="col-md-6">
					<h5 id="woo">Starred</h5>
					<div id="starred-list"></div>
				</div>
				<div class="col-md-6">
					<h5>Recent</h5>
					<div id="recent-list"></div>
				</div>
			</div>
			<style>
				.container {
					width: auto;
				}

				#search-results {
			    margin-top: px;
					border: 1px solid #e8e8e8;
				}

				.custom-item {
					cursor: pointer;
					padding: 8px 12px;
					margin-bottom: 0;
					font-size: 16px;
					font-weight: 400;
					border-radius: 4px;
					display: flex;
					align-items: center;
				}
				.custom-item:hover {
					background: #F0F0F0;
				}

				.search-box.search-filters .input-group {
				    height: 34px;
				}
				.suggestions h5 {
					padding-left: 12px;
				}
				.star {
					margin-right: 10px;
					border: none;
    			color: gold;
				}
				.clear {
					border: none;
					padding-left: 8px;
					opacity: .75;
				}
				.clear:hover {
					opacity: 1;
				}
			</style>
		`;

		container.appendChild(html)


			var search = document.querySelector("#district-search");
			var searchResults = document.querySelector("#search-results");
			var submitButton = document.querySelector("button[type='submit']");

			search.addEventListener("keyup", function(e) {
				searchResults.innerHTML = "";
				var query = e.target.value;
				if (query.trim() == "") return;


				var results = [];
				districts.forEach(district => {
					if (district.title.toLowerCase().indexOf(query.toLowerCase()) > -1) {
						var result = createItem(district.title, {type: "search"}, function() {
							searchResults.innerHTML = "";
						})
						searchResults.appendChild(result)
					}
				})
			})

			mountRecent();
			mountStarred();
			search.focus();


			function addToStarred(title) {
				chrome.storage.sync.get(['starred'], function(result) {
					var list
					if (!result.starred || result.starred.length == 0) {
						list = [];
					} else {
						list = [...result.starred];
					}
					list.push({title: title})
					console.log({title: title});

					chrome.storage.sync.set({starred: list}, function() {
						// console.log('Value is set to: ');
						// console.log(list);
						mountStarred()
					});
				});
			}

			function removeFromStarred(title) {

				chrome.storage.sync.get(['starred'], function(result) {
					var list = [...result.starred];

					list.forEach((item, i) => {
						if (item.title == title) {
							list.splice(i,1)
						}
					})

					chrome.storage.sync.set({starred: list}, function() {
						mountStarred()
					});
				});
			}

			function mountStarred() {
				var starredList = document.querySelector("#starred-list");

				chrome.storage.sync.get(['starred'], function(result) {
					starredList.innerHTML = "";
					if (!result.starred) return;

					result.starred.forEach(item => {
						var listItem = createItem(item.title, {type: "starred"})
						starredList.append(listItem)
					})

					var clear = document.createElement("button");
					clear.classList.add("clear");
					clear.innerHTML = "Clear";
					clear.addEventListener("click", function() {
						chrome.storage.sync.set({starred: []}, function() {
							mountStarred()
						});
					})
					starredList.append(clear)
				});
			}

			function addToRecent(title, districts) {
				chrome.storage.sync.get(['recent'], function(result) {

					var list;
					if (!result.recent) {
						list = []
					} else {
						list = [...result.recent];
					}

					if (list.length == 5) {
						list.shift();
					}
					list.push({title: title})

					chrome.storage.sync.set({recent: list}, function() {
						mountRecent()
					});
				});
			}

			function mountRecent() {
				var recentList = document.querySelector("#recent-list");

				chrome.storage.sync.get(['recent'], function(result) {
					recentList.innerHTML = "";
					if (!result.recent) return;

					result.recent.forEach(item => {
						var listItem = createItem(item.title, {type: "recent"});
						recentList.append(listItem)
					})

					var clear = document.createElement("button");
					clear.classList.add("clear");
					clear.innerHTML = "Clear";
					clear.addEventListener("click", function() {
						chrome.storage.sync.set({recent: []}, function() {
							mountRecent()
						});
					})

					recentList.append(clear);
				});
			}

			function createItem(text, config, callback) {
				var listItem = document.createElement("div");
				listItem.classList.add("custom-item");

				var star = document.createElement("button");
				star.classList.add("star");

				switch(config.type) {
					case "starred":
						star.innerHTML = "★";
						star.addEventListener("click", function(e) {
							removeFromStarred(text);
							e.stopPropagation();
						})
						break;
					default:
						star.innerHTML = "☆";
						star.addEventListener("click", function(e) {
							addToStarred(text);
							e.stopPropagation();
						})
						break;
				}

				listItem.appendChild(star);

				var title = document.createElement("span");
				title.innerHTML = text;
				listItem.appendChild(title);

				listItem.addEventListener("click", function() {
					var option = districts.filter(district => district.title === text)[0];
					option.el.selected = true;
					submitButton.click();
					addToRecent(text)
					callback();
				})

				return listItem
			}

			// end
	}
	}, 10);
});
