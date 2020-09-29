import React from "react";

class SearchBar extends React.Component {
  render() {
    return ( <form>
      <input type = "text"
      placeholder = "Search..." />
      <p>
      <input type = "checkbox"/> {
        ' '}
      West Coast 
      </p> 
       <p>
         <input type = "checkbox" / > {
           ' '}
       East Coast
         </p> 
          <p>
            <input type = "checkbox"/> {
              ' '}
          Southern US
            </p> 
             <p>
               <input type = "checkbox" / > {
                 ' '}
                 Middle US
               </p> 
      </form>
    );
  }
}

class FilterableLocations extends React.Component {
    render() {
        return ( 
          <div>
          <SearchBar/>
          <ProductTable locations = {
            this.props.locations
          }
          /> 
          </div>
        );