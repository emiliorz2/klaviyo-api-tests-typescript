"use client"
import useKlaviyo from "@/hooks/useKlaviyo"

export const ProfileBox = () => {
    //import de useKlaviyo
    const { profiles } = useKlaviyo();
  return (
    //aqui se va iterar la lista de perfiles
    <div className=" space-y-5">
        {profiles.map((profile) => (
            <div key={profile.id} className="bg-gray-900 max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
                <h2 className="text-white text-lg font-semibold mb-2">Profile ID: {profile.id}</h2>
                <p className="text-white text-lg font-semibold mb-2">Email: {profile.attributes.email}</p>
                <p className="text-white text-lg font-semibold mb-2">First Name: {profile.attributes.first_name}</p>
                <p className="text-white text-lg font-semibold mb-2">Last Name: {profile.attributes.last_name}</p>
                <p className="text-white text-lg font-semibold mb-2">Phone Number: {profile.attributes.phone_number}</p>
                </div>
        ))}
    </div>
  )
}
