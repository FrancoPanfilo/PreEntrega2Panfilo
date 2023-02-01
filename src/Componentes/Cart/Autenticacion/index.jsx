import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState, useContext } from "react";
import { MiCarrito } from "../../../MiCarritoContext";
function Autenticacion(desactivador) {
  const { carrito } = useContext(MiCarrito);
  const { setDatos, setFactura } = desactivador.desactivador;
  const [value, setValue] = useState();
  const [esconder, setEsconder] = useState("validacion");
  let total = 0;
  carrito.forEach((ele) => {
    total = total + ele.precio;
  });
  return (
    <div className={esconder}>
      <div className="nombre">
        <input
          required
          id="nombre"
          type="text"
          placeholder="Ingrese su nombre"
        />
        <input
          required
          id="apellido"
          type="text"
          placeholder="Ingrese su Apellido"
        />
      </div>
      <PhoneInput
        required
        id="telefono"
        placeholder="Ingrese su numero de celular"
        value={value}
        onChange={setValue}
      />
      <input
        required
        id="mail1"
        type="email"
        placeholder="ingrese su correo electronico"
      />
      <input required id="mail2" type="email" placeholder="repita email" />
      <p id="Error"> </p>
      <button
        onClick={() => {
          let expReg =
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
          let nombre = document.getElementById("nombre");
          let apellido = document.getElementById("apellido");
          let numero = document.getElementById("telefono");
          let mail1 = document.getElementById("mail1");
          let mail2 = document.getElementById("mail2");
          let error = document.getElementById("Error");
          if (nombre.value.length < 3 || nombre.value.length > 13) {
            error.innerText = "Nombre tiene que tener entre 3 y 13 caracteres";
          } else if (apellido.value.length < 3 || apellido.value.length > 13) {
            error.innerText =
              "Apellido tiene que tener entre 3 y 13 caracteres";
          } else if (numero.value < 11111 || numero.value > 999999999999999) {
            error.innerText = "Seleccione un numero de telefono correcto";
          } else if (mail1.value !== mail2.value) {
            error.innerText = "Los mails no son iguales";
          } else if (!expReg.test(mail1.value)) {
            error.innerText = "Mail tiene que contener un @";
          } else {
            error.innerText = "";
            setEsconder("esconderValidacion");
            setFactura("factura");
            setDatos({
              usuario: nombre.value + " " + apellido.value,
              mail: mail1.value,
              numero: numero.value,
              total: total,
              items: carrito,
            });
          }
        }}
      >
        Continuar con la compra
      </button>
    </div>
  );
}

export default Autenticacion;
