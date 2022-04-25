import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 /* add required style here */
  display: grid;
  grid-template-columns: repeat(4,1fr);
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data

    const getData = async() =>{
      try{
        let res = await fetch("http://localhost:8080/books");
        let data1 = await res.json();
        console.log('data:', data1)
        setData(data1)
      }

      catch(err){
        console.log('err:', err)
      }
    }

    getData()
  }, []);

  

  return (
    <>
      <h1>Books</h1>

        <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}

          <BookCard {...data[0]} id={0}/>
          <BookCard {...data[1]} id={1}/>
          <BookCard {...data[2]} id={2}/>
          <BookCard {...data[3]} id={3}/>
          <BookCard {...data[4]} id={4} />
          <BookCard {...data[5]} id={5} />
          <BookCard {...data[6]} id={6} />
          <BookCard {...data[7]} id={7} />
          <BookCard {...data[8]} id={8} />
          <BookCard {...data[9]} id={9} />
          <BookCard {...data[10]} id={10} />
          <BookCard {...data[11]} id={11} />
          <BookCard {...data[12]} id={12} />
          <BookCard {...data[13]} id={13} />
          <BookCard {...data[14]} id={14} />
          <BookCard {...data[15]} id={15} />


  

       </Grid>
      
    </>
  );
};
export default Books;
