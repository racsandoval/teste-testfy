import pdf from '../pdf';
import path from 'path';

const Apis = (app) => {
	app.post("/api/pdf", (req, res) => {
		if (!req.body.user || !req.body.date || !req.body.phone) {
			res.send({error : "Um ou mais inputs estão faltando"});
		}
		pdf.create(pdf.template(req.body), req.body.user);
		const pathFile = `${__dirname}/../pdf/files/${req.body.user}.pdf`;
		pdf.checkFile(pathFile)
		.then((resp) => {
			console.log(`WTF?`)
			res.sendFile(path.resolve(pathFile));
		})
		.catch((err) => {
			console.log('falhou no err');
			console.log(err);
			res.send({error : 'Timeout'});
		})
	});
}

export default Apis;