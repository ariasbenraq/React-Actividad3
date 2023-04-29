import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



function ProfilePage() {

  const profileData = {
    id:1,
    name: 'Renzo Arias',
    age: 36,
    occupation: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel justo vitae tortor sodales rhoncus id vel lacus. Nunc euismod, nunc non dapibus commodo, elit elit pharetra sapien, quis sollicitudin turpis velit sit amet tellus. Sed sit amet bibendum justo. Nullam rutrum, mi et efficitur placerat, dolor justo malesuada purus, a tristique arcu arcu quis ante.',
    profilePic: 'https://cdn001.tintin.com/public/tintin/img/characters/tintin/tintin@2x.png'
  };

  return (

    <div>
      <Container>
        <div className="profile-page container text-center mt-5" key={ProfilePage.id} >
          <img className="mx-auto rounded" src={profileData.profilePic} style={{ width: '10rem' }} alt="Profile pic" />
          <h1>{profileData.name}</h1>
          <p>Age: {profileData.age}</p>
          <p>Occupation: {profileData.occupation}</p>
          <p>Bio: {profileData.bio}</p>
          <button type='button' className='btn btn-warning'>
          <Link to="/PostArchive" className='link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover nav-link'>
           Home
          </Link>
          </button>
          
        </div>
      </Container>

    </div>


  );


}

export default ProfilePage;