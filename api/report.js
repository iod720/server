export default function handler(req, res) {
  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const now = new Date().toISOString();

    console.log(`[${now}] Location report from ${ip} — lat: ${latitude}, lon: ${longitude}`);

    // Optionally, you can store these in a database later

    res.status(200).json({ status: 'ok' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
