import React from "react";
import ReactDom from 'react-dom';
import Search from './../Search';

it("renders without crashing", function(){
    const div = document.createElement("div");
    ReactDom.render(<Search></Search>, div)
})