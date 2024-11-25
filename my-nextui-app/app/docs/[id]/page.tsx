"use client";
import { Image, Textarea } from "@nextui-org/react";
import img from "../../../public/images/db.jpg";

function Menu({ params }: { params: { id: number } }) {
  console.log(params);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
      
      <Image
        isZoomed
        height={500}
        width={700}
        alt="NextUI Fruit Image with Zoom"
        src={img.src}
      />
      
      <Textarea
        isReadOnly
        label="Tarihçesi:"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Enter your description"
        defaultValue="Dubai'de yaşayan Sarah Hamouda, çocuğuna hamileliği sırasında çikolata aşermesi üzerine yediği hiçbir çikolata onu tatmin etmedi. İstediği tadı diğer çikolatalarda bulamayan Hamouda, bunun üzerine kendi tatlı markasını kurarak Dubai çikolatalarını piyasaya sürdü.İnsanlar yüzyıllardır kahve ve sütü bir araya getirdiği için lattenin kökeni çok net değil. Ancak, bugün bildiğimiz ve sevdiğimiz ipeksi içeceğin Amerika'da ortaya çıktığı ve 80'li yıllarda Seattle'da popülerliğinin zirvesine ulaştığı düşünülmektedir.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen  . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
        className="max-w-xl"
        style={{ flex: 1 }} 
      />
    </div>
  );
}

export default Menu;
