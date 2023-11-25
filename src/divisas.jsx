import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
  
const ConvertidorDivisas = () => {
  const [monto, setMonto] = useState(1);
  const [monedaOrigen, setMonedaOrigen] = useState('Dolares');
  const [monedaDestino, setMonedaDestino] = useState('Argentinos');


  const handleChangeMontoOrigen = (event) => {
    setMonedaOrigen(event.target.value);
  };
  const handleChangeMontoDestiono = (event) => {
    setMonedaDestino(event.target.value);
  };

  // En este ejemplo, asumimos tasas de cambio fijas.
  const tasasDeCambio = {
    Dolares: 1,
    Argentinos: 355.86,
    Bolivianos: 6.89, 
    Chilenos: 868.02, 
    Venezolanos: 35.42,  
    Colombianos: 4054.43,  
    Mexicanos: 17.12,  
    Uruguayos: 38.96,  
    Brasilenos: 4.90, 
    Ecuatorianos: 25000, 
    Peruanos: 3.73, 
  };

  const calcularConversion = () => {
    const montoConvertido = (monto * tasasDeCambio[monedaDestino]) / tasasDeCambio[monedaOrigen];
    return montoConvertido.toFixed(2); // Redondea a dos decimales
  };

  return (
    <div>
      <h2>Convertidor de Divisas</h2>
      <div>
        <TextField
          id="outlined-number"
          label="Monto"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={monto} 
          onChange={(e) => setMonto(e.target.value)}
        />
      </div>
      <div className="select">
        <FormControl fullWidth>
        <InputLabel id="label">Monto Origen</InputLabel>
        <Select
          labelId="label"
          id="demo-simple-select"
          value={monedaOrigen}
          label="Monto Origen"
          onChange={handleChangeMontoOrigen}
        >
          <MenuItem value={"Dolares"}>Dolar</MenuItem>
          <MenuItem value={"Argentinos"}>Peso Argentino</MenuItem>
          <MenuItem value={"Bolivianos"}>Boliviano</MenuItem>
          <MenuItem value={"Chilenos"}>Peso Chileno</MenuItem>
          <MenuItem value={"Venezolanos"}>Peso Venezolano</MenuItem>
          <MenuItem value={"Colombianos"}>Peso Colombiano</MenuItem>
          <MenuItem value={"Mexicanos"}>Peso Mexicano</MenuItem>
          <MenuItem value={"Brasilenos"}>Real Brasileño</MenuItem>
          <MenuItem value={"Uruguayos"}>Peso Uruguayo</MenuItem>
          <MenuItem value={"Ecuatorianos"}>Peso Ecuatoriano</MenuItem>
          <MenuItem value={"Peruanos"}>Peso Peruano</MenuItem>
        </Select>
        </FormControl>
      
      </div>
      <div className="select">

      <FormControl fullWidth>
              <InputLabel id="label2">Monto de Destino</InputLabel>
              <Select
                labelId="label2"
                id="demo-simple-select2"
                value={monedaDestino}
                label="Monto de Destino"
                onChange={handleChangeMontoDestiono}
              >
                <MenuItem value={"Dolares"}>Dolar</MenuItem>
                <MenuItem value={"Argentinos"}>Peso Argentino</MenuItem>
                <MenuItem value={"Bolivianos"}>Boliviano</MenuItem>
                <MenuItem value={"Chilenos"}>Peso Chileno</MenuItem>
                <MenuItem value={"Venezolanos"}>Peso Venezolano</MenuItem>
                <MenuItem value={"Colombianos"}>Peso Colombiano</MenuItem>
                <MenuItem value={"Mexicanos"}>Peso Mexicano</MenuItem>
                <MenuItem value={"Brasilenos"}>Real Brasileño</MenuItem>
                <MenuItem value={"Uruguayos"}>Peso Uruguayo</MenuItem>
                <MenuItem value={"Ecuatorianos"}>Peso Ecuatoriano</MenuItem>
                <MenuItem value={"Peruanos"}>Peso Peruano</MenuItem>
              </Select>
        </FormControl>
      </div>
      <h3>Resultado: {calcularConversion()} Pesos {monedaDestino} </h3>
    </div>
  );
};

export default ConvertidorDivisas;