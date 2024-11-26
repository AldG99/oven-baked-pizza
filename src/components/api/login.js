import cookie from 'cookie';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;

      if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('token', process.env.TOKEN, {
            maxAge: 60 * 60,
            sameSite: 'strict',
            path: '/',
            httpOnly: true, // Añadida seguridad
            secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
          })
        );
        res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        res
          .status(400)
          .json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ success: false, message: `Method ${req.method} not allowed` });
  }
};

export default handler;
