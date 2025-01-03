import dbConnect from '../../../util/mongo';
import Product from '../../../util/product';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'PUT') {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).josn(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).josn('¡El producto ha sido eliminado!');
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
