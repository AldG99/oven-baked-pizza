import dbConnect from '../../../util/mongo';
import Order from '../../../models/order';

const handle = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const orders = await Order.find();
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'POST') {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handle;
