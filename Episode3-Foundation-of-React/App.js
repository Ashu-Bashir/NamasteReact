import React from "react"
import ReactDOM from "react-dom/client"
       
        // const heading = <h1 title="heading" key="h1"> This is the heading</h1> // if a single line code
        const heading = () => <h1 title="heading" key="h1"> This is the heading</h1> // if a single line code

        
        const heading2 = (
        <h1 title="heading" key="h1"> This is the heading</h1>  // if we have multi lines code , use()
        )
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading) // we return a react element via this 



         //Note:  if a single line we have to return , we dont have to wrap it in ()
        // const FunctionalComponent = () => {
        //         return (
        //         <div>
        //         <h1 id="heading" key="h1"> Hello! I am a functional component</h1> 
        //         <h2 id="heading2" key= "h2"> This is the heading 2</h2>
        //         </div>
        //         )
        // }


        // Note: if we dont have to write return. we camn write like this
        const FunctionalComponent = () => (
                <div>
                 {heading()}
                 {1+7+7}
                <h1 id="heading" key="h3"> Hello! I am a functional component</h1> 
                <h2 id="heading2" key= "h2"> This is the heading 2</h2>
                </div>
                )
        

        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(<FunctionalComponent/>)