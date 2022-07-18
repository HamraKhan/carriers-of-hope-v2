import styled from "styled-components";
import { colors } from "./variables/variables";

export const Styles = styled.div`
  .detail-content {
    margin-top:2rem;
    padding: 1rem;
    // width: 100%;
    background-color:  ${colors.bg};
    a {
      text-decoration: none;
    }
    @media (min-width: 800px) {
      width: 750px;
      margin: 0 auto;
    }
    @media (min-width: 1250px) {
      width: 1150px;
    }
    .back-button{
      display:flex;
      margin-left:4.5rem;
      background-color:transparent;
      border:none;
      
      .icon{
        margin-top:1.2px;
      }
      
    }

    .product-card {
      background-color: ${colors.bg};
      padding-bottom: 1.5rem;
      width: 350px;
      height: 270px;
      color: ${colors.text1};
      box-shadow: #1B1A17;
      margin: 1rem 0.4rem;

      @media (min-width: 605px) {
        height: 350px;
        margin:2rem;    
        display:flex;
        justify-content:space-evenly;    
      }

      @media (min-width: 750px) {
        margin: 1rem;
        width: 700px;
        height: 450px;    
      }
      @media (min-width: 1250px) {
        margin: 2rem 1rem;
        width: 800px;
        height: 600px;
      }

      &:hover {
        color: #1B1A17;
      }
      
      .image-container {
        width: 250px;
        
        @media (min-width: 605px) {
          width: 330px;
                  
        }

        @media (min-width: 950px) {
          width: 350px;
        }
        @media (min-width: 1250px) {
          width: 450px;
        }


        img{
          border-radius:16px;
          width:100%;
          height: auto;
          object-fit:cover;
          @media (min-width: 950px) {
           
          }
        }
      }        

      .card-text {
       
        padding-bottom: 0.5rem;
        padding-left:0.5rem;
        @media (min-width: 650px) {
          display:flex;
          flex-direction:column;
        }
        .p-name{
          text-decoration:none;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0;
          color: ${colors.text1};
          @media (min-width: 950px) {
          font-size: 1.3rem;
          }
          
          }
        .p-category{
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
          color: ${colors.text1};
        
          @media (min-width: 950px) {
          font-size: 1.1rem;
          }
          
        }
        .nav-button{
          padding:3px;
          @media (min-width: 950px) {
            padding:3px 5px;

            }
            
        }


      }
    
}
`;
