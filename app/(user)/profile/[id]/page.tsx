import React from "react";
import Profile from "./Profile";
import AquariumView from "./AquariumView";

export default async function UserProfile(props: any) {
    return (
        <div className={`flex flex-col min-h-screen w-screen p-5 items-center`}>
            <Profile />
            <AquariumView userId={props.params.id}/>
        </div>
    )
}
