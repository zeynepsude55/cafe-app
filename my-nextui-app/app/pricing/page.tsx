"use client";
import { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import img1 from "../../public/images/es.jpeg";
import img2 from "../../public/images/coco.jpeg";
import img3 from "../../public/images/ame.jpeg";
import img4 from "../../public/images/latta.jpeg";
import img5 from "../../public/images/tt.jpeg";
import img6 from "../../public/images/mhh.jpeg";
import img7 from "../../public/images/m.jpeg";
import img8 from "../../public/images/fltr.jpeg";

export default function App() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [kahveAdı, setKahveAdı] = useState("");
  const [fiyat, setFiyat] = useState("");
  const [kahveler, setKahveler] = useState([
   
{
  id: 1,
  title: "Espresso",
  img: img1,
  price: "$5.50",
},
{
  id: 2,
  title: "Cappuccino",
  price: "$3.00",
  img: img2,
},
{
  id: 3,
  title: "Americano",
  price: "$10.00",
  img: img3,
},
{
  id: 4,
  title: "Latte",
  price: "$5.30",
  img: img4,
},
{
  id: 5,
  title: "Türk Kahvesi",
  price: "$15.70",
  img: img5,
},
{
  id: 6,
  title: "Machiato",
  price: "$8.00",
  img: img6,
},
{
  id: 7,
  title: "Mocha",
  price: "$7.50",
  img: img7,
},
{
  id: 8,
  title: "Filtre Kahve",
  price: "$12.20",
  img: img8,
},
]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) {
    return null; 
  }

  const filteredList = kahveler.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleKahveEkle = async () => {
    if (!kahveAdı || !fiyat) {
      alert("Kahve adı ve fiyatı boş bırakamazsınız!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/kahve-ekle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kahveAdı,
          fiyat,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setKahveler((prevKahveler) => [...prevKahveler, data.veri]);
        setKahveAdı(""); 
        setFiyat(""); 
      } else {
        alert(data.mesaj);
      }
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };


  const handleKahveSil = async (id: number) => {
    const confirmDelete = window.confirm("Bu kahveyi silmek istediğinizden emin misiniz?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/kahve-sil/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        setKahveler((prevKahveler) => prevKahveler.filter((kahve) => kahve.id !== id));
      } else {
        alert(data.mesaj);
      }
    } catch (error) {
      console.error("Kahve silme işlemi sırasında bir hata oluştu:", error);
    }
  };

  return (
    <div className="flex flex-col">
      
      <div className="mb-10 ml-96 w-full max-w-lg">
        <Input
          placeholder="Sıcak Kahve Ara"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

     
      <div className="mb-4 ml-60">
        <Input
          placeholder="Kahve Adı"
          value={kahveAdı}
          onChange={(e) => setKahveAdı(e.target.value)}
          className="w-full mb-2"
        />
        <Input
          placeholder="Fiyat"
          value={fiyat}
          onChange={(e) => setFiyat(e.target.value)}
          className="w-full mb-4"
        />
        <Button onClick={handleKahveEkle} disabled={!kahveAdı || !fiyat}>
          Kahve Ekle
        </Button>
      </div>

      
      <div className="mt-8 ml-32 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center mx-auto max-w-6xl w-full">
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <Card
              shadow="sm"
              key={item.id}
              isPressable
              onPress={() => router.push(`/blog/${item.id}`)}
              className="relative"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  src={item.img.src} 
                  alt={item.title}
                  width={500} 
                  height={500}
                  className="w-full object-cover h-[140px] transition-all duration-300 ease-in-out transform hover:brightness-75"
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
                <Button color="danger" onClick={() => handleKahveSil(item.id)}>
                  Sil
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>Kahve bulunamadı.</p>
        )}
      </div>
    </div>
  );
}
