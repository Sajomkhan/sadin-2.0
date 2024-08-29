// @ts-nocheck
"use client"

// import { ShahidList } from '@/lib/data';
import { shahidList } from '@/lib/data';
import DataTable, { TableColumn } from 'react-data-table-component';

// interface ShahidList {
//     id: number;
//     name: string;
//     ocupation: string;
//     address: string;
//     death_place: string;
//     death_date: string;
//     birth_date: string;
//     age: number;
//     gender: string;
//     photo: string;
//   };

const ShahidTable = () => {

const columns= [
// const columns: TableColumn<ShahidList>[] = [
    {
        name: "Sl.No.",
        selector: row => row.id ,
    },
    {
        name: "Photo",
        selector: row => row.photo 
    },
    {
        name: "Name",
        selector: row => row.name 
    },
    {
        name: "Ocupation",
        selector: row => row.ocupation 
    },
    {
        name: "Age",
        selector: row => row.age 
    },
    {
        name: "Address",
        selector: row => row.address 
    },
    {
        name: "Death Time",
        selector: row => row.death_date 
    },
    {
        name: "Death Place",
        selector: row => row.death_place 
    },
]

const data = [
    {
      id: 1,
      name: "Abu Sayed",
      ocupation: "Student",
      address: "Begum Rokeya University, Rangpur",
      death_place: "Shahabag",
      death_date : "16th July, 2024",
      age: 23,
      photo:
        "https://shohid.info/shohid/abu-sayed.jpg",
    },
    {
      id: 2,
      name: "Abu Sayed",
      ocupation: "Student",
      address: "Begum Rokeya University, Rangpur",
      death_place: "Shahabag",
      death_date : "16th July, 2024",
      age: 23,
      photo:"https://shohid.info/shohid/abu-sayed.jpg",
    },
    {
      id: 3,
      name: "Abu Sayed",
      ocupation: "Student",
      address: "Begum Rokeya University, Rangpur",
      death_place: "Shahabag",
      death_date : "16th July, 2024",
      birth_date: "",
      age: 23,
      photo:
        "https://shohid.info/shohid/abu-sayed.jpg",
    },
    
  ];

  return (
    <div className=''>
        <DataTable>
            columns = {columns}
            data = {data}
        </DataTable>
    </div>
  )
}

export default ShahidTable