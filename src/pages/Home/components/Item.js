const Item = ({ id, note, date, time,  deleteData, submittingStatus}) => {
 
  function deleteItem(){
    deleteData(function(prevData){
      submittingStatus.current = true
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
