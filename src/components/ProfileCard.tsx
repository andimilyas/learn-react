import React from 'react' 
import Button from './Button'
type ProfileCardProps = {
    name: string;
    avatar: string;
    email: string;
    phone: number;
    address: string;
    id: number;
}

const ProfileCard = ({ name, avatar, email, phone, address }: ProfileCardProps) => {
    return (
        <div className='profile-card'>
            <img className='avatar' src={avatar} alt={name} />
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p> 
            <Button />
        </div>
    )
}

export default ProfileCard;

