'use strict';

function btn_search() {

	let searchParametrs = document.getElementById('searchField').value;
	if (searchParametrs.length != 5) {
		alert("Введите полный номер");
	};

	$('table tr td:nth-last-of-type(3)').each(function () {
		$(this).css("background-color", "#BBB");
		let editHtmls = [];
		editHtmls = $(this).html().split('<br>');

		for (let edit_html of editHtmls) {
			let left_range = edit_html.substr(0, 5);
			let right_range = edit_html.substr(8, 5);
			if (searchParametrs >= left_range &&
				searchParametrs <= right_range) {
				$(this).css("background-color", "yellow");
				$('html,body').animate({
					scrollTop: $(this).offset().top
				}, 1000);
			}
		}
	});
};
