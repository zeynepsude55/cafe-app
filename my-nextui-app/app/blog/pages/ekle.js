app.post('/kahve-ekle', (req, res) => {
    const { kahveAdı, fiyat } = req.body;
  
    if (!kahveAdı || !fiyat) {
      return res.status(400).json({ mesaj: 'Kahve adı ve fiyatı gereklidir.' });
    }
  
    const newKahve = {
      id: kahveler.length + 1, 
      title: kahveAdı,
      price: fiyat,
      img: "http://localhost:3000/images/ice-latte.jpeg" 
    };
  
    kahveler.push(newKahve);
  
    res.status(201).json({ mesaj: 'Kahve başarıyla eklendi!', veri: newKahve });
  });
  