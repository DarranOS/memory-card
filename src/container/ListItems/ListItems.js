import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import Card from "../../components/Card/Card";

const ListItems = (props) =>
  props.map((card) => (
    <CSSTransition key={card.name} timeout={300} unmountOnExit>
      <li
        id={card.name}
        // onClick={(e) => {
        //   SelectedCardHandler(e.target.closest("li"));
        // }}
      >
        <Card card={card} refresh={false} />
      </li>
    </CSSTransition>
  ));

export default ListItems;
