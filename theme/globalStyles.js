import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
     box-sizing: border-box;
    
    
    }


/*
@font-face {
font-family: "SFRounded-Bold";
font-display: block;
  src: local("SFRounded-Bold"), url("/assets/fonts/SFRounded-Bold.ttf") format("opentype");
}

@font-face {
font-family: "SFRounded-Regular";
font-display: block;
  src: local("SFRounded-Regular"), url("/assets/fonts/SFRounded-Regular.ttf") format("opentype");
}*/
     
  body {
    margin: 0;
    top:0;
    padding: 0;
    background: #111418;
    overflow-x: hidden;
    font-family: "SFRounded-Regular";

  }
  a{
    text-decoration: none;
    color: inherit;
    
    
  }
  a:hover {
  cursor: pointer;
}

  textarea:focus, input:focus{
    outline: none;
}


::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #1E212A; 
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #9B1CFF; 
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff; 
}

.star-icon{
  background-image: url('/assets/icons/star.svg');
  height: 24px;
    width: 35px;
    display: block;
}
.github-icon{
  background-image: url('/assets/icons/github.svg');
  height: 24px;
    width: 24px;
    display: block;
}


.branch-icon{
  background-image: url('/assets/icons/branch.svg');
  height: 24px;
    width: 33px;
    display: block;
}
.home-icon{
  background-image: url('/assets/icons/home.svg');
  height: 25px;
    width: 45px;
    display: block;
}

.issue-icon{
  background-image: url('/assets/icons/issue.svg');
  height: 25px;
    width: 40px;
    display: block;
}

.react{
  background-image: url('/assets/icons/react.png');
  height: 30px;
    width: 42px ;
    display: block;
}

.angular{
  background-image: url('/assets/icons/angular.png');
  height: 27px;
    width: 19px;
    display: block;
}

.vue{
  background-image: url('/assets/icons/vue.png');
  height: 19px;
    width: 21px;
    display: block;
}

.javascript-typescript{
  background-image: url('/assets/icons/javascript.png');
  height: 20px;
    width: 25px;
    display: block;
}
`;

export default GlobalStyle;
