import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Button } from 'react-bootstrap';
import './SortBy.css';

function SortBy({ paquetes, setPackages }) {
  const sortByPriceAsc = () => {
    const sortedPackages = [...paquetes].sort((a, b) => a.pr_total - b.pr_total);
    setPackages(sortedPackages);
  };

  const sortByPriceDesc = () => {
    const sortedPackages = [...paquetes].sort((a, b) => b.pr_total - a.pr_total);
    setPackages(sortedPackages);
  };

  const sortByServiceCount = () => {
    const sortedPackages = [...paquetes].sort((a, b) => b.servicios_hh.length - a.servicios_hh.length);
    setPackages(sortedPackages);
  };

  const sortByRating = () => {
    const sortedPackages = [...paquetes].sort((a, b) => a.rating - b.rating);
    setPackages(sortedPackages);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Ordenar
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Button} onClick={sortByPriceAsc}>Precio (Asc)</Dropdown.Item>
        <Dropdown.Item as={Button} onClick={sortByPriceDesc}>Precio (Des)</Dropdown.Item>
        <Dropdown.Item as={Button} onClick={sortByServiceCount}>Servicios</Dropdown.Item>
        <Dropdown.Item as={Button} onClick={sortByRating}>Valoracion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortBy;