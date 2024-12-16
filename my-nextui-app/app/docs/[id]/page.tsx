"use client";
import { Image, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

function Menu({ params }: { params: { id: number } }) {
  const [tatli, setTatli] = useState<any>(null);

  useEffect(() => {
    const fetchTatli = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tatli/${params.id}`);
        setTatli(response.data);
      } catch (error) {
        console.error("Error fetching tatli:", error);
      }
    };
    fetchTatli();
  }, [params.id]);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
      {tatli && (
        <>
          <Image
            isZoomed
            height={500}
            width={700}
            alt={tatli.title}
            src={tatli.img}
          />
          <Textarea
            isReadOnly
            label="Tarihçesi:"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue={tatli.description || "Tatlı, öğle yemeği ve akşam yemeğinden sonra yenilen yemek türüdür. Tatlı çeşitleri arasında kek, turta, kurabiye, bisküvi, jelatinler, hamur işleri, dondurma, pasta, puding ve muhallebi gibi birçok şekerleme ve yemek sonrası keyif yemeği çeşitleri girmektedir Tatlı, öğle yemeği ve akşam yemeğinden sonra yenilen yemek türüdür. Tatlı çeşitleri arasında kek, turta, kurabiye, bisküvi, jelatinler, hamur işleri, dondurma, pasta, puding ve muhallebi gibi birçok şekerleme ve yemek sonrası keyif yemeği çeşitleri girmektedir.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            className="max-w-xl"
            style={{ flex: 1 }}
          />
        </>
      )}
    </div>
  );
}

export default Menu;
