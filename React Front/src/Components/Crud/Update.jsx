import React, {useState} from "react";

const UpdateModal = ({onClose,isOpen,onUpdate,data}) => {
const [newData, setNewData] = useState({

  id: data,
  
});

const handleUpdate = () =>{

    console.log(newData);
  onUpdate(data , newData)

  onClose();

}

return isOpen ? (
  <div className="modal">
    <div className="modal-content">
          <h2>Update the Element</h2>
          <input
          type="text"
          value={newData.id}
          onChange={(e) => setNewData({ ...newData, id: e.target.value })}
        />
        {/* Agrega campos de actualización para otros atributos aquí */}
        <button onClick={handleUpdate}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
    </div>
  </div>
) : null;
};

export default UpdateModal;