import { Form } from "@/components/Form";
import { ProfileBox } from "@/components/ProfileBox";
import { ProfileList } from "@/components/ProfileList";
import { SearchProfile } from "@/components/SearchProfile";


export default function Home() {



  return (
    <>
      <h1 className="text-center uppercase text-4xl font-black mb-5">App Klaviyo</h1>
      <Form />
      <h2 className="text-center uppercase text-3xl font-black mb-5 mt-5">Buscar perfil especifico</h2>
      <SearchProfile />

      <h2 className="uppercase text-center text-3xl font-black mb-5 mt-5">Los profiles que hay en la cuenta de klaviyo</h2>

      <ProfileList />

    </>
  );
}
