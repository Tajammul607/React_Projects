import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Form, Button, Table } from 'react-bootstrap'; // Import Bootstrap components

interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  city: string;
  profileImage?: string | null;
}

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    id: 1,
    firstName: '',
    lastName: '',
    dob: '',
    city: '',
    profileImage: null,
  });
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files && e.target.files[0];
    if (imageFile) {
      setProfile({ ...profile, profileImage: URL.createObjectURL(imageFile) });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProfiles([...profiles, { ...profile, id: profiles.length + 1 }]);
    setProfile({ // Reset form fields
      id: profiles.length + 2, // Ensure a unique ID for the next submission
      firstName: '',
      lastName: '',
      dob: '',
      city: '',
      profileImage: null,
    });
  };

  return (
    <div className="container mt-5">
       <h1>Profile Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formDob">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control type="date" name="dob" value={profile.dob} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>City:</Form.Label>
          <Form.Control type="text" name="city" value={profile.city} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formProfileImage">
          <Form.Label>Profile Image:</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
          {profile.profileImage && (
            <img src={profile.profileImage} alt="Profile" className="mt-2" style={{ maxWidth: '100px' }} />
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>City</th>
            <th>Profile Image</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((prof) => (
            <tr key={prof.id}>
              <td>{prof.id}</td>
              <td>{prof.firstName}</td>
              <td>{prof.lastName}</td>
              <td>{prof.dob}</td>
              <td>{prof.city}</td>
              <td>{prof.profileImage && <img src={prof.profileImage} alt="Profile" style={{ maxWidth: '100px' }} />}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProfileForm;
