import React from 'react';


function App() {
  return (
    <div>
  <header>
    <div className="container">
      <div className="row"> 
        <div className="col-sm-3">
          <div className="header-category"> Timmer : <span id="timmer" /> </div>  
        </div>
        <div className="col-sm-3">
          <div className="header-category"> Current Time : <span id="showclock" /> </div>  
        </div>
        <div className="col-sm-3">
          <div className="header-category"> Pool Pocket : <span> 28.03.2015 2:40 PM </span> </div>  
        </div>
        <div className="col-sm-3">
          <div className="header-category wollet"> <p><i className="fas fa-wallet" /> 999.0 </p> </div>  
        </div>
      </div> 
    </div>  
  </header>
  <section className="pool-tabs">
    <div className="container">
      <ul className="nav nav-tabs pool">
        <li className="active"><a data-toggle="tab" href="#Select_Pool" className="active show">Select Pool</a></li>
        <li><a data-toggle="tab" href="#Pool_Pocket">Pool Pocket</a></li>
        <li><a href="#">Reset</a></li>
      </ul>
      <div className="tab-content">
        <div id="Select_Pool" className="tab-pane fade in active show">
          <div className="pool-main">
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/1.png" /> <img src="img/2.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/1.png" /> </li>
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/1.png" /> <img src="img/2.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/1.png" /> </li>
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/4.png" /> </li>
          </div>  
        </div>
        <div id="Pool_Pocket" className="tab-pane fade">
          <div className="pool-main">
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/1.png" /> <img src="img/2.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/1.png" /> </li>
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/1.png" /> <img src="img/2.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/1.png" /> </li>
            <li> <img src="img/3.png" /> <img src="img/4.png" /> </li>
            <li> <img src="img/2.png" /> <img src="img/4.png" /> </li>
          </div>
        </div>
      </div>
    </div>  
  </section>
  <section className="checkbox">
    <div className="container">
      <div className="check_box_main">
        <li> <input type="checkbox" name defaultChecked /> <span> ALL </span> </li>
        <li> <input type="checkbox" name /> </li>
        <li> <input type="checkbox" name /> </li>
        <li> <input type="checkbox" name /> </li>
        <li> <input type="checkbox" name /> </li>
      </div>
    </div>  
  </section>
  <section className="pool-ball-sec">
    <div className="container">
      <div className="check_box_main ball">
        <li> <input type="checkbox" name className="left-check" /></li>
        <li> <img src="img/1.png" /> </li>
        <li> <img src="img/2.png" /> </li>
        <li> <img src="img/3.png" /> </li>
        <li> <img src="img/4.png" /> </li>
        <li> <input type="checkbox" name className="left-check" /></li>
        <li> <img src="img/1.png" /> </li>
        <li> <img src="img/2.png" /> </li>
        <li> <img src="img/3.png" /> </li>
        <li> <img src="img/4.png" /> </li>
        <li> <input type="checkbox" name className="left-check" /></li>
        <li> <img src="img/1.png" /> </li>
        <li> <img src="img/2.png" /> </li>
        <li> <img src="img/3.png" /> </li>
        <li> <img src="img/4.png" /> </li>
        <li> <input type="checkbox" name className="left-check" /></li>
        <li> <img src="img/1.png" /> </li>
        <li> <img src="img/2.png" /> </li>
        <li> <img src="img/3.png" /> </li>
        <li> <img src="img/4.png" /> </li>
        <li> <input type="checkbox" name className="left-check" /></li>
        <li> <img src="img/1.png" /> </li>
        <li> <img src="img/2.png" /> </li>
        <li> <img src="img/3.png" /> </li>
        <li> <img src="img/4.png" /> </li>
      </div>
    </div>  
  </section>
  <section className="quantity">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">  
          <div className="quantity-category">
            <h4 className="tittle"> Pool  <span> QTY </span> </h4>
            <ul>  
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">  
          <div className="quantity-category">
            <h4 className="tittle"> Pool  <span> QTY </span> </h4>
            <ul>  
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">  
          <div className="quantity-category">
            <h4 className="tittle"> Pool  <span> QTY </span> </h4>
            <ul>  
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">  
          <div className="quantity-category">
            <h4 className="tittle"> Pool  <span> QTY </span> </h4>
            <ul>  
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
              <li> <a href="#" className="clos"> <i className="fa fa-times-circle" /> </a>  <img src="img/1.png" /> <img src="img/2.png" />  <span>x</span>  <span className="price"> 999 </span></li>
            </ul>
          </div>
        </div>
      </div>  
    </div>  
  </section>
  <div className="total-price">
    <div className="container">
      <div className="row"> 
        <div className="col-sm-6">  
          <div className="price-box">
            <h4> Adv. D : <span> 200 </span> </h4>
          </div> 
        </div>
        <div className="col-sm-6">  
          <div className="price-box right">
            <h4> Total : <span> 200 </span> </h4>
          </div> 
        </div>
      </div>
    </div>
  </div>
  <div className="submit-sec">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="left-box"> <a href="#" className="review-btn"> Review </a> </div>  
        </div>
        <div className="col-sm-6">
          <div className="left-box"> <a href="#" className="review-btn submit"> Submit </a> </div>  
        </div>
      </div>
    </div>
  </div></div>

    
    
    
    
    
    
    
    
  );
}

export default App;
