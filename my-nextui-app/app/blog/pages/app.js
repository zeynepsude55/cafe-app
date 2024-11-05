const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

let kahveler = [
  { 
    id: 1,
    title: "Cold Brew",
    img: "http://localhost:3000/images/ice-latte.jpeg", 
    price: "$5.50"
  },
  {
    id: 2,
    title: "Ice Latte",
    price: "$3.00",
    img: "http://localhost:3000/images/ice-latte.jpeg"
  },
  { 
    id: 3,
    title: "Frappe",
    price: "$10.00",
    img: "http://localhost:3000/images/ice-latte.jpeg"
  },
  { 
    id: 4,
    title: "Affogato",
    price: "$5.30",
    img: "http://localhost:3000/images/ice-latte.jpeg"
  },
  { 
    id: 5,
    title: "Iced Mocha",
    price: "$15.70",
    img: "http://localhost:3000/images/ice-latte.jpeg"
  }, 
  {
    id: 6,
    title: "Bubble Tea",
    price: "$8.00",
    img: "http://localhost:3000/images/ice-latte.jpeg"
  },
  { 
    id: 7,
    title: "Filtre Kahve",
    price: "$7.50",
    img: "http://localhost:3000/images/ice-latte.jpeg"
  },
];

// Kahve Ekleme Endpoint
app.post('/kahve-ekle', (req, res) => {
  const { kahveAdı, fiyat } = req.body;

  if (!kahveAdı || !fiyat) {
    return res.status(400).json({ mesaj: 'Kahve adı ve fiyatı gereklidir.' });
  }

  const newKahve = {
    id: kahveler.length + 1, // Yeni id oluşturuyoruz
    title: kahveAdı,
    price: fiyat,
    img: "http://localhost:3000/images/ice-latte.jpeg" // Varsayılan bir resim
  };

  kahveler.push(newKahve);

  res.status(201).json({ mesaj: 'Kahve başarıyla eklendi!', veri: newKahve });
});

// Kahve Silme Endpoint
app.delete('/kahve-sil/:id', (req, res) => {
  const kahveId = parseInt(req.params.id);
  const kahveIndex = kahveler.findIndex((kahve) => kahve.id === kahveId);

  if (kahveIndex === -1) {
    return res.status(404).json({ mesaj: 'Kahve bulunamadı.' });
  }

  kahveler.splice(kahveIndex, 1);

  res.status(200).json({
    mesaj: 'Kahve başarıyla silindi!'
  });
});

app.listen(port, () => {
  console.log(`API çalışıyor: http://localhost:${port}`);
});
