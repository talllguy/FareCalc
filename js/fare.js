function fare(form)
{
	var mile = parseFloat(form.miles.value, 10);
	var time = parseFloat(form.time.value, 10);
	var coef = 2.31;
	var rate = 0;
	rate = coef + ((1.65) * mile) + ((.22) * (time));
	rate = Math.round(rate);
	form.result.value = rate;
}