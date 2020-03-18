import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import GeneratePDFButton from "./../components/Buttons/GeneratePDFButton";
import Head from "./../components/Table/Head";
import Body from "./../components/Table/Body";
import Menu from "./../components/Menu/Menu";
import shortid from "shortid";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DeadUnitsContainer = props => {
  const [data, setData] = useState([]);
  const [unlimitedData, setUnlimitedData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [idPig, setIdPig] = useState("");
  const [price, setPrice] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  const getData = async () => {
    await fetch(`https://obb-api.herokuapp.com/sold-pigs-limited`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(e => e);
  };

  const getUnlimitedData = () => {
    fetch(`https://obb-api.herokuapp.com/sold-pigs`)
      .then(res => res.json())
      .then(res => setUnlimitedData(res))
      .catch(e => e);
  };

  const showForm = (id, price) => {
    setIdPig(id);
    setPrice(price);
    toggleMenu();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
    setShowEdit(false);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  useEffect(() => {
    getData();
    getUnlimitedData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date();

    doc.text(`Raport sprzedazy - ${date.toString().substring(0, 15)}`, 10, 20);
    doc.autoTable({
      startY: 25,
      head: [
        [
          "Data sprzedazy",
          "Kwota sprzedazy",
          "Data zakupu",
          "Cena",
          "ID",
          "Plec",
          "Kojec"
        ]
      ],
      body: unlimitedData.map(data => [
        `${data.pigSaleDate.substring(0, 10)}`,
        `${data.pigSellingCost}`,
        `${data.pigShoppingDate.substring(0, 10)}`,
        `${data.pigShoppingPrice}`,
        `${data.id}`,
        `${data.pigGender === "m" ? "Samiec" : "Samica"}`,
        `${data.idPen}`
      ])
    });

    doc.save("sold-units.pdf");
  };

  return (
    <div className="UnitsContainer">
      <div className="UnitsTable">
        <div className="TableContent">
          <Table bordered hover variant="dark">
            <thead>
              <Head
                data={[
                  "Kojec",
                  "ID",
                  "Płeć",
                  "Data zakupu",
                  "Cena",
                  "Data sprzedaży",
                  "Kwota sprzedaży"
                ]}
              />
            </thead>
            <tbody>
              {data.map((data, index) => (
                <Body
                  key={`${data.id}${shortid.generate()}`}
                  data={data}
                  showForm={showForm.bind(this, data.id, data.pigSellingCost)}
                />
              ))}
            </tbody>
          </Table>
        </div>
        <GeneratePDFButton generatePDFHandler={generatePDF} />
        {showMenu && (
          <Menu
            mode="sold"
            id={idPig}
            price={price}
            showMenu={toggleMenu}
            showEdit={toggleEdit}
            hideMenu={hideMenu}
            url="https://obb-api.herokuapp.com/delete-pig/"
            show={showEdit}
            reloadHandler={props.reloadHandler}
          />
        )}
      </div>
    </div>
  );
};

export default DeadUnitsContainer;