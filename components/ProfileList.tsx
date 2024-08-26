"use client"
import useKlaviyo from "@/hooks/useKlaviyo";
import { ProfileBox } from "./ProfileBox"


export const ProfileList = () => {
    //import de useKlaviyo
    const { profiles } = useKlaviyo();
    return (
        <>
            <div className="overflow-y-scroll max-h-96 mb-5">
                <div className=" space-y-5">
                    {profiles.map((profile) => (
                        profile && profile.id && (
                            <ProfileBox
                                key={profile.id}
                                profile={profile}
                            />
                        )
                    ))}
                </div>
            </div>
        </>
    )
}
