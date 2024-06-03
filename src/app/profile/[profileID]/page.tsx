import { ProfilePage } from "@/components/ProfilePage/ProfilePage"
import React from "react"

const ProfileID = ({ params }: { params: { profileID: string } }) => {
  return (
    <section className="profile">
      <div className="container">
        <ProfilePage />
      </div>
    </section>
  )
}

export default ProfileID
