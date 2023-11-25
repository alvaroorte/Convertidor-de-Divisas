import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
  
const ConvertidorDivisas = () => {
  const [monto, setMonto] = useState(1);
  const [monedaOrigen, setMonedaOrigen] = useState('Dolar');
  const [monedaDestino, setMonedaDestino] = useState('Argentino');


  const handleChangeMontoOrigen = (event) => {
    setMonedaOrigen(event.target.value);
  };
  const handleChangeMontoDestiono = (event) => {
    setMonedaDestino(event.target.value);
  };

  // En este ejemplo, asumimos tasas de cambio fijas.
  const tasasDeCambio = {
    Dolar: 1,
    Argentino: 355.86,
    Boliviano: 6.89, 
    Chileno: 868.02, 
    Venezolano: 35.42,  
    Colombiano: 4054.43,  
    Mexicano: 17.12,  
    Uruguayo: 38.96,  
    Brasileno: 4.90, 
    Ecuatoriano: 25000, 
    Peru: 3.73, 
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
          <MenuItem value={"Dolar"}>Dolar</MenuItem>
          <MenuItem value={"Argentino"}>Peso Argentino</MenuItem>
          <MenuItem value={"Boliviano"}>Boliviano</MenuItem>
          <MenuItem value={"Chileno"}>Peso Chileno</MenuItem>
          <MenuItem value={"Venezolano"}>Peso Venezolano</MenuItem>
          <MenuItem value={"Colombiano"}>Peso Colombiano</MenuItem>
          <MenuItem value={"Mexicano"}>Peso Mexicano</MenuItem>
          <MenuItem value={"Brasileno"}>Real Brasileño</MenuItem>
          <MenuItem value={"Uruguayo"}>Peso Uruguayo</MenuItem>
          <MenuItem value={"Ecuatoriano"}>Peso Ecuatoriano</MenuItem>
          <MenuItem value={"Peru"}>Peso Peruano</MenuItem>
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
                <MenuItem value={"Dolar"}>Dolar</MenuItem>
                <MenuItem value={"Argentino"}>Peso Argentino</MenuItem>
                <MenuItem value={"Boliviano"}>Boliviano</MenuItem>
                <MenuItem value={"Chileno"}>Peso Chileno</MenuItem>
                <MenuItem value={"Venezolano"}>Peso Venezolano</MenuItem>
                <MenuItem value={"Colombiano"}>Peso Colombiano</MenuItem>
                <MenuItem value={"Mexicano"}>Peso Mexicano</MenuItem>
                <MenuItem value={"Brasileno"}>Real Brasileño</MenuItem>
                <MenuItem value={"Uruguayo"}>Peso Uruguayo</MenuItem>
                <MenuItem value={"Ecuatoriano"}>Peso Ecuatoriano</MenuItem>
                <MenuItem value={"Peru"}>Peso Peruano</MenuItem>
              </Select>
        </FormControl>
      </div>
      <h3>Resultado: {calcularConversion()} Pesos {monedaDestino}</h3>
    </div>
  );
};

export default ConvertidorDivisas;