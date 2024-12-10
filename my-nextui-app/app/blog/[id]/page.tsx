"use client";

import { useEffect, useState } from "react";
import { Image, Checkbox, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Spinner } from "@nextui-org/react";
import img from "../../../public/images/ice-latte.jpeg";
import axios from "axios";
// import { menu } from '../../../../project-name/src/menu/Schemas/menu.schemas';



function Menu({ params }: { params: { id: number } }) {
  const [size, setSize] = useState<string[]>([]);
  const [milk, setMilk] = useState<string[]>([]);
  const [syrup, setSyrup] = useState<string[]>([]);
  // const [ menu, setMenu] =useState<menu | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const id = params.id;

  useEffect(() => {
    const getAllMenu = async () => {
      setLoading(true);
      const data = (await axios.get("http://localhost:5000/menu/" + id)).data
      // setMenu(data);
      console.log(data);
      setLoading(false)
    };
    getAllMenu();
    return () => {

    }
  }, [])

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSize([...size, e.target.value]);
    } else {
      setSize(size.filter(item => item !== e.target.value));
    }
  };

  const handleMilkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setMilk([...milk, e.target.value]);
    } else {
      setMilk(milk.filter(item => item !== e.target.value));
    }
  };

  const handleSyrupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSyrup([...syrup, e.target.value]);
    } else {
      setSyrup(syrup.filter(item => item !== e.target.value));
    }
  };

  const handleShowSelections = () => {
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div style={{ display: "flex" }}>
        <Spinner size="lg" color="primary" />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
    
      <div style={{ flex: '1', maxWidth: '500px' }}>
        <Image
          isZoomed
          height={500}
          width={450}
          alt="Ice Latte"
          src={img.src}
        />
      </div>

    
      <div style={{ flex: '1', maxWidth: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <div style={{ marginBottom: '20px', marginTop: '10px' }}>
          <h3>Boyut Seçiniz:</h3>
          <br />
          <div style={{ display: 'flex', gap: '20px' }}>
            <Checkbox value="Küçük" onChange={handleSizeChange} size="md">Küçük</Checkbox>
            <Checkbox value="Orta" onChange={handleSizeChange} size="md">Orta</Checkbox>
            <Checkbox value="Büyük" onChange={handleSizeChange} size="md">Büyük</Checkbox>
          </div>
        </div>

        <div style={{ marginBottom: '20px', marginTop: '10px' }}>
          <h3>Süt Seçiniz:</h3>
          <br />
          <div style={{ display: 'flex', gap: '20px' }}>
            <Checkbox value="Laktozsuz" onChange={handleMilkChange} size="md">Laktozsuz</Checkbox>
            <Checkbox value="Yarım Yağlı" onChange={handleMilkChange} size="md">Yarım Yağlı</Checkbox>
            <Checkbox value="Badem Sütü" onChange={handleMilkChange} size="md">Badem Sütü</Checkbox>
          </div>
        </div>

        <div style={{ marginBottom: '20px', marginTop: '10px' }}>
          <h3>Şurup Seçiniz:</h3>
          <br />
          <div style={{ display: 'flex', gap: '20px' }}>
            <Checkbox value="Karamel" onChange={handleSyrupChange} size="md">Karamel</Checkbox>
            <Checkbox value="Vanilya" onChange={handleSyrupChange} size="md">Vanilya</Checkbox>
            <Checkbox value="Çikolata" onChange={handleSyrupChange} size="md">Çikolata</Checkbox>
          </div>
        </div>

    
        <Button onPress={handleShowSelections} color="primary" className="mt-6">
          Seçim Yap
        </Button>

  
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalContent>
            <ModalHeader>Seçimleriniz</ModalHeader>
            <ModalBody>
              <div><strong>Boyut:</strong> {size.join(", ") || "Seçilmedi"}</div>
              <div><strong>Süt Seçimi:</strong> {milk.join(", ") || "Seçilmedi"}</div>
              <div><strong>Şurup Seçimi:</strong> {syrup.join(", ") || "Seçilmedi"}</div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => setIsModalOpen(false)}>
                Kapat
              </Button>
              <Button color="primary" onPress={() => setIsModalOpen(false)}>
                Tamam
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default Menu; 