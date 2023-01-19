import React from "react";
const NewsItem = () => {
    return ( 
        <div className="col-3 p-1">
        <div class="card"  >
          <img src="https://freesvg.org/storage/img/thumb/mono_bank.png" style={{height: "7rem", width : "7rem"}} alt="image" class="card-img-top" />
          <div class="card-body">
          <h1 class="card-title">HELLO NEWS</h1>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  target={'_blank'} href="#" class="btn btn-warning btn-block">{'VISIT PAGE'}</a>
        </div>
      </div>
     
      </div>
     );
}
 
export default NewsItem;



