const Item = ({ id, note, date, time,  deleteData}) => {
 
  function deleteItem(){
    deleteData(function(prevData){
        return prevData.filter(item => item.id !== id)
    })
  }
 
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
  );
};

export default Item;
