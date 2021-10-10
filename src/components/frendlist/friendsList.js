import FriendsItem from "./frendItem";
function FriendsList({items}){
    return(
       
     <ul>
         {items.map(item=>(
             <li key={item.id}>
     <FriendsItem 
     avatar={item.avatar}
     name={item.name}
     isOnline={item.isOnline}
     id={item.id}
     />
             </li>
         ))}
     </ul>
     
    );

}
export default FriendsList;