import React, { Fragment, useState, useEffect } from "react";
import "./cssallf.css";
import { registrationApi } from "./axios";
import { category } from "./axios";
import { MoviesApi } from "./axios";
import CircleLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const Form = () => {
  // react use state
  // before js
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [subcategoryS, setsubcategorys] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [isActive, setisActive] = useState("");
  const [imge, setimge] = useState("");
  const [loading, setLoding] = useState(false);
  const [REGISTER, setREGISTER] = useState(false);
  const [CATEGORY, setCATEGORY] = useState(false);
  const [count, setCount] = useState(0);

  //   const useEffect = async () => {
  //     setLoding(true)
  //           setTimeout(() => {
  //               setLoding(false)

  //             },500)

  // }

  const handleSignIn = async () => {
    // handle api request
    if (email && password && name && gender && dateOfBirth && phoneNumber) {
      try {
        const data = {
          email: email,
          password: password,
          name: name,
          gender: gender,
          dateOfBirth: dateOfBirth,
          phoneNumber: phoneNumber,
          subcategory: subcategory,
          setsubcategorys: setsubcategorys,
        };
        const result = await registrationApi(data);
        console.log("result", result);
      } catch (err) {
        console.log("error");
        alert("api calling error");
      }
    } else {
      alert("Validation failed");
    }
  };

  //movies

  const MoviesApi = async () => {
    // handle api request
    if (title && description && isActive && imge) {
      try {
        const data = {
          title: title,
          description: description,
          isActive: isActive,
          imge: imge,
        };
        const result = await MoviesApi(data);
        alert("operation successfully done");
      } catch (err) {
        console.log("error");
        alert("api calling error");
      }
    } else {
      alert("Validation failed");
    }
  };
  

  const handleAddMovies = async () => {
        setLoding(true)
        if (subcategory && subcategoryS) {
          try {
            const data = {
              name: subcategory,
              subcategory: subcategoryS,
            };
            const result = await category(data);
            setLoding(false)
            alert("operation successfully done");
          } catch (err) {
            setLoding(false)
            alert("api calling error");
          }
        } else {
          setLoding(false)
          alert("Validation failed");
        }
        
  }
  
  const handlCATEGORY = async () => {
        setCATEGORY(true)
        if (subcategory && subcategoryS) {
          try {
            const data = {
              name: subcategory,
              subcategory: subcategoryS,
            };
            const result = await category(data);
            setCATEGORY(false)
            alert("operation successfully done");
          } catch (err) {
            setCATEGORY(false)
            alert("api calling error");
          }
        } else {
          setCATEGORY(false)
          alert("Validation failed");
        }

  }
  const handlREGISTER = async () => {
        setREGISTER(true)
        if (subcategory && subcategoryS) {
          try {
            const data = {
              name: subcategory,
              subcategory: subcategoryS,
            };
            const result = await category(data);
            setREGISTER(false)
            alert("operation successfully done");
          } catch (err) {
            setREGISTER(false)
            alert("api calling error");
          }
        } else {
          setREGISTER(false)
          alert("Validation failed");
        }
        
  }
  
  return ( 
   
    
    <Fragment>
      <div className="conatiner">
        {/* form 1 */}
          <h2>movies</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                required
                className="input-field"
                autoComplete="off"
                onChange={(e) => settitle(e.target.value)}
                value={title}
                
              />
              <label>title</label>
              <i class="bx bx-edit"></i>
            </div>

            <div className="form-group">
              <input
                type="text"
                required
                className="input-field"
                autoComplete="off"
                onChange={(e) => setdescription(e.target.value)}
                value={description}
              />
              <label>description</label>
              <i class="bx bx-edit-alt"></i>
            </div>

            <div className="form-group">
              <input
                type="text"
                required
                className="input-field"
                autoComplete="off"
                onChange={(e) => setisActive(e.target.value)}
                value={isActive}
              />
              <label>isActive</label>
              <i class="bx bx-edit-alt"></i>
            </div>

            <div className="form-group">
              <input
                type="img"
                required
                className="input-field"
                autoComplete="off"
                onChange={(e) => setimge(e.target.value)}
                value={imge}
              />
              <label>imge</label>
              <i class="bx bx-image"></i>
            </div>
            <p>
              <input type="checkbox" />
              remember me <a href="">forget password</a>
            </p>
            {loading ? (
                        <CircleLoader
                        color={"#cdb9cf"}
                        loading={loading}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
            ): (
            <input id="btn" type="button" value="Add movies" onClick={()=> handleAddMovies()}/>
            )}
            <p>
              dont' have a account? <a href="">register</a>
            </p>
          </form>


         
      </div>
      


      <div>
        {/* form */}
        <form className="conatiner">
          <h2>category</h2>
            <div className="form-group">
              <input
                type="text"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setsubcategory(e.target.value)}
                value={subcategory}
              />
              <label>subcategory</label>
              <i class="bx bx-category-alt"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setsubcategorys(e.target.value)}
                value={subcategoryS}
              />
              <label>Category</label>
              <i class="bx bx-category-alt"></i>
            </div>
            {CATEGORY ? (
                        <CircleLoader
                        color={"#cdb9cf"}
                        loading={CATEGORY}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
            ):(
            <input id="btn" type="button" value="Add Category"  onClick={()=> handlCATEGORY()} />
            )}
          </form>
      </div>



      <div>
         {/* form */}
         <form className="conatiner">
          <h2>register</h2>
            <div className="form-group-2">
              <input
                type="text"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>Email</label>
              <i class="bx bx-envelope"></i>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label>password</label>
              <i class="bx bx-lock-alt"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
              <label>name</label>
              <i class="bx bxs-user-check"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setgender(e.target.value)}
                value={gender}
              />
              <label>gender</label>
              <i class="bx bx-male-female"></i>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setdateOfBirth(e.target.value)}
                value={dateOfBirth}
              />
              <label>dateOfBirth</label>
              <i class="bx bx-calendar"></i>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setphoneNumber(e.target.value)}
                value={phoneNumber}
              />
              <label>phoneNumber</label>
              <i class="bx bx-phone"></i>
            </div>
            {/* islouding */}
            {REGISTER ? (
                        <CircleLoader
                        color={"#cdb9cf"}
                        loading={REGISTER}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
            ):
            
            <input id="btn" type="button" value="register" onClick={()=> handlREGISTER()} />
          }
          </form>
          {/* Using the State Hook */}
          <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
      </div>
    </Fragment>
  );
};

export default Form;
