import { state, subscribe } from "./state.js"; 
import { render } from "./renderer.js"; 
import { EmployeeList } from "./Components/EmployeeList.js"; 
import "./Components/Controls.js"; 
 
 
const root = document.getElementById("app"); 
 
function App() { 
    return ` 
        ${EmployeeList(state.employees)} 
    `; 
} 
 
function updateUI() { 
    render(App(), root); 
} 
 
subscribe(updateUI); 
updateUI(); 