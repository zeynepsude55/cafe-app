"use client";
import { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Input, Button, Image, useDisclosure, ModalContent, ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useRouter } from "next/navigation";
import { Modal } from "@nextui-org/react";
import axios from "axios";


export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [kahveAdı, setKahveAdı] = useState("");
  const [img, setİmg] = useState("");
  const [fiyat, setFiyat] = useState("");
  const [menu, setMenu] = useState([]);

  const [mounted, setMounted] = useState(false);

  const [yeniKahve, setYeniKahve] = useState({
    title: "deneme",
    price: 123,
    img: "",
  })

  useEffect(() => {
    const getAllMenu = async () => {
      await axios.get("http://localhost:5000/menu")
        .then((response) => {
          setMenu(response.data);
        })
    };
    getAllMenu();
  }, []);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // const filteredList = menu.filter((item: any) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  const Ekle = (item: any) => {
    console.log("start item:", item);

    axios.post("http://localhost:5000/menu", item)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err))

    console.log("son");
  }


  const handleKahveSil = async (id: number) => {
    const confirmDelete = window.confirm("Bu kahveyi silmek istediğinizden emin misiniz?");
    if (!confirmDelete) return;


    await axios.delete(`http://localhost:5000/menu/` + id)
      .then(response => {
        setMenu(menu.filter((kahve: any) => kahve._id !== id));
      })

  };

  return (
    <div className="flex flex-col">

      <div className="mb-10 ml-96 w-full max-w-lg">
        <Input
          placeholder="Soğuk Kahve Ara"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>


      <div className="mt-8 ml-32 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center mx-auto max-w-6xl w-full">
        {menu.length > 0 ? (
          <>
            {menu.map((item: any) => (
              <Card
                shadow="sm"
                key={item._id}
                isPressable
                onPress={() => router.push(`/blog/${item._id}`)}
                className="relative"
              >
                <CardBody className="p-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item?.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out transform hover:brightness-75"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                  <Button color="danger" onClick={() => handleKahveSil(item._id)}>
                    Sil
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Card
              shadow="sm"
              key="add-new"
              isPressable
              className="relative"
            >
              <CardBody className="p-0 flex items-center justify-center overflow-hidden">

                <Button
                  // onPress={onOpen}
                  onClick={() => { Ekle(yeniKahve) }}
                  className="w-20 h-20 bg-pink-500 text-white text-4xl rounded-none shadow-none border-none hover:bg-pink-600 focus:bg-pink-600"
                >
                  +
                </Button>

                <Modal
                  backdrop="opaque"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                        <ModalBody>
                          <p>

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
                              <Input
                                placeholder="Fotoğraf"
                                value={img}
                                onChange={(e) => setİmg(e.target.value)}
                                className="w-full mb-4"
                              />


                            </div>
                          </p>

                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Kapat
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Kahve Ekle
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </CardBody>
            </Card>
          </>
        ) : (
          <Card
            shadow="sm"
            key="add-new"
            isPressable
            className="relative"
          >
            <CardBody className="p-0 flex items-center justify-center overflow-hidden">
              <Button
                onPress={onOpen}
              // onClick={Ekle}
              >
                +
              </Button>
              <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                  backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                      <ModalBody className="flex flex-col items-center justify-center ml-5">
                        <p>
                          <div className="w-full">
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
                            <Input
                              placeholder="Fotoğraf"
                              value={img}
                              onChange={(e) => setİmg(e.target.value)}
                              className="w-full mb-4"
                            />


                          </div>
                        </p>

                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Kapat
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Kahve Ekle
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardBody>
          </Card>)}
      </div>
    </div>
  );
}