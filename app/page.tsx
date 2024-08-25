import { Form } from "@/components/Form";
import { ProfileBox } from "@/components/ProfileBox";


export default function Home() {



  return (
    <>
      <h1 className="text-center uppercase text-4xl font-black mb-5">App Klaviyo</h1>
      <Form />
      <h2>Buscar perfil especifico</h2>
      <div className="flex justify-center">
        <input type="text" placeholder="Buscar perfil" className="w-1/2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buscar</button>
      </div>

      <h2 className="uppercase text-center text-3xl font-black mb-5 mt-5">Los profiles que hay en la cuenta de klaviyo</h2>
      <div className="overflow-y-scroll max-h-96">
        <ProfileBox />
      </div>


    </>
  );
}
