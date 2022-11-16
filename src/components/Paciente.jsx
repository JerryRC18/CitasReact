

const Paciente = () => {
  return (
    <div>
        <div className="m-5 bg-white shadow-md px-5 py-5 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase" >Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase" >Propietario: {''}
            <span className="font-normal normal-case">Jesus</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase" >Email: {''}
            <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase" >Fecha Alta: {''}
            <span className="font-normal normal-case">10 Diciembte 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase" >Sintomas: {''}
            <span className="font-normal normal-case">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</span>
        </p>
      </div>
    </div>
  )
}

export default Paciente
