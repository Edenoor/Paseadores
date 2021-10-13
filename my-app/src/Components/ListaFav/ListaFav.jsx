import React, { useEffect, useState } from 'react'
import Nav from '../../ClientsComponents/perfilCliente/nav/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getForListFav,getUserFavorites } from "../../../src/actions/index"
import UserFav from "./UserFav"

const Admin = () => {
 const dispatch = useDispatch();
 var id = localStorage.getItem("userId");
 const favorites = useSelector((state) => state.favorites);
 const dataFavorites = useSelector((state) => state.dataFavorites);
 

    useEffect(() => {
      
      dispatch(getForListFav(id))
      dispatch(getUserFavorites(id))

  },[dispatch])

  return (
    <div >
      <Nav />
     {dataFavorites?.length > 0 ? (
            dataFavorites.map((el) => {
              var fv;
            favorites.length && favorites?.forEach((element) => 
              {if(element === el.id){
               fv = true
              }});
             
              return (
                <UserFav
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  surname={el.surname}
                  image={el.image}
                  service={el.service}
                  price={el.price}
                  reputation={el.reputation}
                  description={el.description}
                  fv= {fv}
                />
              );
            })
          ) : (
            <div>
              <p>No se encontraron usuarios</p>
            </div>
          )}
      
    </div>
  )
}

export default Admin;