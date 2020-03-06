$(document).ready(() => {

	$('.success').hide();
	$('.negative').hide();

	var canSubmit = true;
	$(".pdf-form").on("submit", (e) => {
		e.preventDefault();
		if (!canSubmit) {
			return;
		}
		canSubmit = false;
		$(".pdf-form").prop("disabled", true);
		const values = $(".pdf-form").serialize();
		$.ajax("http://localhost:3000/api/pdf", {
			method: 'POST',
			xhrFields : {
				responseType : 'arraybuffer'
			},
			data : values,
			success: (data) => {
				var a = document.createElement('a');
				var blob = new Blob([data], {type: 'application/pdf'});
				var url = URL.createObjectURL(blob);
				a.href = url;
				a.download = `${$("input[name=user]").val()}.pdf`;
				document.body.append(a);
				a.click();
				a.remove();
				window.URL.revokeObjectURL(url);
				$('.success').show();
				$('.negative').hide();
				canSubmit = true;
			},
			error: (err) => {
				console.log(err);
				$(".err").text(err.error);
				$('.success').hide();
				$('.negative').show();
				canSubmit = true;
			}
		})
	})
})
