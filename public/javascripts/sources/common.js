$(() => {
	let abilityName = $('.abilities__name');

	function onAbilityClick (evt) {
		let target = $(evt.target);
		let id = target.attr('href');
		evt.preventDefault();
		abilityName.removeClass('abilities__name--active');
		target.addClass('abilities__name--active');
		$('.abilities__info').hide();
		$(`.abilities__info[data-id=${id}]`).show();
	}

	abilityName.on('click', onAbilityClick);
})