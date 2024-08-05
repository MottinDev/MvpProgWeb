import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Car {
  id?: number;
  name: string;
  model: string;
  imageUrl: string;
}

interface CarFormProps {
  car?: Car | null;
  onSave: (car: Car) => void;
}

const CarForm: React.FC<CarFormProps> = ({ car, onSave }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (car) {
      setName(car.name);
      setModel(car.model);
      setImageUrl(car.imageUrl);
    }
  }, [car]);

  const handleSubmit = () => {
    onSave({ id: car?.id, name, model, imageUrl });
    setName('');
    setModel('');
    setImageUrl('');
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mb: 2 }}>
      <TextField
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Modelo"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        {car ? 'Update Car' : 'Add Car'}
      </Button>
    </Box>
  );
};

export default CarForm;
