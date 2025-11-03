import { useRef, useState } from 'react'

function App() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

  const checkCharacters = (string, validationString) => {
    return string.split('').some(char => validationString.includes(char));
  }

  const fullNameIsValid = fullName.trim() !== '';
  const usernameIsValid = username.trim() !== '' &&
    !username.includes(' ') &&
    checkCharacters(username, letters) &&
    checkCharacters(username, numbers) &&
    !checkCharacters(username, symbols);
  const passwordIsValid = password.trim() !== '' &&
    password.length >= 8 &&
    checkCharacters(password, letters) &&
    checkCharacters(password, numbers) &&
    checkCharacters(password, symbols);
  const specializationIsValid = specialization.trim() !== '';
  const experienceIsValid = experience.trim() !== '' && experience >= 0;
  const descriptionIsValid = description.trim() !== '' &&
    description.length >= 100 &&
    description.length <= 1000;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullNameIsValid && usernameIsValid && passwordIsValid && specializationIsValid && experienceIsValid && descriptionIsValid) {
      console.log(fullName, username, password, specialization, experience, description);
    } else {
      console.log('Attenzione! Compila i campi correttamente.')
    }
  }

  return (
    <div className='container'>
      <h1>Web Developer Signup</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='fullName'>
          Full Name
        </label>
        <input
          id='fullName'
          name='fullName'
          type='text'
          placeholder='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor='username'>
          Username
        </label>
        <input
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div
          className={usernameIsValid ? "successMessage" : "errorMessage"}
        >
          {usernameIsValid ? "Username is valid." : "Username is not valid."}
        </div>

        <label htmlFor='password'>
          Password
        </label>
        <input
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className={passwordIsValid ? "successMessage" : "errorMessage"}
        >
          {passwordIsValid ? "Password is valid." : "Password is not valid"}
        </div>

        <label htmlFor='specialization'>
          Specialization
        </label>
        <select
          id="specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">--Select an option--</option>
          <option value="fullStack">Full Stack</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>

        <label htmlFor='experience'>
          Years of experience
        </label>
        <input
          type="number"
          id='experience'
          min={0}
          step={1}
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <label htmlFor='description'>
          Description
        </label>
        <textarea
          id='description'
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div
          className={descriptionIsValid ? "successMessage" : "errorMessage"}
        >
          {descriptionIsValid ? "Description is valid." : "Description is not valid"}
        </div>

        <div className="actionContainer">
          <input type='submit' value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default App
