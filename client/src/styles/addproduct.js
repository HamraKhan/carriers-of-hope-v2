import styled from "styled-components";
import { colors } from "../styles/variables/variables";

export const Styles = styled.div`

.form-container{
   
   width:330px;
   height:300px;
   margin:1rem auto;


   @media (min-width: 500px) {
      
      width:450px;
      height:550px; 
    }
    @media (min-width: 650px) {
      width:620px;
      height:550px; 
    }
    @media (min-width: 950px) {
      width:920px;
      height:700px; 
    }

   input{
      padding: 10px 0;
      margin-bottom: 30px;
   }


   textarea{
      height: 80px;
      padding: 10px 0;
      margin-bottom: 40px;
   }

   input,  textarea {
      width: 100%;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid #999;
   }
   textarea{	
      margin-bottom: 20px;
   }

   .submit-btn {
      font-size: 1.1em;
      border: none;
      cursor: pointer;
      background: ${colors.green};
      color: #FFF;
      margin-top: 1rem;
      margin-bottom: 0;
      padding:3px 5px;
   }

   form{
      
      div{
         position: relative;
         
         label {
            // position: absolute;
            top: 10px;
            left: 0;
            color: #999;
            pointer-events: none;
            transition: .5s;
         }
       }
   }

   input:focus ~ label,  textarea:focus ~ label, 
   input:valid ~ label,  textarea:valid ~ label {
      top: -12px;
      left: 0;
      color: #37a000;
      font-size: 1em;
      font-weight: bold;
   }

   input:focus ~ label,  textarea:focus ~ label, 
   input:valid,  textarea:valid {
   border-bottom: 2px solid #37a000;
   }
}
`